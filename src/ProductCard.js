import React, {Fragment} from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from './elements';
import AddToBasket from './AddToBasket';
import Link from './helpers/Link';
import {product} from './helpers/routes';
import request from 'superagent';
import Spinner from './Spinner';
import host from './constants/Host';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item ? this.props.item : null,
            showAddToBasket: true
        };
    }

    componentDidMount() {
        if(this.props.item) {
            this.setState({item: this.props.item});  
        } else {
            this.setState({showAddToBasket: false});
            request
            .get(`${host}/product/${this.props.id}`)
            .end((err, res) => {
            this.setState({item: res.body});
            });
        }
    }

    render() {
        if (!this.state.item) {
            return <Spinner/>
        }
        const {item, item: {title, img, price, id}, showAddToBasket} = this.state;
        return ( 
        <div style={{border:"1px solid blue"}}>
            <Title title={title}/>
            { img.map((imageItem, i) => 
            <Link key={i} to={product(id)}>
                <Image img={imageItem}/>
            </Link>
            )}
            <Price price={price}/>
            {showAddToBasket && <AddToBasket item={item}/>} 
        </div>);
    }
};

export default ProductCard;
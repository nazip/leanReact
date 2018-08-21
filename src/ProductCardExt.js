import React, {Fragment} from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from './elements';
import AddToBasket from './AddToBasket';
import Link from './helpers/Link';
import {product} from './helpers/routes';
import request from 'superagent';
import Spinner from './Spinner';
import host from './constants/Host';

class ProductCardExt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null};
    }

    componentDidMount() {
        request
        .get(`${host}/product/${this.props.id}`)
        .end((err, res) => {
        this.setState({item: res.body});
        });
    }

    render() {
        if (!this.state.item) {
            return <Spinner/>
        }
        const {item: {title, img, price}} = this.state;
        return ( 
        <div style={{border:"1px solid blue"}}>
            <Title title={title}/>
            { img.map((imageItem, i) => 
                <Image key={i} img={imageItem}/>
            )}
            <Price price={price}/>
        </div>);
    }
};

export default ProductCardExt;
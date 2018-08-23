import React, {Fragment} from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from './elements';
import AddToBasket from './AddToBasket';
import Link from './helpers/Link';
import {product} from './helpers/routes';
import request from 'superagent';
import Spinner from './Spinner';
import host from './constants/Host';
import Carusel from './Carusel';
import ShowPortal from './ShowPortal';

class ProductCardExt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null};
    }

    componentDidMount() {
        request
        .get(`${host}/product/${this.props.id}`)
        .timeout({
            response: 5000,  
            deadline: 60000, 
        })
        .end((err, res) => {
        this.setState({item: res.body});
        });
    }

    render() {
        if (!this.state.item) {
            return <Spinner/>;
        }
        const {img} = this.state.item;
        return ( 
        <Carusel>
            { img.map((imageItem, i) => 
                 <Image key={i} img={imageItem}  style={{className: 'carusel-child'}}/>
            )}
        </Carusel>    
        );
    }
};

export default ProductCardExt;
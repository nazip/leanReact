import React, {Fragment} from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from './elements';
import AddToBasket from './AddToBasket';
import Link from './helpers/Link';
import {product} from './helpers/routes';

export default ({item, item: {title, img, price, id}}) => {
    return ( 
    <div style={{border:"1px solid blue"}}>
        <Title title={title}/>
        <Link to={product(id)}>
            <Image img={img}/>
        </Link>
        <Price price={price}/>
        <AddToBasket item={item}/> 
    </div>);    
};
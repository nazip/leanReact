import React, {Fragment} from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from './elements';
import AddToBasket from './AddToBasket';

export default ({item, item: {title, img, price}}) => {
    return ( 
    <div style={{border:"1px solid blue"}}>
        <Title title={title}/>
        <Image img={img}/>
        <Price price={price}/>
        <AddToBasket item={item}/> 
    </div>);    
};
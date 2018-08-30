import React from 'react';
import { Image, Price, TextBox as Title, Quantity, Button } from '/src/elements';
import Link from '/src/helpers/Link';
import {product} from '/src/helpers/routes';
import AddToBasket from '/src/redux/containers/AddToBasket';

export default ({item, item: {title, id, img, price}}) => (
    <div style={{border:"1px solid blue"}}>
        <Title title={title}/>
        <Link to={product(id)}>
        <Image img={img[0]} style={{width: 'auto'}}/>
        </Link>
        <Price price={price}/>
        <AddToBasket item={item}/>
    </div>
);


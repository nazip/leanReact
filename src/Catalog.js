import React, { Fragment } from 'react';
import ProductCard from './ProductCard';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items}
    } 

    delItem(item, n) {
        this.setState({items:  this.state.items.map((el) => {
            if(el.quantity >= n && item.id == el.id) {
              return Object.assign({}, el, {quantity: el.quantity-n});
            } else return el;
        })});    
    }

    addItem(item, n) {
        this.setState({items:  this.state.items.map((el) => {
            if(el.basket >= n  && item.id == el.id) {
              return Object.assign({}, el, {quantity: el.quantity+n});
            } else return el;
        })});    
    } 

    render() {
        const {items}  = this.state;
        return (
            <Fragment>
               {items.map( (item) => <ProductCard key={item.id} item={item}/>)}  
            </Fragment>      
        );    
    }
};

export default Catalog;
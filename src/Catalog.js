import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import request from 'superagent';
import Spinner from './Spinner';
import host from './constants/Host';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        request
            .get(`${host}/products`)
            .end((err, res) => {
                this.setState({items: res.body})
      });
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
        if (items.length == 0) {
            return <Spinner color='blue'/>;
        } else {
        return (
            <Fragment>
               {items.map( (item) => <ProductCard key={item.id} item={item}/>)}  
            </Fragment>      
        )};    
    }
};

export default Catalog;
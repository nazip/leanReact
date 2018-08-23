import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import request from 'superagent';
import Spinner from './Spinner';
import host from './constants/Host';
import NetworkError from './NetworkError';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], apiError: false};
    }

    componentDidMount() {
        request
            .get(`${host}/products`)
            .timeout({
                response: 10000,  
                deadline: 60000, 
            })
            .then((res) => this.setState({items:res.body}),
            (err) => {
                if(err.timeout) {
                    this.setState({items: [], apiError: true}) 
                }    
            }) 
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
        const {items, apiError}  = this.state;
        if (items.length == 0 && !apiError) {
            return <Spinner color='blue'/>;
        } else if(apiError) {
            return <NetworkError/>;
        } else {
            return (
            <Fragment>
               {items.map( (item) => <ProductCard key={item.id} item={item}/>)}  
            </Fragment>      
        )};    
    }
};

export default Catalog;
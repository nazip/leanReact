import React, { Fragment } from 'react';
import Product from './Product';
import Spinner from '/src/components/shared/Spinner';
import NetworkError from '/src/components/shared/NetworkError';
import Basket from '/src/redux/containers/Basket';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], apiError: false};
    }
   
    componentDidUpdate() {
        (this.props.items != this.state.items) &&                  
            this.setState({items: this.props.items});
    }

    componentDidMount() {
        this.props.fetchItems();
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
                <Basket/>  
                {items.map( (item) => <Product key={item.id} item={item}/>)}  
            </Fragment>      
        )};    
    }
};

export default Catalog;
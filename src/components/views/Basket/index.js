import React, {Fragment} from 'react';
import AppContext from '/src/context';
import Catalog from '/src/components/views/Catalog';
import Portal from '/src/components/shared/Portal';
import { Button } from 'reactstrap';
import ProductsTable from '/src/components/shared/ProductsTable';
import {Redirect} from 'react-router';
import history from '/src/history';
import {root} from '/src/helpers/routes';

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false, items: []};
        this.itemsQuantity = this.itemsQuantity.bind(this);
    }

    // delItem(item, n) {
    //     let items = this.state.items.map((el) => {
    //         if(item.id == el.id ) {
    //             return Object.assign({}, el, {quantity: el.quantity-n});
    //         } else return el;
    //     });    
    //     this.setState({items: items.filter((item) => (item.quantity > 0))});
    // }

    // addItem(item, n) {
    //     let found = false;
    //     let items = this.state.items.map((el) => {
    //         if(item.id == el.id) {
    //           found = true;  
    //           return Object.assign({}, el, {quantity: el.quantity+n});
    //         } else return el;
    //     });
    //     if(!found) items[items.length] = Object.assign({}, item, {quantity: n});    
    //     this.setState({items: items});
    // } 

    toggle(e) {
        if(!this.state.isOpen && this.state.items.length == 0) { 
            history.push(root(), {message: 'basket empty'});
        }    
        this.setState({isOpen: !this.state.isOpen, 
                    left: e.clientX,
                    top: e.clientY}); 
    }

    itemsQuantity() {
        return this.state.items.reduce((sum,cur) => sum+cur.quantity, 0);
    }

    render() {
        const {left, top, isOpen, items} = this.state;
        return (
            <Fragment>
                {!isOpen && 
                <Button onClick={(e) => this.toggle(e)} >
                    {isOpen ? 'Закрыть' : `Кол-во покупок = ${this.itemsQuantity()}`}
                </Button>
                }
                { isOpen && items.length != 0 &&
                <Portal style={{left: left, top: top}}
                                    onClose={(e) => this.toggle(e)}>
                    <ProductsTable items={items} 
                                    delItem={(item, n) => this.delItem(item, n)}/>
                    <Button onClick={(e) => this.toggle(e)}>Закрыть</Button>
                </Portal>             
                }
                {isOpen && items.length == 0 && <Redirect to={root()}/>}
            </Fragment>
        );
    }
};

export default Basket;

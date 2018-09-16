import React, { Fragment } from 'react';
import Portal from '~/src/components/shared/Portal';
import Button from '~/src/elements/Button';
import ProductsTable from '~/src/components/shared/ProductsTable';
import { Redirect } from 'react-router';
import history from '~/src/history';
import { root } from '~/src/helpers/routes';

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.itemsQuantity = this.itemsQuantity.bind(this);
    }

    componentDidMount() {
        this.props.readItems();
    }

    toggle(e) {
        const { isOpen, toggleState, items, } = this.props;
        if(!isOpen && items.length == 0) { 
            history.push(root(), {message: 'basket empty'});
        }    
        toggleState({ left: e.clientX, top: e.clientY});
    }

    itemsQuantity() {
        return this.props.items.reduce((sum,cur) => sum+cur.quantity, 0);
    }

    render() {
        const { items, delItem, isOpen, 
                position: { left, top } } = this.props;
        return (
            <Fragment>
                {!isOpen && 
                <Button onClick={(e) => this.toggle(e)}>
                    {isOpen ? 'Закрыть' : `Кол-во покупок = ${this.itemsQuantity()}`}
                </Button>
                }
                { isOpen && items.length != 0 &&
                <Portal style={{left: left, top: top}}
                                    onClose={(e) => this.toggle(e)}>
                    <ProductsTable items={items} 
                                delItem={(item, n) => delItem(item, n)}/>
                    <Button onClick={(e) => this.toggle(e)}>Закрыть</Button>
                </Portal>             
                }
                {isOpen && items.length == 0 && <Redirect to={root()}/>}
            </Fragment>
        );
    }
};

export default Basket;

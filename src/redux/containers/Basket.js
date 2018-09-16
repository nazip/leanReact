import { connect } from 'react-redux';
import { addItem, delItem, changeBasketState } from '../actions/basket';
import { readItems, removeItemFromLocalStorage } from '../actions/localStorage';
import Basket from '~/src/components/views/Basket';


const stateToProps = (state)  => (
    {
        items: state.basket.items,
        isOpen: state.basket.isOpen,
        position: state.basket.position
    }    
);

const actionToProps = (dispatch) => (
    {
        addItem: (item,n) => dispatch(addItem(item,n)),
        delItem: (item,n) => {
            dispatch(delItem(item,n));
            dispatch(removeItemFromLocalStorage(item,n));
        },
        readItems: () => dispatch(readItems()),
        toggleState: (position) => (
            dispatch(changeBasketState(position))) 
    }    
);

export default connect(stateToProps, actionToProps)(Basket);
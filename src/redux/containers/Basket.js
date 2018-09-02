import {connect} from 'react-redux';
import {addItem, delItem} from '../actions/basket';
import Basket from '/src/components/views/Basket';


const stateToProps = (state)  => (
    {
        items: state.basket.items
    }    
);

const actionToProps = (dispatch) => (
    {
        addItem: (item,n) => addItem(dispatch,item,n),
        delItem: (item,n) => delItem(dispatch,item,n)
    }    
);

export default connect(stateToProps, actionToProps)(Basket);
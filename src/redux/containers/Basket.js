import {connect} from 'react-redux';
import {addItem, delItem, readItems} from '../actions/basket';
import Basket from '~/src/components/views/Basket';


const stateToProps = (state)  => (
    {
        items: state.basket.items
    }    
);

const actionToProps = (dispatch) => (
    {
        addItem: (item,n) => dispatch(addItem(item,n)),
        delItem: (item,n) => dispatch(delItem(item,n)),
        readItems: () => dispatch(readItems()),
    }    
);

export default connect(stateToProps, actionToProps)(Basket);
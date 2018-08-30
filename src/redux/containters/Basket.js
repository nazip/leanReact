import {connect} from 'react-redux';
import {addItem} from '../actions/basket';
import AddToBasket from '/src/components/views/Catalog/AddToBasket';


const stateToProps = (state)  => (
    {
        items: state.basket.items
    }    
);

const actionToProps = (dispatch) => (
    {
        addItem: () => dispatch(addItem())
    }    
);

export default connect(stateToProps, actionToProps)(AddToBasket);
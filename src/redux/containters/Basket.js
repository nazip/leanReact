import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import Basket from '/src/components/views/Basket';


const stateToProps = (state)  => (
    {
        items: state.basket.items
    }    
);

const actionToProps = (dispatch) => (
    {
        // fetchItems: () => dispatch(fetchProducts())
    }    
);

export default connect(stateToProps, actionToProps)(Basket);
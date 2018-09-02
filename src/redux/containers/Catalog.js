import {connect} from 'react-redux';
import fetchProducts from '../actions/products';
import Catalog from '/src/components/views/Catalog';


const stateToProps = (state)  => (
    {
        items: state.products.items,
        apiError: state.products.error ? true : false
    }    
);

const actionToProps = (dispatch) => (
    {
        fetchItems: () => dispatch(fetchProducts())
    }    
);

export default connect(stateToProps, actionToProps)(Catalog);
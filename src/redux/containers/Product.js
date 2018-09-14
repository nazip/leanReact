import { connect } from 'react-redux';
import fetchProduct from '../actions/product';
import Product from '~/src/components/views/Product';


const stateToProps = (state)  => (
    {
        item: state.product.item
    }    
);

const actionToProps = (dispatch) => (
    {
        fetchItem: (id) => dispatch(fetchProduct(id))
    }    
);

export default connect(stateToProps, actionToProps)(Product);
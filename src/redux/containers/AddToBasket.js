import { connect } from 'react-redux';
import { addItem } from '../actions/basket';
import AddToBasket from '~/src/components/views/Catalog/AddToBasket';

const actionToProps = (dispatch) => (
    {
        addItem: (item, n) => dispatch(addItem(item, n))
    }    
);

export default connect(null, actionToProps)(AddToBasket);
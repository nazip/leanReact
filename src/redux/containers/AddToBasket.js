import { connect } from 'react-redux';
import { addItem } from '../actions/basket';
import { addItemToLocalStorage } from '../actions/localStorage';
import AddToBasket from '~/src/components/views/Catalog/AddToBasket';

const actionToProps = (dispatch) => (
    {
        addItem: (item, n) => {
            dispatch(addItem(item, n));
            dispatch(addItemToLocalStorage(item, n));
        }    
    }    
);

export default connect(null, actionToProps)(AddToBasket);
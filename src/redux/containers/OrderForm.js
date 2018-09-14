import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import OrderForm from '../forms/OrderForm';
import order from '../actions/order';
import { clearBasket } from '../actions/basket'; 
import { clearItems } from '../actions/localStorage'; 
import history from '~/src/history';

const validate = (values) => {
    const errors = {};
    if (!values.userName) {
        errors.userName = 'Required';
    }
    if (!values.userPhone) {
        errors.userPhone = 'Required';
    }
    if (!values.userAddress) {
        errors.userAddress = 'Required';
    }
    if (!values.userEmail) {
        errors.userEmail = 'Required';
    }
    if(values.userEmail) {
        if((values.userEmail.indexOf('@') == -1) 
        || (values.userEmail.indexOf('.') == -1)) { 
            errors.userEmail = 'email must have symbols "@ and ."'; 
        }    
    }
    return errors;
};

const warn = (values) => {
   const warnings = {};
   if (values.userName && values.userName.length < 3) {
        warnings.userName = 'user length must be > 3';
   }
   return warnings;
};

const onSubmit = (values, dispatch) => {
    dispatch(order(JSON.stringify(values))).then(
        (response) => {
            dispatch(clearBasket());
            dispatch(clearItems());

            history.push('/products', {message: 'Order sended !!!'});
        }    
    );
}; 

const stateToProps = (state) => ({
    submitStatus: state.order.status
});

export default connect(stateToProps)(reduxForm({
    form: 'OrderForm',
    onSubmit,
    validate,
    warn
})  
(OrderForm));
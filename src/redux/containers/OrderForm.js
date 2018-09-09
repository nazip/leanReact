import { reduxForm } from 'redux-form';
import OrderForm from '../forms/OrderForm';
import order from '../actions/order';

const validate = (values) => {
    console.log('vvv=', values);
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

    return errors;
};

const warn = (values) => {
   const warnings = {};
   if (values.userName && values.userName.length < 3) {
        warnings.userName = 'user length must be > 3';
   }
   return warnings;
};

const onSubmit = (values, dispatch) => (
    dispatch(order(values))
); 

export default reduxForm({
    form: 'OrderForm',
    onSubmit,
    validate,
    warn
})  
(OrderForm);
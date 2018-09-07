import { reduxForm } from 'redux-form';
import OrderForm from '../forms/OrderForm';
import { connect } from 'react-redux';
import { EEXIST } from 'constants';

const validate = (values) => {
    const errors = {};
    console.log('values=', values);
    if (!values.userName) {
        errors.userName = 'Required'
    }
    if (!values.userPhone) {
        errors.userPhone = 'Required'
    }
    if (!values.userAddress) {
        errors.userAddress = 'Required'
    }
    if (!values.userEmail) {
        errors.userEmail = 'Required'
    }
    return errors
};

const actionToProps = (dispatch) => (
    {
        onSubmit  
    }
)

const onSubmit = (e) => {
    console.log('onsubmit', JSON.stringify(this.state.form.OrderForm.values));
    e.preventDefault();
}

export default  connect(null, actionToProps)(reduxForm({
    form: 'OrderForm',
    validate
})(OrderForm));
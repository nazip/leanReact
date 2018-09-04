import { reduxForm } from 'redux-form';
import OrderForm from '../forms/OrderForm';

export default  reduxForm({
    form: 'OrderForm'
})(OrderForm);
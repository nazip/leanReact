import React from 'react';
import { Field } from 'redux-form';
import Button from '/src/elements/Button';
import renderFields from './renderFields';
import store from '../store';
import { Alert } from '/src/elements';

export default ({handleSubmit, pristine, submitting, reset}) => (
    <form onSubmit={handleSubmit}>
        <Field label='Ф.И.О.' component={renderFields} name='userName' type='text'/>
        <Field label='Телефон' component={renderFields} name='userPhone' type='text'/>
        <Field label='Адрес' component={renderFields} name='userAddress' type='text'/>
        <Field label='Email' component={renderFields} name='userEmail' type='text'/>
        {(!pristine && !submitting) && 
          <Button outline color="info" onClick={reset}>Clear</Button>
        }
        <Button type='submit'>Отправить</Button>
        {store.getState().order.status == 'failure'
         && (<Alert color='danger'>submit error</Alert>)
        }
    </form>
);
import React from 'react';
import { Field } from 'redux-form';
import Button from '/src/elements/Button';
import renderFields from './renderFields';

export default ({onSubmit, pristine, submitting, reset}) => (
    <form onSubmit={onSubmit}>
        <Field label='Ф.И.О.' component={renderFields} name='userName' type='text'/>
        <Field label='Телефон' component={renderFields} name='userPhone' type='text'/>
        <Field label='Адрес' component={renderFields} name='userAddress' type='text'/>
        <Field label='Email' component={renderFields} name='userEmail' type='text'/>
        {(!pristine && !submitting) && 
          <Button outline color="info" onClick={reset}>Clear</Button>
        }
        <Button type='submit'>Отправить</Button>
    </form>
);
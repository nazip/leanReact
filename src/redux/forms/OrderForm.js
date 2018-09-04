import React from 'react';
import { Field } from 'redux-form';
import Button from '/src/elements/Button';
import renderFields from './renderFields';

export default ({onSubmit, pristine, submitting, reset}) => (
    <form onSubmit={onSubmit}>
        <Field label='Имя'    component={renderFields} name='userName' type='text'/>
        <Field label='Email'  component={renderFields} name='userEmail' type='text'/>
        {(!pristine && !submitting) && 
          <Button onClick={reset} title='Clear'/>
        }
        <input type='submit' value='Отправить'/>
    </form>
);
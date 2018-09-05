import React from 'react';
import { Field } from 'redux-form';
import Button from '/src/elements/Button';
<<<<<<< HEAD

export default ({onSubmit, pristine, submitting, clear}) => (
    <form>
        <Field onSubmit={onSubmit} component='input' name='userName' type='text'/>
        <Field onSubmit={onSubmit} component='input' name='userEmail' type='text'/>
=======
import renderFields from './renderFields';

export default ({onSubmit, pristine, submitting, reset}) => (
    <form onSubmit={onSubmit}>
        <Field label='Имя'    component={renderFields} name='userName' type='text'/>
        <Field label='Email'  component={renderFields} name='userEmail' type='text'/>
>>>>>>> 147c2ed545e1d4610ecbfb9007bf7971fd5267a1
        {(!pristine && !submitting) && 
          <Button onClick={reset} title='Clear'/>
        }
        <input type='submit' value='Отправить'/>
    </form>
);
import React from 'react';
import { Field } from 'redux-form';
import Button from '/src/elements/Button';

export default ({onSubmit, pristine, submitting, clear}) => (
    <form>
        <Field onSubmit={onSubmit} component='input' name='userName' type='text'/>
        <Field onSubmit={onSubmit} component='input' name='userEmail' type='text'/>
        {(!pristine && !submitting) && 
          <Button onClick={reset} title='Clear'/>
        }
        <input type='submit' value='Отправить'/>
    </form>
);
import React from 'react';
import { Alert } from '~/src/elements';

export default  ({ input, label, type,
                   meta: { touched, error, warning }}) =>
{
  return (
  <div>
    <label>{label}</label>
    <input {...input} type={type}/>
    {touched && (error && (<Alert color='danger'>{error}</Alert>)
    || (warning && (<Alert color='warning'>{warning}</Alert>))
    )}
  </div>);
}; 

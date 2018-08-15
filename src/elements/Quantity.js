import React from 'react';

export default ({amount}) => (
    <div>
        <label>В наличии</label>
        <input type="number" min="0" value={amount} readOnly/>
    </div>
);
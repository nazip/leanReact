import React from 'react';

export default ({price}) => (
    <div>
        <label>Цена</label>
        <input type="number" min="0" defaultValue={price} readOnly/>
    </div>
);
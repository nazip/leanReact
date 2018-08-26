import React from 'react';
import { Button } from 'reactstrap';

export default ({items, delItem}) => (
    <table border="1">
        <tbody> 
        <tr>
            <th>Наименование</th>    
            <th>Кол-во</th>    
        </tr>    
        {items.map((item) => item.quantity > 0 ?
        <tr key={item.id}>
            <td> {item.title}</td> 
            <td>{item.quantity}</td>
            <td><Button color="info" onClick={() => delItem(item, 1)}>Удалить</Button></td>        
        </tr> : null)}   
        </tbody>
    </table>
);

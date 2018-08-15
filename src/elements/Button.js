import React, {Fragment} from 'react';

const Button = ({onClick, title, onChange = () => {}, initValue = 0 }) => {
    return (
        <Fragment>
            <input type="button" value={title} onClick={onClick}/>
            <input type="number" value={0} onChange={onChange}/>
        </Fragment>);
};

export default Button;


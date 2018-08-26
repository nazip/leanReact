import React, {Fragment} from 'react';
import { Alert, Jumbotron } from 'reactstrap';

export default ({history}) => {
    return (
    <Fragment>
        <span>
            <Jumbotron>Главная страница</Jumbotron>
            {history.location.state && 
            <Alert color='info'>{history.location.state.message}</Alert>
            } 
        </span>
    </Fragment>);
}
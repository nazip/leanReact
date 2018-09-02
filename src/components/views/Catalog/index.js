import React, { Fragment } from 'react';
import Product from './Product';
import Spinner from '/src/components/shared/Spinner';
import NetworkError from '/src/components/shared/NetworkError';
import Basket from '/src/redux/containers/Basket';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], apiError: false};
    }
   
    componentDidUpdate() {
        (this.props.items != this.state.items) &&                  
            this.setState({items: this.props.items});
        (this.props.apiError != this.state.apiError) &&
            this.setState({apiError: true});
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const {items, apiError}  = this.state;
        if (items.length == 0 && !apiError) {
            return <Spinner color='blue'/>;
        } else if(apiError) {
            return <NetworkError/>;
        } else {
            return (
            <Fragment>
                <Basket/>  
                {items.map( (item) => <Product key={item.id} item={item}/>)}  
            </Fragment>      
        )};    
    }
};

export default Catalog;
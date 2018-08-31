import React from 'react';
import { Image } from '/src/elements';
import Spinner from '/src/components/shared/Spinner';
import Carusel from '/src/components/views/Carusel';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null};
    }

    componentDidMount() {
        this.props.fetchItem(this.props.id);
    }

    componentDidUpdate() {
        (this.props.item != this.state.item) &&                  
            this.setState({item: this.props.item});
    }

    render() {
        if (!this.state.item) {
            return <Spinner/>;
        }
        const {img} = this.state.item;
        return ( 
        <Carusel>
            { img.map((imageItem, i) => 
                 <Image key={i} img={imageItem}  style={{className: 'carusel-child'}}/>
            )}
        </Carusel>    
        );
    }
};

export default Product;
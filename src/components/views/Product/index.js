import React from 'react';
import { Image } from '~/src/elements';
import Spinner from '~/src/components/shared/Spinner';
import Carusel from '~/src/components/views/Carusel';

class Product extends React.Component {

    componentDidMount() {
        this.props.fetchItem(this.props.id);
    }

    render() {
        if (!this.props.item) {
            return <Spinner/>;
        }
        return ( 
        <Carusel>
            { this.props.item.img.map((imageItem, i) => 
                 <Image key={i} img={imageItem}  style={{className: 'carusel-child'}}/>
            )}
        </Carusel>    
        );
    }
};

export default Product;
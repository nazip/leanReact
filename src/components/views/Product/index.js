import React from 'react';
import { Image } from '/src/elements';
import request from 'superagent';
import Spinner from '/src/components/shared/Spinner';
import host from '/src/constants/Host';
import Carusel from '/src/components/views/Carusel';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null};
    }

    componentDidMount() {
        request
        .get(`${host}/product/${this.props.id}`)
        .timeout({
            response: 5000,  
            deadline: 60000, 
        })
        .end((err, res) => {
        this.setState({item: res.body});
        });
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
import React from 'react';
import Portal from '/src/components/shared/Portal';
import Image from '/src/elements/Image';

class Carusel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {img: null, isOpen: false};
    }

    toggle(e) {
        this.setState({
            img: e.target, 
            isOpen: !this.state.isOpen,
            coord: {
                left: e.clientX,
                top: e.clientY
            }    
        });
    }

    render() {
        const {img, isOpen} = this.state;
        if(!isOpen) {
            return (
            <div className='carusel-parent' onClick={(e) => this.toggle(e)}>
                {this.props.children}  
            </div>);
        } else {
            const {left, top} = this.state.coord;
            return (
            <Portal style={{left: left, top: top}}
                        onClose={(e) => this.toggle(e)}>
                <Image img={{src: img.src, height: '400px', width: 'auto'}}/>
            </Portal>);
        }                           
    }
}; 

export default Carusel;
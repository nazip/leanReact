import React, {Fragment} from 'react';
import ShowPortal from './ShowPortal';
import Image from './elements/Image';

class Carusel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {img: null, isOpen: false};
    }

    toggle(e) {
        this.setState({img: e.target, isOpen: !this.state.isOpen});
    }

    render() {
        console.log('this.state=',this.state);
        const {img, isOpen} = this.state;
        return (
            <Fragment>
                {!isOpen &&
                    <div className='carusel-parent' onClick={(e) => this.toggle(e)}>
                        {this.props.children}  
                    </div>} 
                {isOpen &&
                    <ShowPortal style={{left: 0, top: 0}}
                                        onClose={(e) => this.toggle(e)}>
                        <Image img={{src: img.src, height: '400px', width: 'auto'}}/>
                    </ShowPortal>
                }                              
            </Fragment>
        );
    }
}; 

export default Carusel;
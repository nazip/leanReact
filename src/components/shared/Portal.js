import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.insertBefore(this.root, root);
        document.onclick = (e) => this.clickHandle(e);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
        document.onclick = null;
    }

    clickHandle(e) {
        // click outside -> close portal
        if(!(document.getElementById('portal').contains(e.target))) {
                this.props.onClose(e);
        }
    } 

    render() {
        const style= Object.assign({},{ 
            border:"1", 
            position:"absolute",
            backgroundColor: 'f8f9fa',
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            zIndex: 1000}, this.props.style);
        return ReactDOM.createPortal(
            <div id="portal" style={style}>
              {this.props.children}
            </div>,
            this.root
        );
    }
}

import React, {Fragment} from 'react';
import AppContext from './AppContext';

class AddToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0};
  }

  handleChange(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e, addItem) {
    addItem( this.props.item, parseInt(this.state.amount));
    this.setState({amount: 0});
    e.preventDefault();
  }

  render() {
      return (
        <AppContext.Consumer>
        { (value) => 
        <Fragment>
          <form onSubmit={(e) => this.handleSubmit(e,value.addItem)}>
            <label>
                Кол-во: 
                <input type="number" value={this.state.amount} 
                       onChange={(e) => this.handleChange(e)} />
            </label>
            <input type="submit" value="Купить" />
          </form> 
        </Fragment>}  
        </AppContext.Consumer>
    );
  }
};

  export default AddToBasket;
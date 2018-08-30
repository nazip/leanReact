import React, {Fragment} from 'react';
import AppContext from '/src/context';

class AddToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0};
  }

  handleChange(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e, item, addItem) {
    console.log('qq');
    // this.props.addItem(this.state.item, parseInt(this.state.amount));
    addItem( this.props.item, parseInt(this.state.amount));
    this.setState({amount: 0});
    e.preventDefault();
  }

  render() {
    console.log('AddToBasket props=', this.props);
    const {item, addItem} = this.props;
    return (
      <Fragment>
        <form onSubmit={(e) => this.handleSubmit(e, item, addItem)}>
          <label>
              Кол-во: 
              <input type="number" value={this.state.amount} 
                      onChange={(e) => this.handleChange(e)} />
          </label>
          <input type="submit" value="Купить" />
        </form> 
      </Fragment>  
    );
  }
};

  export default AddToBasket;
import React, {Fragment} from 'react';
import Button from '/src/elements/Button';

class AddToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0};
  }

  handleChange(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e) {
    const {item, addItem} = this.props;
    addItem( item, parseInt(this.state.amount));
    this.setState({amount: 0});
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="quantity">
              Кол-во: 
              <input className="no-spin" name="quantity" type="number" value={this.state.amount} 
                      onChange={(e) => this.handleChange(e)} />
          </label>
          <Button type='submit'>Купить</Button>
        </form> 
      </Fragment>  
    );
  }
};

  export default AddToBasket;
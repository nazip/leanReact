import React, {Fragment} from 'react';

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
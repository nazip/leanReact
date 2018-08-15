import React from 'react';

class DelFromBasket extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(e) {
      const { item, fromBasket } = this.props;  
      fromBasket( item, parseInt(this.state.value));
      this.setState({value: 0});
      e.preventDefault();
    }
  
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Кол-во: 
                <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value={"Вернуть"} />
          </form> 
      );
    }
  };

  export default DelFromBasket;
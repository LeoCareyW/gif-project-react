import React, { Component } from 'react';
import ReactDom from 'react-dom';

class List extends Component {
  constructor(props) {
    super(props)

  this.state = {
    clicked: false
  };
   this.handleClick = this.handleClick.bind(this);
}

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

   handleClick2 = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

   handleClick3 = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <React.Fragment>
          <h1 className={this.state.clicked ? 'clicked' : 'null'} onClick={this.handleClick}>1</h1>
          <h1 className={this.state.clicked ? 'clicked2' : 'null'} onClick={this.handleClick2}>2</h1>
          <h1 className={this.state.clicked ? 'clicked3' : 'null'} onClick={this.handleClick3}>3</h1>
          <h2> Hello {this.props.name} </h2>
      </React.Fragment>

      )
  }
}

export default List

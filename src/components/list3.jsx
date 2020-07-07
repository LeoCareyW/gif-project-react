import React, {Component} from 'react'
import ReactDom from 'react-dom'

class List2 extends Component {
  constructor(props) {
    super(props);

  this.state = {
    clicked: false,
    count: 0
  };
  this.handleClick = this.handleClick.bind(this)
  }


  handleClick = () => {
    const count = this.state.count
    if (count < 1 ) {
    this.setState({
      clicked: !this.state.clicked,
      count: count +1
    });
  } else {
    this.setState({
    clicked: !this.state.clicked,
    count: count -1
   });
   }
  }

  render() {
    return (
      <div>
        <h1 className={this.state.clicked ? 'clicked' : 'null'} onClick={this.handleClick}>Hello {this.props.name} {this.state.count} </h1>
      </div>
      )
  }
}

export default List2

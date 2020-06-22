import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="BLM" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif


// selected gif id is taken on click
// this is passed up to the app, and REPLACES the current id (it is reassigned using that id)

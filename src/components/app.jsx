import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "kIM7qnMGPjniTxYyju/giphy.gif?cid=ecf05e4702268b1757f227ad2cd413f7151cd116099d94ad&rid=giphy"
    }
  }

  search = (query) => {
    giphy('AK6LT1VVA7eKhwKv2xwEtIJRVNs1EBKK').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (error, result) => {
        this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "kIM7qnMGPjniTxYyju/giphy.gif?cid=ecf05e4702268b1757f227ad2cd413f7151cd116099d94ad&rid=giphy" },
      { id: "idN3vddw1kT3bVxKAg/giphy.gif?cid=ecf05e47bbc38453a2c6b6b5f3cb63551a74210c4aa3adac&rid=giphy" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
            <Gif id={this.state.selectedGifID}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;

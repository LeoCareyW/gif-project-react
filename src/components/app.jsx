import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';
import List from './list2.jsx';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "51cd116099d94ad&rid=giphy"
    };
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

   selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
      <div>
        <List name="Leo"/>
      </div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;







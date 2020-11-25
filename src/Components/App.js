import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID Cc6UuT1dUBcJuzk1Is25bOiRgd0jarXmvcfKgA0JegA',
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

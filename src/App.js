import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/serach_bar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="container">
        Simple React App
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;

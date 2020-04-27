import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "75597c0db16a43b8844163342202704";

class App extends React.Component {
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city},${country}`);
      const data = await api_call.json();
      console.log(data);
  }
  render() {
    return (
      <div>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather />
      </div>
    )
  }
}

export default App;
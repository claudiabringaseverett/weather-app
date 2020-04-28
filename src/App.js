import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "75597c0db16a43b8844163342202704";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    region: undefined,
    country: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city},${country}`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.current.temp_f,
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        humidity: data.current.humidity,
        text: data.current.condition.text,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        region: undefined,
        country: undefined,
        humidity: undefined,
        text: undefined,
        error: 'Please enter values.'
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    city={this.state.city}
                    region={this.state.region}
                    country={this.state.country} 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    text={this.state.text}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default App;
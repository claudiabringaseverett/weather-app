import React from 'react';

const Weather = () => {
    return (
        <div>
            {this.props.city && this.props.region && this.props.country && <p>Location: {this.props.city}, {this.props.region}, {this.props.country}</p>}
            {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.text && <p>Conditions: {this.props.text}</p>}
            {this.props.error && <p>{this.props.error}</p>}
        </div>
    );
}

export default Weather;
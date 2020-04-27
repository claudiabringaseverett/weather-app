import React from 'react';

const Weather = props => (
<div>
    {props.city && props.region && props.country && <p>Location: {props.city}, {props.region}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.text && <p>Conditions: {props.text}</p>}
    {props.error && <p>{props.error}</p>}
</div>

);

export default Weather;
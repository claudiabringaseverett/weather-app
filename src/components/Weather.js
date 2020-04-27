import React from 'react';

const Weather = props => (
    <div className='weather__info'>
    {
        props.city && props.region && props.country && <p className="weather__key"> Location: 
            <span className='weather__value'>{props.city}, {props.region}, {props.country}</span>
            </p>
    }
    {
        props.temperature && <p className='weather__key'> Temperature: 
        <span className='weather__value'>{props.temperature}</span>
        </p>
    }
    {
        props.humidity && <p className='weather__key'> Humidity: 
        <span className='weather__value'>{props.humidity}</span>
        </p>
    }
    {
        props.text && <p className='weather__key'> Conditions: 
        <span className='weather__value'>{props.text}</span>
        </p>
    }
    {
        props.error && <p className='weather__error'>{props.error}</p>
    }
</div>

);

export default Weather;
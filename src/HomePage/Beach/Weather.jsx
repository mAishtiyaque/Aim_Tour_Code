import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
function Weather(props) {
    const lat = props.itemDetails.latitude;
    const long = props.itemDetails.longitude;
    //const id=props.itemDetails.id;

    const weather_data = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.weather(lat, long));
    }, [lat]);
    return (
        <>
            {(Object.keys(weather_data).length > 0) ?
                <div>
                    <img src={`http://openweathermap.org/img/w/${weather_data.weather[0].icon}.png`} />
                    {Math.round(weather_data.main.temp- 273)}°C
                    {' '}
                    <abbr title={weather_data.weather[0].description} style={{ textDecoration: 'none', cursor: 'default' }}>
                        {weather_data.weather[0].main}
                    </abbr>
                    
                </div>
                : ""
            }
        </>
    )
}
export default Weather;
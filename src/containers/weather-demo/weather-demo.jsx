import { useId, useState } from 'react';
import WeatherAjax from '../../components/weather-ajax/weather-ajax';

const WeatherDemo = () => {

    const id = useId();
    const [search, setSearch] = useState(null);
    const [city, setCity] = useState(null);

    const handleSearchWeather = () => {
        setSearch('');
        setCity(search);
    }

    return (
        <>
            <h2>Recherche de la météo</h2>
            <div>
                <input id={id + 'city'} type="text"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearchWeather}>Rechercher</button>
            </div>
            {city && (
                <WeatherAjax city={city} />
            )}
        </>
    );
};

export default WeatherDemo;
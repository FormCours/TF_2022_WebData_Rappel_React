import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherLoading = () => (
    <p>Chargement...</p>
)

const WeatherResult = ({city, temp}) => (
    <p>Météo pour {city} : {temp} °c</p>
)

const WeatherError = () => {
    <p>Erreur lors de chargement des données</p>
}



const WeatherAjax = ({city}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setError(null);

        // Envoi d'un requete ajax avec "Axios"
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params : {
                // Ajout des parametre "GET" de la requete
                q: city,
                units: 'metric',
                lang:'fr',
                appid:'7dd2a0dabe181f6c9336b69f11ff86a2'
            }
        }).then(response => {
            // Traitement en cas de réussite
            setData({
                city: response.data.name,
                temp: response.data.main.temp
            })
        }).catch(error => {
            // Traitement en cas d'echec
            setError(error)
        })

    }, [city])


    return (
        <div>
            {data ? (
                <WeatherResult {...data} />
            ) : error ? (
                <WeatherError />
            ) : (
                <WeatherLoading />
            )}
        </div>
    );
};

WeatherAjax.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherAjax;
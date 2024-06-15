const request = require('request')

const appid_openweather = 'b27d39c16070b40289fd9d60a3ba84eb'
const exclude_params = 'hourly,daily,minutely,alerts'

const forecast = (units, lang, lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude_params}&units=${units}&lang=${lang}&appid=${appid_openweather}`

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.cod) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                lat: response.body.lat,
                lon: response.body.lon,
                temreture: response.body.current.temp,
                feels_like: response.body.current.feels_like,
                wind_speed: response.body.current.wind_speed,
                weather: response.body.current.weather[0].main
            })
        }
    })
}

module.exports = forecast



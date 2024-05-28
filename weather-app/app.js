const request = require('request')

const appid_openweather = 'b27d39c16070b40289fd9d60a3ba84eb'
const appid_geocode = '6641eeeb7580d474846827kde059ce3'

const exclude_params = 'hourly,daily,minutely,alerts'
const units = 'metric'
const lang = 'en'
const lat = 58.30
const lon = 46.65

const address = 'Kirov'
const get_coordinates_url = `https://geocode.maps.co/search?q=${address}&api_key=${appid_geocode}`

request({ url: get_coordinates_url, json: true}, (error, response) => {
    const lat = (response.body[0].lat)
    const lon = (response.body[0].lon)
    console.log(lat, lon)
})

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude_params}&units=${units}&lang=${lang}&appid=${appid_openweather}`

request({ url: url, json: true }, (error, response) => {
    const current_data = response.body.current
    console.log(`${(current_data.weather[0].description)}. It is currently ${current_data.temp} degrees out. It feels like ${current_data.feels_like} degrees out.`)
})






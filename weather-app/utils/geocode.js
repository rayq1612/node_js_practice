const request = require('request')

const appid_geocode = '6641eeeb7580d474846827kde059ce3'
const exclude_params = 'hourly,daily,minutely,alerts'


const geocode = (address, callback) => {
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${appid_geocode}&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!response.body[0])  { 
            callback('Unable to find location. Try something else.', undefined)
        } else {
            callback(undefined, {
                lat: response.body[0].lat,
                lon: response.body[0].lon,
                location: response.body[0].display_name
            })
        }
    })
}

module.exports = geocode
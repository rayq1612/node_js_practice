const request = require('request')

const appid_geocode = '6641eeeb7580d474846827kde059ce3'

const geocode = (address, callback) => {
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${appid_geocode}&limit=1`

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body[0])  { 
            callback('Unable to find location. Try something else.', undefined)
        } else {
            callback(undefined, {
                lat: body[0].lat,
                lon: body[0].lon,
                location: body[0].display_name
            })
        }
    })
}

module.exports = geocode
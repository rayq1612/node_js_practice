const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


//Weather request parameters
const units = 'metric'
const lang = 'en'
const address = process.argv[2]

if (address) {
    geocode(address, (error, {lat, lon, location} = {}) => {
        if (error) {
            return console.log(error)
        } 
        forecast(units, lang, lat, lon, (error, {temreture, feels_like, wind_speed, weather}) => {
            if (error) {
                return console.log(error)
            }
            console.log(`Location: ${location}.\nLattitude: ${lat};\nLongitude: ${lon}`)
            console.log(`Weather:\n Tempreture: ${temreture};\n Fells like: ${feels_like};\n Wind speed: ${wind_speed};\n Sky: ${weather}.`)
          })
    })
} else {
    console.log('Location is not provided as an argument')
}




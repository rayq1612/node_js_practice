const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//Weather request parameters
const units = 'metric'
const lang = 'en'
const lat = 58.30
const lon = 46.65

geocode('Kirov', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

forecast(units, lang, lat, lon, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
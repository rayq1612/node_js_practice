const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { title } = require('process')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//Weather configuration 
const units = 'metric'
const lang = 'en'

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Amir Rameshk'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Amir Rameshk'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Amir Rameshk'
    })
})

app.get('/weather', (req, res) => {
    //address reqiured
    if (!req.query.address) { 
        return res.send({
            error: "You must provide an address"
        })
    }
    
    geocode(req.query.address, (error, {lat, lon, location} = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        forecast(units, lang, lat, lon, (error, { forecastData } = {}) => {
            if (error) {
                return res.send({
                    error
                })
            }
            res.send({
                location,
                forecastData,
                address: req.query.address
            })
        })
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        error: "Help article not found",
        title: "404",
        name: "Amir Rameshk"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: "Page not found", 
        title: "404",
        name: "Amir Rameshk"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
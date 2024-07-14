const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { title } = require('process')

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
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        name: 'Amir Rameshk'
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
const path = require('node:path')
const express = require('express')

const app = express()
const publicDirectory = (path.join(__dirname), '../public')


app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        tempreture: '38,7'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        something: 'something'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        info: "Some text"
    })
})
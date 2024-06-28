const https = require('https')

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=40&lon=50&exclude=hourly,daily,minutely,alerts&units=metric&lang=en&appid=b27d39c16070b40289fd9d60a3ba84eb"

const request = https.request(url, (response)=> {
    let data = ''

    response.on('data', (chunk)=> {
        data = data + chunk.toString()
    })

    response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=> {
    console.log('An error: ', error)
})

request.end()
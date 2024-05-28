const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('./1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.title)

const dataBuffer = fs.readFileSync('./1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = "Amir"
data.age = 21

const dataChanged = JSON.stringify(data)
fs.writeFileSync('./1-json.json', dataChanged)
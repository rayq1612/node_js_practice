const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgBlue('New note added!'))
    } else {
        console.log(chalk.bgRed('Title already taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bgBlue('Note was deleted successfully'))
    } else {
        console.log(chalk.bgRed('There is no note with such title'))
    }
}

const listNotes = () => {
    notes = loadNotes()
    console.log(chalk.bgHex('#8680A6').bold('Your notes: '))
    notes.forEach((note) => {
        console.log(chalk.bgHex('#F7E4EB')(note.title + ';'))
    }) 
}

const readNote = (title) => {
    notes = loadNotes()
    const requiredNote = notes.find((note) => note.title === title)

    if (requiredNote) {
        console.log(chalk.bgBlue(requiredNote.title + ': ' + requiredNote.body))
    } else {
        console.log(chalk.bgRed('Note doesnt found'))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        const data = JSON.parse(dataJson)
        return data
    } catch (e) {
        return []
    }
}

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
}
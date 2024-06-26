const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs verstion
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true        
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    } 
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List out the notes',
    handler() {
        notes.listNotes()
    } 
})

yargs.parse()
// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// fs.appendFileSync('notes.txt', 'appended text')

// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(getNotes())
// console.log(chalk.green.inverse('Success!'))
// console.log(validator.isURL('//ww.com'))


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    } 
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder : {
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('list all notes')
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('read a note')
    }
})

yargs.parse()
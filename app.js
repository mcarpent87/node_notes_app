const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        },
        body: {
            describe: 'Note Body',
            demandOption: true, 
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a new note!')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing notes!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function () {
        console.log('Reading a note!')
    }
})

yargs.parse()
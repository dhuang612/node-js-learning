const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
//helps you to build an interactive command line tool

//customize yargs version
yargs.version('1.1.0');

//challenge add an option to yargs
//setup a body option for the add command
//configure a description, and make it required, and for it to be a string.
//log the body value in the handler function
//test work

//create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  //this is an object that contains the logic for this command
  builder: {
    title: {
      describe: 'Note title',
      //option to make this param required
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function({ title, body }) {
    notes.addNote(title, body);
    //
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'removes a note',
  handler: function() {
    console.log('removing the note');
  }
});
//create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function() {
    console.log('listing all notes');
  }
});
//create read note command

yargs.command({
  command: 'read',
  describe: 'read note',
  handler: function() {
    console.log('reading a note');
  }
});
//parses the arguments and returns them
yargs.parse();

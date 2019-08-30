const getNotes = require('./notes');
const chalk = require('chalk');
//helps you to build an interactive command line tool
const yargs = require('yargs');
const printMsg = getNotes();
//customize yargs version
yargs.version('1.1.0');

//create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('add a new note!');
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
    console.log('reading note');
  }
});
//challenge add two new commands
//setup command to support 'list' command
//setup command to support 'read command
console.log(yargs.argv);

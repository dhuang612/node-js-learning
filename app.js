const yargs = require('yargs');
const notes = require('./notes.js');
//helps you to build an interactive command line tool

//customize yargs version
yargs.version('1.1.0');

//create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  //this is an object that contains the options for this command
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
  handler({ title, body }) {
    notes.addNote(title, body);
    //
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title }) {
    notes.removeNote(title);
  }
});
//create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log('listing all notes');
  }
});
//create read note command

yargs.command({
  command: 'read',
  describe: 'read note',
  handler() {
    console.log('reading a note');
  }
});
//parses the arguments and returns them
yargs.parse();

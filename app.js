const getNotes = require('./notes');
const chalk = require('chalk');
const printMsg = getNotes();

const command = process.argv[2];
if (command === 'add') {
  console.log('note added!');
} else if (command === 'remove') {
  console.log('note removed!');
} else if (command === 'Dan') {
  console.log('Hi Dan!');
}
console.log(process.argv);

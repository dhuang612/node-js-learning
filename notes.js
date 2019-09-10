const fs = require('fs');
const chalk = require('chalk');
const getNotes = (title, body) => {
  return 'Your notes...';
};

//function to remove note
const removeNote = title => {
  //load in existing note
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  if (notesToKeep.length < notes.length) {
    console.log(chalk.green.inverse('note has been removed!'));

    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('no note was found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  const allNotes = notes.forEach(note => {
    console.log(chalk.green.inverse(note.title));
  });
};

//function to add a note along with logic to check if title exists
const addNote = (title, body) => {
  //load in existing notes
  const notes = loadNotes();
  //compare new note title with existing
  const duplicateNotes = notes.filter(item => item.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note successfully added'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};
//save note to notes.json
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

//need the file to exist and have json
const loadNotes = () => {
  //defensive code
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    //if there is no data create a file
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};

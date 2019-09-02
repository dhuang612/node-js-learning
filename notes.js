const fs = require('fs');
const getNotes = function(title, body) {
  return 'Your notes..';
};
const addNote = function(title, body) {
  //load in existing notes
  const notes = loadNotes();
  //compare new note title with existing
  const duplicateNotes = notes.filter(item => {
    //if one matches add it to duplicateNotes
    return item.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note successfully added');
  } else {
    console.log('Note title taken!');
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

//need the file to exist and have json
const loadNotes = function() {
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
  addNote: addNote
};

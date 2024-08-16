const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

function getRecordedNotes() {
  notesContainer.innerHTML = localStorage.getItem('notesData');
}
getRecordedNotes();

function saveToStorage() {
  localStorage.setItem('notesData', notesContainer.innerHTML);
}

function renderNotes() {
  let pElement = document.createElement('p');
  let imgElement = document.createElement('img');

  pElement.classList.add('input-box');
  imgElement.classList.add('delete-icon');
  pElement.setAttribute('contenteditable', 'true');
  imgElement.src = "images/delete.png";
  
  notesContainer.appendChild(pElement).appendChild(imgElement);

  saveToStorage();
}

function removeNote(event) {
  if (event.target.classList.contains("delete-icon")) {
    event.target.parentElement.remove();

  // To save everything typed inside the text boxes
  } else if (event.target.classList.contains('input-box')) {
    const notes = document.querySelectorAll(".input-box");
    
    notes.forEach(note => {
      note.onkeyup = () => {
        saveToStorage();
      };
    });
  }

  saveToStorage();
}

createBtn.addEventListener('click', () => {
  renderNotes();
});

notesContainer.addEventListener('click', event => {
  removeNote(event);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
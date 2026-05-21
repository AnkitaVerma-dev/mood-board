let currentMood = "😊 Happy";


// Welcome User
const username =
  localStorage.getItem("username");

if (username) {

  document.getElementById("welcomeText")
    .innerText = `Welcome, ${username} ✨`;
}


// Mood Selection
function selectMood(mood) {

  currentMood = mood;

  const quote =
    document.getElementById("quote");


  if (mood.includes("Happy")) {

    quote.innerText =
      "Happiness looks beautiful on you ✨";

    document.body.style.background =
      "linear-gradient(135deg,#f6d365,#fda085)";
  }


  else if (mood.includes("Relaxed")) {

    quote.innerText =
      "Take a deep breath 🌿";

    document.body.style.background =
      "linear-gradient(135deg,#84fab0,#8fd3f4)";
  }


  else if (mood.includes("Productive")) {

    quote.innerText =
      "Small progress is still progress 🚀";

    document.body.style.background =
      "linear-gradient(135deg,#a18cd1,#fbc2eb)";
  }


  else {

    quote.innerText =
      "Better days are coming 🌈";

    document.body.style.background =
      "linear-gradient(135deg,#667eea,#764ba2)";
  }
}


// Save Note
function saveNote() {

  const noteText =
    document.getElementById("noteInput").value;

  const noteDate =
    document.getElementById("noteDate").value;


  if (noteText === "" || noteDate === "") {

    alert("Please add date and note");

    return;
  }


  const noteData = {

    mood: currentMood,

    text: noteText,

    date: noteDate
  };


  let notes =
    JSON.parse(localStorage.getItem("notes")) || [];


  notes.push(noteData);


  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );


  document.getElementById("noteInput").value = "";


  displayNotes();

  alert("Memory Saved ✨");
}


// Display Notes
function displayNotes() {

  const notesContainer =
    document.getElementById("notesContainer");


  notesContainer.innerHTML = "";


  let notes =
    JSON.parse(localStorage.getItem("notes")) || [];


  notes.reverse().forEach((note, index) => {

    const noteCard =
      document.createElement("div");


    noteCard.classList.add("note-card");


    noteCard.innerHTML = `

      <h3>${note.mood}</h3>

      <small>${note.date}</small>

      <p>${note.text}</p>

      <button class="delete-btn"
              onclick="deleteNote(${index})">

        Delete

      </button>
    `;


    notesContainer.appendChild(noteCard);
  });
}


// Delete Note
function deleteNote(index) {

  let notes =
    JSON.parse(localStorage.getItem("notes")) || [];


  notes.reverse();

  notes.splice(index, 1);

  notes.reverse();


  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );


  displayNotes();
}


// Load Notes Automatically
window.onload = function () {

  displayNotes();
};
// import functions and grab DOM elements

const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
//these consts relate to "name" and "generate" IDs in .html

button.addEventListener('click', ()=>{
  //when button is clicked
  //get value of input
  //replace text in nametag w/ value
  let newName = nameInput.value;
  firstName.textContent = newName;
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



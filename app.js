// import functions and grab DOM elements

const nameInput = document.getElementById('name');
const button = document.getElementById('generate');
const firstName = document.getElementById('first-name');
const buttoncolor = document.getElementById('change-color');
const buttoncolor2 = document.getElementById('color-change');
const header = document.getElementById('head');
const footer = document.getElementById('foot');
const finalcolor = document.getElementById('final-color');
//these consts relate to "name" and "generate" IDs in .html 

button.addEventListener('click', ()=>{
  //when button is clicked
  //get value of input
  //replace text in nametag w/ value
    let newName = nameInput.value;
    firstName.textContent = newName;

});

buttoncolor.addEventListener('click', () =>{
    header.style.backgroundColor = ('#112244');
    footer.style.backgroundColor = ('#332255'); 
});

buttoncolor2.addEventListener('click', ()=>{
    header.style.backgroundColor = ('tomato');
    footer.style.backgroundColor = ('peachpuff');
});

finalcolor.addEventListener('click', ()=>{
    
})
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

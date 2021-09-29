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
    header.style.backgroundColor = ('#444444');
    footer.style.backgroundColor = ('#332255'); 
});

buttoncolor2.addEventListener('click', ()=>{
    header.style.backgroundColor = ('tomato');
    footer.style.backgroundColor = ('peachpuff');
});

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const particles = [];
    const color = randomColor();
	
    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');

    const { x, y } = randomLocation();
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    btn.style.background = color;
	
    btn.appendChild(particle);
	
    particles.push(particle);
	
    setTimeout(() => {

        for (let i = 0; i < 100; i++); {
            const innerP = document.createElement('span');
            innerP.classList.add('particle', 'move');
            innerP.style.transform = `translate(${x}, ${y})`;

            const xs = Math.random() * 200 - 100 + 'px';
            const ys = Math.random() * 200 - 100 + 'px';
            innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
            innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
            innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
            innerP.style.background = color;
			
            btn.appendChild(innerP);
            particles.push(innerP);
        }
		
        setTimeout(() => {
            particles.forEach(particle => {
                particle.remove();
            });
        }, 1000);
    }, 1000);
});

function randomLocation() {
    return {
        x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
        y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
    };
}

function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

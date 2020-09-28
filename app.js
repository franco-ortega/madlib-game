// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
//User inputs stored as varibales
const inputSection = document.getElementById('input-section');
const input1 = document.getElementById('input-one'); 
const input2 = document.getElementById('input-two');
const input3 = document.getElementById('input-three');
const input4 = document.getElementById('input-four');
const input5 = document.getElementById('input-five');
const input6 = document.getElementById('input-six');
const input7 = document.getElementById('input-seven');
const input8 = document.getElementById('input-eight');
const input9 = document.getElementById('input-nine');
const button = document.getElementById('button');
const madLib = document.getElementById('mad-lib');


//Where the user input goes after the button is clicked 
const result1 = document.getElementById('result-1');
const result2 = document.getElementById('result-2');
const result3 = document.getElementById('result-3');
const result4 = document.getElementById('result-4');
const result5 = document.getElementById('result-5');
const result6 = document.getElementById('result-6');
const result7 = document.getElementById('result-7');
const result8 = document.getElementById('result-8');
const result9 = document.getElementById('result-9');

button.addEventListener('click', () => { 
  

  //add click funciton to button D.B.
  // console.log('clicked!'); validate click function 
    result1.textContent = input1.value;
    result2.textContent = input2.value;
    result3.textContent = input3.value;
    result4.textContent = input4.value;
    result5.textContent = input5.value;
    result6.textContent = input6.value;
    result7.textContent = input7.value;
    result8.textContent = input8.value;
    result9.textContent = input9.value;

    inputSection.style.display = 'none';
    madLib.style.display = 'block';

});

const done = document.getElementById('done');
const main = document.getElementById('main');
done.addEventListener('cick', () => {

    main.location.reload();

});


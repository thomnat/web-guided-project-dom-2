console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector(".success");
const failureMessage = document.querySelector(".failure");

// C- MODAL
const modal = document.querySelector(".modal");


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function() {
  console.log("Oh noes, what happened to the HTML event?!");
}

//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function(evt) {
console.log(`
event type:   ${evt.type}
event target: ${evt.target.nodeName}
`)
})

Array.from(document.links).forEach(link => {
  link.addEventListener("click", e => {
    console.log(`The ${e.target.textContent} link is not taking you anywhere, send 5 bitcoin to this address sucka`);
    e.preventDefault();
  })
})



// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

//ways to create functions:
//1.) Function declaration --> function funcName() {} ::: Function declarations are hoisted, javascript does whats called an initial pass and it looks for the word function keyword and if it finds it, it takes the function and copies and pastes it at the top of the javascript file. whenever the compiler, or javascript especially, is doing something for you you should get scared bc you do NOT want to trust a programming language like that.
//2.) Function expression --> const funcName = () => {} : NOT hoisted! aka stay where they are, aka whereever you put the funciton is where it will stay
function launch(evt) {
  modal.classList.remove("off");
  successMessage.classList.add("off");
  failureMessage.classList.add("off");
}

launchButton.addEventListener("click", launch);



// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm() {
  modal.classList.add("off");
  successMessage.classList.remove("off");
}
confirmButton.addEventListener("click", confirm);


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
  modal.classList.add("off");
  failureMessage.classList.remove("off");
}

cancelButton.addEventListener("click", cancel);

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(event) {
  if (event.key === 'Escape') {
    modal.classList.add('off');
  }
}
document.addEventListener("keydown", escKey);


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document.querySelectorAll("*").forEach(elem => elem.addEventListener("click", event => {
  console.log("🎯 target:        ", event.target);
  console.log("🧭 current target:      ", event.currentTarget);
  console.log("\n");
}))

modal.addEventListener("click", evt => {
  console.log("YOU WILL NOT PASS!");
  evt.stopPropagation();
}); 


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

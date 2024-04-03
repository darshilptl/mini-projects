// Get the start text element
let startText = document.querySelector("h2");

// Add a click event listener to the start text
startText.addEventListener("click", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;

    levelUp();
  }
});

// main code of game 

let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function()  {
        btn.classList.remove("flash"); 
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function()  {
        btn.classList.remove("userflash"); 
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}` ;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn); 
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
    // console.log("curr level : ", level);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 950);
        }
    } else {
        h2.innerHTML = ` Game Over! Your score was <b>${level}</b> <br> Click Here! Or Press  any key to start.`;
        const body = document.querySelector("body");
        const darkMode = body.classList.contains("dark");
        const backgroundColor = darkMode ? "#292c35" : "white";

        // Flash red background for 500 milliseconds
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = backgroundColor;
        }, 150);

        reset();
    }
}


function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns (userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() { 
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}


// dark and light mode button 
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  // Toggle the 'dark' class on the body
  document.body.classList.toggle("dark");
  
  // If the body has the 'dark' class, set the background color to a dark color
  if (document.body.classList.contains("dark")) {
    document.body.style.backgroundColor = "#292c35"; // or any dark color of your choice
  } else {
    // If the body does not have the 'dark' class, set the background color to white
    document.body.style.backgroundColor = "white";

  }
})


// replace checkAns Function with bleow code if upper chekAns function doesn't work properly
    // function checkAns(idx){
    //     console.log("curr level : " ,level);
    //     // let idx = level - 1;
    
    //     if (userSeq[idx] === gameSeq[idx]) {
    //         if(userSeq.length == gameSeq.length){
    //             setTimeout(levelUp, 750);
    //         }
    //     } else {
    //         h2.innerHTML = ` Game Over! Your score was <b>${level}</b> <br> Click Here! Or Press  any key to start.`;
    //         // Check if dark mode is active
    //         if (document.body.classList.contains("dark")) {
    //             // If dark mode is active, set the background color to a dark color
    //             document.querySelector("body").style.backgroundColor = "red";
    //         } else {
    //             // If dark mode is not active, set the background color to white
    //             document.querySelector("body").style.backgroundColor = "white";
    //         }
    //         setTimeout(function(){
    //             // Reset the background color after the timeout
    //             if (document.body.classList.contains("dark")) {
    //                 document.querySelector("body").style.backgroundColor = "#121212"; // or any dark color of your choice
    //             } else {
    //                 document.querySelector("body").style.backgroundColor = "white";
    //             }
    //         },150)
    //         reset();
    //     }
    // }
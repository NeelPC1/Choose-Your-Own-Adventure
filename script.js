// Declare variables below to save the different divs of your story.
let countDown=300;
let countDownDisplay;

let fight=document.querySelector(".fight");
let wait=document.querySelector(".wait");
let screen1=document.querySelector(".option-one-screen");
let screen2=document.querySelector(".option-two-screen");
let initial=document.querySelector(".story-opening");
let wait2=document.querySelector(".wait2");
let buttons=document.querySelector(".buttons");
let wait2screen = document.querySelector(".waiting2");
let dark=document.querySelector(".dark");
let light=document.querySelector(".light");
let lightEnd=document.querySelector(".lightEnd");
let darkEnd=document.querySelector(".darkEnd");
let rock=document.querySelector(".rocks");
let rockEnd=document.querySelector(".rockEnd");
let hide=document.querySelector(".hide");
let hideEnd=document.querySelector(".hideEnd");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

fight.addEventListener('click', function(){
    screen1.style.display = "block";
    initial.style.display = "none";
    screen2.style.display = "none";
    buttons.style.display= "none";
});

wait.addEventListener('click', function(){
    screen2.style.display = "block";
    initial.style.display = "none";
    screen1.style.display = "none";
    buttons.style.display= "none";
});


wait2.addEventListener('click', function(){
    screen2.style.display = "none";
    screen1.style.display = "none";
    wait2screen.style.display = "block";
    fight.style.display = "none";
    wait.style.display = "none";
    buttons.style.display = "none";
});
light.addEventListener('click', function(){
    screen2.style.display = "none";
    screen1.style.display = "none";
    wait2screen.style.display = "none";
    fight.style.display = "none";
    wait.style.display = "none";
    buttons.style.display = "none";
    lightEnd.style.display="block"
});

dark.addEventListener('click', function(){
    screen2.style.display = "none";
    screen1.style.display = "none";
    wait2screen.style.display = "none";
    fight.style.display = "none";
    wait.style.display = "none";
    buttons.style.display = "none";
    lightEnd.style.display="none";
    darkEnd.style.display="block";
})

rock.addEventListener('click', function(){
    screen2.style.display = "none";
    screen1.style.display = "none";
    wait2screen.style.display = "none";
    fight.style.display = "none";
    wait.style.display = "none";
    buttons.style.display = "none";
    lightEnd.style.display="none";
    darkEnd.style.display="none";
    rockEnd.style.display="block";
})
hide.addEventListener('click', function(){
    screen2.style.display = "none";
    screen1.style.display = "none";
    wait2screen.style.display = "none";
    fight.style.display = "none";
    wait.style.display = "none";
    buttons.style.display = "none";
    lightEnd.style.display="none";
    darkEnd.style.display="none";
    hideEnd.style.display="block";
})
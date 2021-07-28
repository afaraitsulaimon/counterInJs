// document.getElementById("count-el").innerText = 5;

// this just saying, let count be zero, so we replaced var with let, we can also do const for constant

//this code will start to count the number as we click on the button


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("pre-ent")
let count = 0

function incrementValue() {

    count = count + 1
    countEl.innerText = count

}


// we can either use textContent or innerText
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    //to return the count back to zero
    // we countEl.innerText = 0
    //the below line retuns it back to zero
    //and when click on increment, it still starts back from where it stops
    //to fix that, we just need to add  count = 0;
    countEl.innerText = 0
    count = 0

}
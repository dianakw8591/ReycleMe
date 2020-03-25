const ITEMS_URL = "PLACE URL HERE";
const STATS_URL = "PLACE URL HERE";
const USERS_URL = "PLACE URL HERE";

document.addEventListener("DOMContentLoaded", function() {
    buildUserLoginForm();
    buildUserRegisterForm();
    buildUserEditForm();
    buildUserDeleteAction();
    getStats();
    buildItemForm();
});

function buildUserLoginForm () {

}

function buildUserEditForm() {
    const user_name = document.getElementById("INPUT CORRECT ELEMENT ID")
}

function buildUserDeleteAction () {

}

function getStats() {
    fetch(ITEMS_URL)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        showStats(data)
    });
}

function showStats(data) {
    let correct = []
    let incorrect = []
    data.forEach(stat => {
        //just a guess at the moment. Need to determine what structure this will be
        if (stat.correct == false) {
            incorrect.push(stat)
        } else {
            correct.push(stat)
        }
    })
    const correctcount = documnent.getElementById("INPUT CORRECT ELEMENT ID");
    const incorrectcount = documnent.getElementById("INPUT CORRECT ELEMENT ID");

    correctcount.innerText = correct.length;
    incorrectcount.innerText = incorrect.length;
}

function buildItemForm() {

}


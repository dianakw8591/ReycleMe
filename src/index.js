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
    const analyticsBox = documnent.getElementById("analytics");
    const correctcount = documnent.createElement("h3");
    const incorrectcount = documnent.createElement("h3");

    correctcount.innerText = correct.length;
    incorrectcount.innerText = incorrect.length;
    analyticsBox.appendChild(correctcount);
    analyticsBox.appendChild(incorrectcount);
}

function buildItemForm() {

}

function createHomePage() {
    const homePage = documnent.getElementById("homepage");
    const login = documnent.createElement("button");
    const newUser = documnent.createElement("button");
    login.addEventListener('click', () => {

    })
    newUser.addEventListener('click', () => {
        
    })
    homePage.appendChild(login);
    homePage.appendChild(newUser);
}

function deleteChildren(parent) {
    let child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}


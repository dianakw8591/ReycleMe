const ITEMS_URL = "PLACE URL HERE";
const STATS_URL = "PLACE URL HERE";

const USER_ID = "";
const USER_URL = `localhost:3000/api/v1/${USER_ID}`;

document.addEventListener("DOMContentLoaded", function() {
    buildUserLoginForm();
    
    buildUserEditForm();
    buildUserDeleteAction();
    getStats();
    buildItemForm();
});

function buildUserLoginForm () {

}


function buildUserEditForm() {
    const editDiv = document.getElementById("INPUT CORRECT ELEMENT ID")
    const editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.addEventListener("click", function() {
        const editForm = document.createElement("form")
        editForm.setAttribute("method", "patch");
        const header = document.createElement("h3")
        header.innerText = "Update Your Information"
        const nameLabel = document.createElement("label")
        nameLabel.innerText = "Name :"
        const nameField = document.createElement("inut")
        nameField.name = "userName"
        const editSubmit = document.createElement("button")
        editSubmit.type = "submit"
        editSubmit.innerText = "Update Information"


        editForm.appendChild(header)
        editForm.appendChild(nameLabel)
        editForm.appendChild(nameField)
        editForm.appendChild(editSubmit)

        editForm.addEventListener("submit", function(event) {
            //call a function to edit
        })

    })

    editDiv.appendChild(editButton);
}

function buildUserDeleteAction () {
    const deleteDiv = document.getElementById("INPUT CORRECT ELEMENT ID")
    const delteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", function() {
        deleteUser();
    })

    deleteDiv.appendChild(deleteButton);
}

function deleteUser() {
    fetch(USER_URL, {
        method: "DELETE"
    })
    .then(buildUserSignupForm) //double check this function matches function Diana is building
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


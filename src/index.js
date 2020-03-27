const BASE_URL = "http://localhost:3000/api/v1/"
const LOGIN_URL = BASE_URL + "login"
const SIGNUP_URL = BASE_URL + "users"
const ITEMS_URL = "PLACE URL HERE";
const STATS_URL = "PLACE URL HERE";
const USERS_URL = "PLACE URL HERE";

let header = null;
let search = null;
let stats = null;
let results = null;
let footer = null;

let user_id = null;

document.addEventListener("DOMContentLoaded", function() {
    header = document.querySelector(".header");
    search = document.querySelector(".search");
    stats = document.querySelector(".stats");
    results = document.querySelector(".results");
    footer = document.querySelector(".footer");

    createHomePage();

});

function createHomePage() {
    user_id = null;
    deleteChildren(header);
    deleteChildren(search);
    deleteChildren(stats);
    deleteChildren(footer);
    deleteChildren(results);
    stats.style.display = 'none';
    footer.style.display = 'none'
    addHeaderTitle();
    buildLoginButton();
    buildSignupButton();   
    
}

function addHeaderTitle() {
    const title = document.createElement('h2');
    title.innerText = 'Welcome to RecycleMe';
    header.appendChild(title);
    const div = document.createElement('div');
    div.className ='header-buttons';
    header.appendChild(div);
}

function makeThePage() {
    stats.style.display = 'block';
    footer.style.display = 'block';
    deleteChildren(header);
    addHeaderTitle();
    //all the functions go in here
    //item search function
    

    buildUserEditForm();
    buildUserDeleteAction();
    buildUserLogout();
    getStats();
    
    // buildItemForm();
}


function buildLoginButton() {
    console.log("TEST")
    const button = document.createElement("button");
    button.id = "login";
    button.innerText = "Login"
    document.querySelector(".header-buttons").appendChild(button)
    button.addEventListener("click", function() {
        deleteChildren(search);
        buildUserLoginForm();
        deleteChildren(header);
        addHeaderTitle()
        buildSignupButton();

    })
    
}

function buildSignupButton() {
    const button = document.createElement("button");
    button.id = "signup";
    button.innerText = "Signup"
    document.querySelector(".header-buttons").appendChild(button)
    button.addEventListener("click", function() {
        deleteChildren(search);
        buildUserSignupForm();
        deleteChildren(header);
        addHeaderTitle()
        buildLoginButton();
    })
    
}

function buildUserLoginForm () {
    const loginDiv = document.createElement("div");
    loginDiv.id = "login-div";

    const loginError = document.createElement("div");
    loginError.id = "login-error";

    const h3 = document.createElement("h3");
    h3.innerText = "Please login";

    const loginform = document.createElement("form");
    loginform.id = "login-form";

    const namelabel = document.createElement("label");
    namelabel.innerText = "Username:";
    loginform.appendChild(namelabel);

    const username = document.createElement("input");
    username.type = 'text';
    username.name = 'username';
    username.placeholder= "Enter name"; 
    loginform.appendChild(username);

    let linebreak = document.createElement("br");
    loginform.appendChild(linebreak);

    const pwlabel = document.createElement("label");
    pwlabel.innerText = "Password:";
    loginform.appendChild(pwlabel);

    const password = document.createElement("input");
    password.type = 'password';
    password.name = 'password'
    password.placeholder= "Enter password"; 
    loginform.appendChild(password);

    linebreak = document.createElement("br");
    loginform.appendChild(linebreak);

    const submit = document.createElement("input");
    submit.type = 'submit';
    loginform.appendChild(submit);
    
    loginDiv.appendChild(h3);
    loginDiv.appendChild(loginform);
    loginDiv.appendChild(loginError);

    search.appendChild(loginDiv);

    loginform.addEventListener("submit", function(e){
        e.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const userObj = {
            username,
            password
        };
        fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: userObj})
        })
        .then(resp => resp.json())
        .then(function(json) {
            loginError.innerText = '';
            if (json.message) {
                loginError.innerText = json.message;
            } else {
            search.removeChild(loginDiv);
            user_id = json.data.id;
            addUserDiv(json)
            makeThePage()
            }
        })
    })
}


function buildUserSignupForm() {
    const signupDiv = document.createElement("div");
    signupDiv.id = "signup-div";

    const signupError = document.createElement("div");
    signupError.id = "signup-error";

    const h3 = document.createElement("h3");
    h3.innerText = "Please Sign-up";

    const signupform =document.createElement("form");
    signupform.id = "login-form";

    const namelabel = document.createElement("label");
    namelabel.innerText = "Username:";
    signupform.appendChild(namelabel);

    const username = document.createElement("input");
    username.type = 'text';
    username.name = 'username'
    username.placeholder= "Enter a username"; 
    signupform.appendChild(username);

    let linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const pwlabel = document.createElement("label");
    pwlabel.innerText = "Password:";
    signupform.appendChild(pwlabel);

    const password = document.createElement("input");
    password.type = 'password';
    password.name = 'password'
    password.placeholder= "Enter password"; 
    signupform.appendChild(password);

    linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const psclabel = document.createElement("label");
    psclabel.innerText = "Confirm Password:";
    signupform.appendChild(psclabel);

    const passwordconfirm = document.createElement("input");
    passwordconfirm.type = 'password';
    passwordconfirm.name = 'password_confirmation'
    passwordconfirm.placeholder= "Confirm password"; 
    signupform.appendChild(passwordconfirm);

    linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const submit = document.createElement("input");
    submit.type = 'submit';
    signupform.appendChild(submit);

    signupDiv.appendChild(h3);
    signupDiv.appendChild(signupform);
    signupDiv.appendChild(signupError);

    search.appendChild(signupDiv);

    signupform.addEventListener("submit", function(e){
        e.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const password_confirmation = event.target["password_confirmation"].value;
        const newUserObj = {
            username,
            password,
            password_confirmation
        };
        fetch(SIGNUP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: newUserObj})
        })
        .then(resp => resp.json())
        .then(function(json) {
            deleteChildren(signupError)
            if (json.message) {
                for (const message of json.message) {
                    const error = document.createElement('div')
                    error.innerText = message;
                    signupError.appendChild(error);
                };
            } else {
            search.removeChild(signupDiv);
            user_id = json.data.id;
            addUserDiv(json)
            makeThePage()
            }
        })
    })
}

function addUserDiv(json) {
    const userdiv = document.createElement("div");
    userdiv.id = "userDiv"
    userdiv.innerText = `Welcome ${json.data.attributes.username}!`
    footer.appendChild(userdiv);
}


function buildUserEditForm() {
    const editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.addEventListener("click", function() {
        const editForm = document.createElement("form")
        const header = document.createElement("h3")
        header.innerText = "Update Your Information"
        const nameLabel = document.createElement("label")
        nameLabel.innerText = "Name : "
        const nameField = document.createElement("input")
        nameField.name = "userName"
        const editSubmit = document.createElement("button")
        editSubmit.type = "submit"
        editSubmit.innerText = "Update Information"
        const errorMessage = document.createElement("div")
        errorMessage.id = 'edit_user_error'


        editForm.appendChild(header)
        editForm.appendChild(nameLabel)
        editForm.appendChild(nameField)
        editForm.appendChild(editSubmit)
        editForm.appendChild(errorMessage)
        deleteChildren(search);
        search.appendChild(editForm)
        editForm.addEventListener("submit", function(event) {
            event.preventDefault();
            editUser(event, editForm);
        })
    })

    footer.appendChild(editButton);
}

function editUser(event, editForm) {
    let errorDiv = document.getElementById('edit_user_error');
    errorDiv.innerText = '';
    let updatedData = {username: event.target.userName.value}
    fetch(BASE_URL + "users/" + user_id, {
        method: "PUT",
        // mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then (json => {
        if (json.message) {
            errorDiv.innerText = json.message;
        } else {
            search.removeChild(editForm);
            document.getElementById("userDiv").innerText = `Welcome ${json.data.attributes.username}!`;
        }
    })
}

function buildUserDeleteAction () {
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", function() {
        deleteUser();
    })
  
    footer.appendChild(deleteButton);
}

function deleteUser() {
    fetch(SIGNUP_URL + "/" + user_id, {
        method: "DELETE"
    })
    .then( response =>  
        {
        createHomePage(); 
    })
} 

function buildUserLogout() {
    const logoutButton = document.createElement("button")
    logoutButton.innerText = "Logout"
    logoutButton.addEventListener("click", function() {
        logOut();
    })
  
    footer.appendChild(logoutButton);
}

function logOut() {
    createHomePage();  
}

function getStats() {
    fetch(`${SIGNUP_URL}/${user_id}/guesses`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        showStats(data)
    });
}

function showStats(data) {
    // let correct = []
    // let incorrect = []
    // data.forEach(stat => {
    //     //just a guess at the moment. Need to determine what structure this will be
    //     if (stat.correct == false) {
    //         incorrect.push(stat)
    //     } else {
    //         correct.push(stat)
    //     }
    // })
    const analyticsBox = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Score:"

    const correctcount = document.createElement("h3");
    correctcount.innerText = `Correct: ${data.correct}`;

    const incorrectcount = document.createElement("h3");
    incorrectcount.innerText = `Incorrect: ${data.incorrect}`;

    
    analyticsBox.appendChild(h1);
    analyticsBox.appendChild(correctcount);
    analyticsBox.appendChild(incorrectcount);

    stats.appendChild(analyticsBox);
}

function buildItemForm() {

}

function buildResponse(guessInfo) {
    const guessDiv = getElementById("INPUT CORRECT ID") //get appropraite element from form once complete
    const responseDiv = document.createElement("div")
    const responseHeader = document.createElement("h3")
    
    //confirm what comes back from guessInfo once form is complete
    if (guessInfo["data"]["attributes"].correct == true) {
        responseHeader.innerText = "You got it right!"
    } else { 
        responseHeader.innerText = "Not quite. Try again next time!"
    }
    
    //confirm what comes back from guessInfo once form is complete
    const guessSection = guessInfo["included"][0]["attributes"]
    const responseText = document.createElement("p")
    if (guessSection.general_type == "recycling") {
        responseText.innerText = "This item can be recycled."
    } else if (guessSection.general_type == "compost") {
        responseText.innerText = "This item can be composted."
    } else {
        responseText.innerText = "This should be placed in the trash."
    }

    responseDiv.appendChild(responseHeader)
    responseDiv.appendChild(responseText)
    
    //confirm what comes back from guessInfo once form is complete
    if (guessSection.note) {
        const responseNote = document.createElement("p")
        responseNote.innerText = guessSection.note
        responseDiv.appendChild(responseNote)
    }

    guessDiv.appendChild(responseDiv)
}

function createHomePage() {
    buildLoginButton();
    buildSignupButton();   
}

function deleteChildren(parent) {
    let child = parent.lastElementChild;
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}


const BASE_URL = "http://localhost:3000/api/v1/"
const LOGIN_URL = BASE_URL + "login"
const SIGNUP_URL = BASE_URL + "users"
const ITEMS_URL = "PLACE URL HERE";
const STATS_URL = "guesses";
const USERS_URL = "PLACE URL HERE";

let header = null;
let main = null;
let user_id = null;

document.addEventListener("DOMContentLoaded", function() {
    header = document.querySelector("header");
    main = document.querySelector("main");
    createHomePage();
    // buildUserRegisterForm();
    // buildUserEditForm();
    // buildUserDeleteAction();
    // getStats();
    // buildItemForm();
});

function buildLoginButton() {
    const button = document.createElement("button");
    button.id = "login";
    button.innerText = "Login"
    header.appendChild(button)
    button.addEventListener("click", function() {
        buildUserLoginForm();
        header.removeChild(button)
        header.removeChild(document.getElementById("signup"))
    })
    
}

function buildSignupButton() {
    const button = document.createElement("button");
    button.id = "signup";
    button.innerText = "Signup"
    header.appendChild(button)
    button.addEventListener("click", function() {
        buildUserSignupForm();
        header.removeChild(button);
        header.removeChild(document.getElementById("login"))
    })
    
}

function buildUserLoginForm () {
    const loginDiv = document.createElement("div");
    loginDiv.id = "login-div";

    const h3 = document.createElement("h3");
    h3.innerText = "Please login";

    const loginform =document.createElement("form");
    loginform.id = "login-form";

    const namelabel = document.createElement("label");
    namelabel.innerText = "Username:";
    loginform.appendChild(namelabel);

    const username = document.createElement("input");
    username.type = 'text';
    username.name = 'username'
    loginform.appendChild(username);

    let linebreak = document.createElement("br");
    loginform.appendChild(linebreak);

    const pwlabel = document.createElement("label");
    pwlabel.innerText = "Password:";
    loginform.appendChild(pwlabel);

    const password = document.createElement("input");
    password.type = 'password';
    password.name = 'password'
    loginform.appendChild(password);

    linebreak = document.createElement("br");
    loginform.appendChild(linebreak);

    const submit = document.createElement("input");
    submit.type = 'submit';
    loginform.appendChild(submit);
    
    loginDiv.appendChild(h3);
    loginDiv.appendChild(loginform);

    main.appendChild(loginDiv);

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
            main.removeChild(loginDiv);
            user_id = json.data.id;
            const userdiv = document.createElement("div");
            userdiv.innerText = `Welcome back ${json.data.attributes.username}!`
            main.appendChild(userdiv);
        })

    })

}

{/* <div id="edit">
        <form id="login-form" action="">
            <h3>Welcome back to RecycleMe</h3>
            <input type="submit" value="Edit Your Account" /><br />
            <input type="submit" value="Delete Your Account" /><br />
          </form>
    </div> */}

function buildUserSignupForm() {
    const signupDiv = document.createElement("div");
    signupDiv.id = "signup-div";

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
    signupform.appendChild(username);

    let linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const pwlabel = document.createElement("label");
    pwlabel.innerText = "Password:";
    signupform.appendChild(pwlabel);

    const password = document.createElement("input");
    password.type = 'password';
    password.name = 'password'
    signupform.appendChild(password);

    linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const psclabel = document.createElement("label");
    psclabel.innerText = "Confirm Password:";
    signupform.appendChild(psclabel);

    const passwordconfirm = document.createElement("input");
    passwordconfirm.type = 'password';
    passwordconfirm.name = 'password_confirmation'
    signupform.appendChild(passwordconfirm);

    linebreak = document.createElement("br");
    signupform.appendChild(linebreak);

    const submit = document.createElement("input");
    submit.type = 'submit';
    signupform.appendChild(submit);

    signupDiv.appendChild(h3);
    signupDiv.appendChild(signupform);

    main.appendChild(signupDiv);

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
            console.log(json)
            main.removeChild(signupDiv);
            user_id = json.data.id;
            const userdiv = document.createElement("div");
            userdiv.innerText = `Welcome ${json.data.attributes.username}!`
            main.appendChild(userdiv);
        })

    })

}

function buildUserEditForm() {
    const user_name = document.getElementById("INPUT CORRECT ELEMENT ID")
}

function buildUserDeleteAction() {

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


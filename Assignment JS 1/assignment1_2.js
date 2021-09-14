let obj = [{username: "user1", password: "password"},
{username: "user2", password: "password1"},
{username: "user3", password: "password2"},
{username: "user4", password: "thispassword"} ];

let unameInput = prompt("Enter username: ");
let pwordInput = prompt("Enter passowrd: "); 

var valid = false;

function validate(unameInput,pwordInput) {
    for (let x of obj) {
        if((x.username === unameInput) && (x.password === pwordInput)) {
           valid = true;
           break;
        }
    }
}

function printResult() {
    if(valid == true) {
        alert("You have entered VALID credentials");
    }
    else {
        alert("You have entered INVALID credentials");
    }    
}

validate(unameInput,pwordInput);
printResult();
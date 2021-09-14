let obj = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}];

function arrForMale(obj) {
    for (let x of obj) {
        if(x.gender == "male") {
            alert(x.name + " ");
        }
    }
}

function arrForFemale(obj) {
    for (let x of obj) {
        if(x.gender == "female") {
            alert(x.name + " ");
        }
    }
}

function arrForNA(obj) {
    for (let x of obj) {
        if(x.gender == "n/a") {
            alert(x.name + " ");
        }
    }
}

function arrForHeight(obj) {
    for (let x of obj) {
        if(x.height > 150) {
            alert(x.name + " ");
        }
    }
}


let choice = Number(prompt("Select from [1-Male Characters, 2-Female Characters, 3-N/A Characters, 4-Height]"));

switch(choice) {
    case 1: arrForMale(obj); break;
    case 2: arrForFemale(obj); break;
    case 3: arrForNA(obj); break;
    case 4: arrForHeight(obj); break;
    default: alert("Invalid input."); break;
}



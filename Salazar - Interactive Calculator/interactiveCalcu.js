let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor= "whitesmoke";

let container = document.getElementsByClassName("container")[0];
container.setAttribute("style", "position:relative; width:800px; border-radius:20px; font-family:Century Gothic");
container.style.backgroundColor= "wheat";
container.style.marginLeft="30%";
container.style.marginTop="10%";
container.style.paddingLeft= "40px";
container.style.paddingTop="20px";
container.style.fontSize="20px";

let h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize= "60px";
h1.style.textAlign="center";
h1.style.paddingTop= "50px;"

let modeBtn = document.getElementById("darkMode")[0];
modeBtn.setAttribute("style", "width:30px; border-radius:50px;");
modeBtn.style.fontSize="30px";
modeBtn.style.paddingLeft="40px";

function addFunction() {
    var firstNum = Number(document.getElementById("firstInput").value);
    var secondNum = Number(document.getElementById("secondInput").value);
    var res = document.getElementById("result");
    res.style.fontSize = "40px";
    document.getElementById("result").innerHTML=firstNum+secondNum;
}

function subFunction() {
    var firstNum = Number(document.getElementById("firstInput").value);
    var secondNum = Number(document.getElementById("secondInput").value);
    document.getElementById("result").innerHTML=firstNum-secondNum;
}

function mulFunction() {
    var firstNum = Number(document.getElementById("firstInput").value);
    var secondNum = Number(document.getElementById("secondInput").value);
    document.getElementById("result").innerHTML=firstNum*secondNum;
}

function divFunction() {
    var firstNum = Number(document.getElementById("firstInput").value);
    var secondNum = Number(document.getElementById("secondInput").value);
    document.getElementById("result").innerHTML=firstNum/secondNum;
}

function darkMode() {
    var content= document.getElementsByTagName("body")[0];
    var container= document.getElementsByClassName("container")[0]
    var darkMode= document.getElementById("darkMode");
    darkMode.addEventListener("click", function() {
        darkMode.classList.toggle("active");
        if (darkMode.classList.toggle("darkMode")) {
            content.style.backgroundColor="whitesmoke";
            content.style.color="black";
            container.style.backgroundColor="wheat";
            content.style.transition= "0.5s";
        }
        else {
            content.style.backgroundColor="black";
            content.style.color="peru";
            container.style.backgroundColor="black";
            content.style.transition= "0.5s";
        }
    })
}
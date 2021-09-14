var arrOfNum = [];

function checkNumAppears (arrOfNum) {
    if(arrOfNum.join().includes(5)) {
        console.log("!!!!");
    }
    else {
        return "There is no 5 in the array.";
    }
}


console.log(checkNumAppears([2, 55, 60, 97, 86]));
console.log(checkNumAppears([8, 6, 33, 100]));
console.log(checkNumAppears([1, 2, 3, 4, 5, 6, 7]));

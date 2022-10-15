let count = 0;
let output = document.getElementById("output");

const myCounter = (btn_name) => {
    if(btn_name == "plus") {
        count += 1;
        output.innerHTML = count;
        output.style.color = "green";
    } else if(btn_name == "minus") {
        if(count > 0) {
            count -= 1;
            output.innerHTML = count;
            output.style.color = "red";
        } if(count == 0) {
            output.innerHTML = count;
            output.style.color = "white";
        }
    } else {
        count = 0;
        output.innerHTML = count;
        output.style.color = "white";
    }
}

document.getElementById("btn-increase").onclick = function () {
    myCounter("plus");
}

document.getElementById("btn-reset").onclick = function () {
    myCounter("reset");
}

document.getElementById("btn-decrease").onclick = function () {
    myCounter("minus");
}
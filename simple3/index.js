const input = document.getElementById("num");
const para1 = document.getElementById("pa");

function same(){
    let value = Number(input.value);

    para1.innerText = "your weight in the kilograme is " + (value * 0.45359237);
    para1.style.fontSize = "30px";
    para1.style.marginTop = "30px";
    para1.style.fontWeight = "700";
    para1.style.textAlign = "center";
    para1.style.color = "white";
}



input.addEventListener("input" , same)
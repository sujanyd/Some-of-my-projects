const input = document.getElementById("num1");
const para1 = document.getElementById("pa1")
const para2 = document.getElementById("pa2")
const para3 = document.getElementById("pa3")



function same2(){
    let value = input.value;

    if(value == 0){
        para2.innerText = "❄️ It is Freezing"
        para2.style.fontSize = "30px";
        para2.style.marginTop = "30px";
        para2.style.fontWeight = "700";
        para2.style.textAlign = "center";
        para2.style.color = "blue";
        }
    else if(value>0 && value <=20){
        para2.innerText = "🧊 It is Cold";
        para2.style.fontSize = "30px";
        para2.style.marginTop = "30px";
        para2.style.fontWeight = "700";
        para2.style.textAlign = "center";
        para2.style.color = "#00bfff";
    }
    else if(value>20 && value<= 30){
        para2.innerText = "🌤 It is Warm";
        para2.style.fontSize = "30px";
        para2.style.marginTop = "30px";
        para2.style.fontWeight = "700";
        para2.style.textAlign = "center";
        para2.style.color = "orange";
    }
    else{
        para2.innerText = "🔥 It is Hot";
        para2.style.fontSize = "30px";
        para2.style.marginTop = "30px";
        para2.style.fontWeight = "700";
        para2.style.textAlign = "center";
        para2.style.color = "red";
    }
}

function same(){
    let value = input.value;
    para1.innerText = "The temperature in the fahernheit is   " + ((value * 1.8) +32);
    para1.style.fontSize = "30px";
    para1.style.marginTop = "30px";
    para1.style.fontWeight = "700";
    para1.style.textAlign = "center";
    para1.style.color = "purple";
    
}


function same3(){
    let value = input.value;
    para3.innerText = "The temperature in the Kelvin is   " +( value + 273.15);
    para3.style.fontSize = "30px";
    para3.style.marginTop = "30px";
    para3.style.fontWeight = "700";
    para3.style.textAlign = "center";
    para3.style.color = "#006400";
    
}


input.addEventListener("input" ,same2)
input.addEventListener("input" , same)
input.addEventListener("input" , same3)
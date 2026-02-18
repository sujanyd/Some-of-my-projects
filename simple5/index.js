const para1 = document.getElementById("hr")
const para2 = document.getElementById("min")
const para3 = document.getElementById("sec")

function same(){
    let a = new Date();

    let b = a.getHours();
    let c = a.getMinutes();
    let d = a.getSeconds();

    para1.innerHTML = b;
    para2.innerHTML = c;
    para3.innerHTML = d;

}

setInterval(same, 1000);
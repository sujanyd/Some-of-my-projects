const input = document.getElementById("password");
const pass = document.getElementById('pa'); 


function change() {
    let value = input.value.length;

    if (value < 5) {
        pass.innerText = "Easy";
        pass.style.color = "red";
    } else if (value < 8) {
        pass.innerText = "Medium";
        pass.style.color = "orange";
    } else {
        pass.innerText = "Hard";
        pass.style.color = "green";
    }
}


input.addEventListener("input", change);
const input = document.getElementById("age");
const para1 = document.getElementById("pa");

function age() {
    let value = input.value;

    if (!value) {
        para1.innerText = "Please select a date.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(value);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    para1.innerText = `Your age is ${age} years`;
    para1.style.fontSize = "30px";
    para1.style.marginTop = "30px";
    para1.style.fontWeight = "700";
    para1.style.textAlign = "center";
    para1.style.color = "white";
}


input.addEventListener("input" , age)
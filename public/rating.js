let mainMsg = document.getElementById("main");
let submitMsg = document.getElementById("submit");
let successMsg = document.getElementById("success");
let Rating = document.getElementById('select');
let one = document.getElementById("first");
let two = document.getElementById("second");
let three = document.getElementById("third");
let four = document.getElementById("fourth");
let five = document.getElementById("fifth");
let goBack = document.getElementById("goback");

submitMsg.addEventListener("click", () => {
    mainMsg.style.display = "none";
    successMsg.style.display = "block";
    goBack.style.display = "block";
    one.classList.remove("highlight");
    two.classList.remove("highlight");
    three.classList.remove("highlight");
    four.classList.remove("highlight");
    five.classList.remove("highlight");
});
goBack.addEventListener("click", () => {
    mainMsg.style.display = "block";
    successMsg.style.display = "none";
    goBack.style.display = "none"
});

one.addEventListener("click", function () {
    one.classList.add("highlight");
    five.classList.remove("highlight");
    two.classList.remove("highlight");
    three.classList.remove("highlight");
    four.classList.remove("highlight");
});
two.addEventListener("click", function () {
    two.classList.add("highlight");
    one.classList.remove("highlight");
    five.classList.remove("highlight");
    three.classList.remove("highlight");
    four.classList.remove("highlight");
});
three.addEventListener("click", function () {
    three.classList.add("highlight");
    one.classList.remove("highlight");
    two.classList.remove("highlight");
    five.classList.remove("highlight");
    four.classList.remove("highlight");
});
four.addEventListener("click", function () {
    four.classList.add("highlight");
    one.classList.remove("highlight");
    two.classList.remove("highlight");
    three.classList.remove("highlight");
    five.classList.remove("highlight");
});
five.addEventListener("click", function () {
    five.classList.add("highlight");
    one.classList.remove("highlight");
    two.classList.remove("highlight");
    three.classList.remove("highlight");
    four.classList.remove("highlight");
});

function rate(x) {
    Rating.innerText = x.innerText;
}
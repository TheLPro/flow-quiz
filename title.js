var current = 1;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("return");
var title = document.getElementById("title");
var progress = document.getElementById("progressBar");

function changeTitle(num) {
    document.title = `Faza ${num} | Test Wypalenia`;
    title.innerHTML = `Faza ${num}`;
    progress.value = num + 1;
}
changeTitle(current);
function next() {
    if (current < 12) {
        current++;
        changeTitle(current);
    } else {
        window.location.href = "done.html";
    }
}
function back() {
    if (current > 1) {
        current--;
        changeTitle(current);
    } else {
        window.location.href = "index.html";
    }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", back);
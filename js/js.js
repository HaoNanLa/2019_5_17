//
const li = document.querySelectorAll(".hot-line ul.right li");
const con = document.querySelectorAll(".hot-flight .container");

let now = 0;

function interact(next) {
    li[now].classList.remove("active")
    con[now].classList.remove("active")
    li[next].classList.add("active")
    con[next].classList.add("active")
    now = next
}
interact(0)
for (let i = 0; i < li.length; i++){
    li[i].onclick = function () {
        interact(i)
    }
}































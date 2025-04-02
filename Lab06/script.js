var count = 3; // 初始化計數器

function addfunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `CLICK ME(${count})`;
    btn.setAttribute("id", "btn_" + count++);
    btn.setAttribute("class", "btn btn-outline-danger");
    console.log(btn);
    document.body.appendChild(btn);
}

function delfunction() {
    var btn = document.getElementById("btn_" + --count);
    if (btn) {
        console.log("Deleting:", btn);
        document.body.removeChild(btn);
    } else {
        console.log("Button not found");
    }
}

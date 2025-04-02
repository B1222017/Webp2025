window.onload = function () {
    let container = document.getElementById("container");
    add_new_chars(0, 2); // 初始時隨機產生 0~2 個字元
};

window.addEventListener("keyup", function (e) {
    let container = document.getElementById("container");
    let text = container.textContent.trim(); // 確保沒有空格影響匹配

    console.log("輸入:", e.key);
    console.log("目前字串:", text);

    if (text.length > 0 && text[0] === e.key) {
        console.log("匹配成功，刪除:", text[0]);
        container.textContent = text.slice(1); // 刪除第一個字元
    } else {
        console.log("未匹配，無刪除");
    }

    // 先刪除，再新增新的字母
    setTimeout(() => {
        add_new_chars(1, 3);
    }, 50);
});

function add_new_chars(min, max) {
    let container = document.getElementById("container");
    let chars = "abcdefghijklmnopqrstuvwxyz"; // 只包含小寫字母
    let count = Math.floor(Math.random() * (max - min + 1)) + min; // 產生 min~max 個字元
    let newChars = "";

    for (let i = 0; i < count; i++) {
        newChars += chars[Math.floor(Math.random() * chars.length)];
    }

    container.textContent += newChars; // 新字元加到 container
    console.log("新增字元:", newChars);
}

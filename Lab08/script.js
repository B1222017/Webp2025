let wrongCount = 0; // 記錄連續輸入錯誤次數

window.onload = function () {
    let container = document.getElementById("container");
    add_new_chars(0, 2); // 初始時隨機產生 0~2 個字元
};

window.addEventListener("keyup", function (e) {
    let container = document.getElementById("container");
    let text = container.textContent.trim();

    console.log("輸入:", e.key);
    console.log("目前字串:", text);

    if (text.length > 0 && text[0] === e.key) {
        console.log("匹配成功，刪除:", text[0]);
        container.textContent = text.slice(1); // 刪除第一個字元
        wrongCount = 0; // 成功輸入後，錯誤次數歸零
    } else {
        console.log("未匹配，無刪除");
        wrongCount++; // 增加錯誤次數
    }

    setTimeout(() => {
        add_new_chars(1, 3); // 原本的新增

        if (wrongCount >= 3) {
            console.log("連續錯誤 3 次，額外新增 6 個字元！");
            add_new_chars(6, 6); // 額外新增 6 個字元
            wrongCount = 0; // 重設錯誤次數
        }
    }, 50);
});

function add_new_chars(min, max) {
    let container = document.getElementById("container");
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let count = Math.floor(Math.random() * (max - min + 1)) + min;
    let newChars = "";

    for (let i = 0; i < count; i++) {
        newChars += chars[Math.floor(Math.random() * chars.length)];
    }

    container.textContent += newChars;
    console.log("新增字元:", newChars);
}

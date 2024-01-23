// ボタンがクリックされたら表示する文章を書き換えるプログラム
const eventBtn = document.getElementById("btn");
eventBtn.addEventListener("click", ()=> {
    const text = document.getElementById("text");
    text.innerText = "ボタンをクリックしました";
});

// 模範解答
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = "ボタンをクリックしました";
});

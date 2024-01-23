// ボタンがクリックされたら表示する文章を書き換えるプログラム
const eventBtn = document.getElementById("btn");
console.log(eventBtn);
eventBtn.addEventListener("click", ()=> {
    const text = document.getElementById("text");
    text.innerText = "ボタンをクリックしました";
    console.log(text.value);
});
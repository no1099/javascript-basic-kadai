// ボタンがクリックされたら表示する文章を書き換えるプログラム
const eventBtn = document.getElementById("btn");
eventBtn.addEventListener("click", ()=> {
    setTimeout(()=> {
        const text = document.getElementById("text");
        text.innerText = "ボタンをクリックしました";       
    }, 2000);
});
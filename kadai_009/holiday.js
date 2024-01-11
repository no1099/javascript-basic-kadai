
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
const arrlen = holidays.length;
console.log("*****for文*****")
for (let i=0; i<arrlen; i++) {
    console.log(holidays[i]);
}
let j=0;
console.log("*****while文*****")
while (j<arrlen) {
    console.log(holidays[j]);
    j+=1;
}
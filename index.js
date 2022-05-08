let date = new Date();
let date1 = date.getUTCSeconds();
let date2 = date.getSeconds();
let date3 = date.getUTCHours();
let date4 = date.getHours();
let a = date.getHours();
if (6 <= a && a < 12) {
    console.log("Xayrli tong");
} else if (12 <= a && a < 18) {
    console.log("Xayrli kun");
} else {
    console.log("Xayrli kech");
}
console.log(date3);
console.log(date1);
console.log(date4);
console.log(date2);
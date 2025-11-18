console.log(1)

let string: string ='Privet';
let nomer: number=69; 
let shtoto: boolean=false;

let variable: any = 5;
variable = "текст";
variable = true;
let empty: null = null;
function show(): void{
    console.log("...");
}
show();

let count: number=0;
console.log(count);
count=99;
console.log(count);

let a: number = 25;
let b: number = 4;
let sum: number = a + b;
if (sum%2===0) {
    console.log("Число " + sum + " чётное");
}
if (sum%2!=0) {
    console.log("Число " + sum + " нечётное");
}

let sc: number=0;
sc+=1;
sc+=1;
sc+=1;
sc-=1;
sc-=1;
console.log(sc);
// C)
let wallet: number=1000;
wallet+=200;
wallet*=0.7;
wallet/=2;
console.log(wallet);

const speed: number=80;
const isRoadClear: boolean=false;
if (speed<=60||!isRoadClear){
console.log('Можно ехать');
}
if (speed>=80 && isRoadClear) {
console.log('Опасно');
}

let hk: boolean = true;
let knowsPassword: boolean = false;
if (hk&&knowsPassword) {
    console.log("Полный доступ");
}
if ((hk&&!knowsPassword)||(!hk&&knowsPassword)){
    console.log("Ограниченный доступ");
}
if (!hk&&!knowsPassword){
    console.log("Доступ запрещён");
}

let sum1=0;
for (let i=1;i<=10;i++){
    sum1+=i;
}
console.log(sum1);

let A=5;
let res=1;
for (let i=1;i<=10;i++){
    res=A*i;
    console.log(A+"×"+i+"="+res);
}

let n=6;
let fac=1;
for (let i=1;i<=n;i++){
    fac*=i;
}
console.log(fac);

// Практика Функции
//1
function add(a:number,b:number):number{
    return a + b;
}
console.log(add(12, 2));
console.log(add(34, 35));
console.log(add(-34, 37));

//2
function greet(name: string = "name") {
    console.log("еу, " + name + "!");
}
greet("...");

//3
function isEven(num:number):boolean{
    return num%2===0;
}
console.log(isEven(7));
console.log(isEven(8));

//4
function sq(num:number):number{
    return num*num;
}
console.log(sq(5));
console.log(sq(10));

//5
function sravn(a: number, b: number): string {
    if (a > b) {
        return "первое число больше";
    }
    if (b > a) {
        return "второе число больше";
    }
    return "равны";
}
console.log(sravn(13, 28));
console.log(sravn(4, 15));
console.log(sravn(33, 4));

//д/з
let Age:number=17; 
if (Age<18){
    console.log('нет доступа!');
}
if (Age>=18){
    console.log('доступ есть!');
    for (let i=1;i<=10;i++){
        console.log(Age+' x '+i,'= '+Age*i);
    }
}
//д/з 2
function calculator(a, b, c) {
    if (c === '+') {
        return a + b;
    }
    if (c === '-') {
        return a - b;
    }
    if (c === '*') {
        return a * b;
    }
    if (c === '/') {
        return a / b;
    }
    return 0;
}
console.log('12 + 21 = ',
    calculator(12, 21, '+'));
console.log('3 - 23 = ',
    calculator(3, 23, '-'));
console.log('4 × 11 = ',
    calculator(4, 11, '*'));
console.log('45 ÷ 23 = ',
    calculator(45, 23, '/'));
//
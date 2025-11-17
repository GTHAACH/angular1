console.log(1);

var string = 'Privet';
var nomer = 69;
var shtoto = false;

var variable = 5;
variable = "текст";
variable = true;
var empty = null;
function show() {
    console.log("...");
}
show();

var count = 0;
console.log(count);
count = 99;
console.log(count);

var a = 25;
var b = 4;
var sum = a + b;
if (sum % 2 === 0) {
    console.log("Число " + sum + " чётное");
}
if (sum % 2 != 0) {
    console.log("Число " + sum + " нечётное");
}

var sc = 0;
sc += 1;
sc += 1;
sc += 1;
sc -= 1;
sc -= 1;
console.log(sc);

var wallet = 1000;
wallet += 200;
wallet *= 0.7;
wallet /= 2;
console.log(wallet);

var speed = 80;
var isRoadClear = false;
if (speed <= 60 || !isRoadClear) {
    console.log('Можно ехать');
}
if (speed >= 80 && isRoadClear) {
    console.log('Опасно');
}

var hk = true;
var knowsPassword = false;
if (hk && knowsPassword) {
    console.log("Полный доступ");
}
if ((hk && !knowsPassword) || (!hk && knowsPassword)) {
    console.log("Ограниченный доступ");
}
if (!hk && !knowsPassword) {
    console.log("Доступ запрещён");
}

var sum1 = 0;
for (var i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);

var A = 5;
var res = 1;
for (var i = 1; i <= 10; i++) {
    res = A * i;
    console.log(A + "×" + i + "=" + res);
}

var n = 6;
var fac = 1;
for (var i = 1; i <= n; i++) {
    fac *= i;
}
console.log(fac);

//practic functions
//1
function add(a, b) {
    return a + b;
}
console.log(add(12, 2));
console.log(add(34, 35));
console.log(add(-34, 37));
//2
function greet(name) {
    if (name === void 0) { name = "name"; }
    console.log("еу, " + name + "!");
}
greet("...");
//3
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(7));
console.log(isEven(8));
//4
function sq(num) {
    return num * num;
}
console.log(sq(5));
console.log(sq(10));
//5
function sravn(a, b) {
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
var Age = 17;
if (Age < 18) {
    console.log('нет доступа!');
}
if (Age >= 18) {
    console.log('доступ есть!');
    for (var i = 1; i <= 10; i++) {
        console.log(Age + ' x ' + i, '= ' + Age * i);
    }
}
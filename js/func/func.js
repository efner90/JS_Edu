function hello(){
    console.log("hello from Metanit");
}
hello();
//передача константа ссылки функцию hello
const message = hello;
message();

function goodMorning(){
    console.log("Good morning");
}
function goodEvening(){
    console.log("Good evening!");
}
let messageGood = goodMorning;
messageGood();
messageGood = goodEvening;
messageGood();

//анонимные функции
let message2 = function(){
    console.log("Hello JS!");
}
message2();

function print(message){
    console.log(message);
}
print("Hello JavaScript");
print("Hello METANIT.COM");
print("Function in JavaScript");
print();

function sum(a,b){
    const result = a+b;
    console.log(result);
}
sum(2,6);
sum(4,6);
sum(150,150);
//раньше делали проверку 
function sum(x, y){
 
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
    const z = x + y;
    console.log(z);
}
sum();          // 13
sum(6);         // 11
sum(6, 4)       // 10
//сейчас можно задать аргументы по дефу
function sum(x = 8, y = 5){
 
    const z = x + y;
    console.log(z);
}
sum();      // 13
sum(6);     // 11
sum(6, 4)   // 10

//При необходимости мы можем получить все переданные параметры через глобально доступный массив arguments:

function sum(){
    let result = 0;
    for(const i of arguments)
        result += i;
    console.log(result);
}
sum(6);             // 6
sum(6, 4)           // 10
sum(6, 4, 5)        // 15

function display(season, ...temps){
    console.log(season);
    for(i in temps){
        console.log(temps[i]);
    }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);

//функции в качестве параметров

function sum(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
function operation(x, y, func){
  
    const action = func(x, y);
    console.log(action);
}
 
console.log("Sum");
operation(10, 6, sum);  // 16
 
console.log("Subtract");
operation(10, 6, subtract); // 4
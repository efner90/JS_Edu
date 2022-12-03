/*
for
for..in
for..of
while
do..while*/

//FOR

for (let i = 0; i < 5; i++) {
    //console.log(i);
}
//console.log("work finished");

for (let i = 10; i >= 5; i--) {
    //console.log(i);
}
//альтернатиынй способ записи
let i = 0;
for (; i < 60;) {
    //console.log(i);
    i = i + 10;
}
//множество счётчиков
for (let i = 1, j = 1; i < 5, j < 4; i++, j++) {
    //console.log(i, j);
}
//вложенные циклы
for(let i=1; i <= 5; i++){
      
    for(let j = 1; j <=5; j++){
       //console.log(i * j);
    }
}

//цикл while
let q = 1;
while(q <=5){
    //console.log(q);
    q++;
}
//Цикл while здесь будет выполняться, пока значение i не станет равным 6.
//DO WHILE
/*В цикле do сначала выполняется код цикла, а потом происходит проверка 
условия в инструкции while. И пока это условие истинно, цикл повторяется. Например:*/
let x =1;
do{
    //console.log(x);
    x++
}while(x<=5);
//Операторы continue и break
for(let i=1; i <= 10; i++){
      
    if(i===6) break;
    //console.log(i);
}
//console.log("Конец работы");

for(let i=1; i <= 10; i++){
      
    if(i===6) continue;
    //console.log(i);
}
//console.log("Конец работы");

//FOR IN
const person = {name:"Tom", age :15};
for(i in person){
    //console.log(i);
}
//for of
const website = "METANIT.COM";
for(ch of website){
      
     //console.log(ch);
}

const people = ["Tom", "Sam", "Bob"];
for(const person of people) {
    console.log(person);
}
/*
if (условие){
    некоторые действия
}*/
const income = 100;
if (income > 50) {
    console.log("Your paymant over", 50);

}
//или в одну строку с одним условием
const incomes = 100;
if (income > 50) console.log("доход больше 50");

const inc = 100;
const age = 19;
if (inc > 50 && age > 18) {
    console.log("payment over 50");
    console.log("age over 18");
}

let myVar = 89;
if (myVar) {
    console.log(`Переменная myVar имеет значение: ${myVar}`);
}

let myVar1;
if (myVar1) {
    console.log(`Переменная myVar имеет значение: ${myVar1}`);
}

if (myVar != undefined && myVar !== null) (`Переменная myVar имеет значение: ${myVar}`);

//switch case

const variables = 3000;
switch(variables){
    case 100:
        console.log("доход 100");
        break;
    case 200:
        console.log("dohod 200");
        break;
    case 300:
        console.log("dohod 300");
        break;
    default:
        console.log("dohod unknow");
    break;
}
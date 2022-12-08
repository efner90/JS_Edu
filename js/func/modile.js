let foo = (function(){
    let obj = {greeting: "hello!"};

    return{
        display: function(){
            console.log(obj.greeting);
        }
    }
})();
foo.display();

let calculator = (function(){
    let data = {number: 0};

    return{
        sum: function(n){
            data.number +=n;
        },
        substract: function(n){
            data.number -=n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.substract(4);
calculator.display();   // Result: 9

/*Данный модуль представляет примитивный калькулятор, который выполняет три операции: сложение, вычитание и вывод результата.

Все данные инкапсулированы в объекте data, который хранит результат операции. Все операции представлены тремя возвращаемыми 
функциями: sum, subtract и display. Через эти функции мы можем управлять результатом калькулятора извне.*/
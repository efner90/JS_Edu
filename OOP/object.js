let user = new Object();
//второй способ создания объекта

let userNew = {};
//свойства

user.name = "Alexey";
user.age = 30;
console.log(user.name);
console.log(user.age);

//свойства при определении

let user2 = {
    name:"Alex",
    age: 33
}

console.log(user2.name);
console.log(user2.age);

let names = "Alexey";
let age = 34;
let user3 = {names, age};

let teacher = {
    user3,
    course: "JavaScript"
};
console.log(teacher.user3.names);
console.log(teacher.course);

//методы объекта

let person = {};
person.name = "Alex";
person.male = "male";
person.display = function(){
    console.log(person.name);
    console.log(person.male);
}

person.display();

//метод при обпределении объекта
 let userAl = {
    name: "Alexey",
    age:26,
    displays: function(){
        console.log(this.name);
        console.log(this.age);
    }
 }
 userAl.displays();

 //альтернативный сокращённый способ

 let man = {
    name: "Alexey",
    age: 23,
    diasplay(){
        console.log(this.name, this.age);
    },
    move(place){
        console.log(this.name, "goes to", place);
    }
 };

 man.diasplay();
 man.move("to glory");
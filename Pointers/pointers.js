class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Adriano", 19);
let p2 = new Person("Maria", 22);
let p3 = p1;
// let p3 = Person { name: 'Adriano', age: 19 }
p3.age = 40;
// Person { name: 'Adriano', age: 19 } = Person { name: 'Adriano', age: 40 }
// let p3, let p1 = Person { name: 'Adriano', age: 40 }
// p1 e p3 apontam para o mesmo objeto (Person) que tem determinados valores, logo os dois tem isso


console.log(p1, p2, p3);
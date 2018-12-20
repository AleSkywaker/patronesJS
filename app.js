//Factory patterns
var peopleFactory = function(name, age, state) {
  var temp = {};
  temp.name = name;
  temp.age = age;
  temp.state = state;
  temp.printPerson = function() {
    console.log(`Tu nombre es ${name}, vives en ${state} y tienes ${age}`);
  };
  return temp;
};

var person1 = peopleFactory("Alex", 23, "Madrid");
var person2 = peopleFactory("Luca", 33, "Barcelona");
var person3 = peopleFactory("Patricia", 19, "Valencia");

person1.printPerson();
person2.printPerson();
person3.printPerson();

//Constructor pattern class ES2015
class PeopleConstructor {
  constructor(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.printPerson = function() {
      console.log(`Tu nombre es ${name}, vives en ${state} y tienes ${age}`);
    };
  }
}

let person4 = new PeopleConstructor("Sky", 55, "otherPlanet");
person4.printPerson();

//constructor pattern
let PeopleConstructorNormal = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;
  this.printPerson = function() {
    console.log(`Tu nombre es ${name}, vives en ${state} y tienes ${age}`);
  };
};

let person5 = new PeopleConstructorNormal("Alicia", 28, "Cordoba");
person5.printPerson();

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

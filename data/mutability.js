let clone1 = Object.assign({}, person);
let clone2 = {...person };
let samePerson = person;
person.age++;
person.country = 'FR';
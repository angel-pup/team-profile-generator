const Engineer = require('./lib/Engineer');

const myEmployee = new Engineer('Spencer', 27, 'Spencer@Spencers.com');

console.log(myEmployee.getRole());
console.log(myEmployee.getName());
console.log(myEmployee.getId());
console.log(myEmployee.getEmail());
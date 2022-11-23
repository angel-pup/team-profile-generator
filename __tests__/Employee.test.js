const Employee = require('../lib/Employee');

describe("Employee", () => {

    // test Employee class getName() method
    describe("getName", () => {
        it("should return the name of \'Employee\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test';
            // Next we create a new Employee object to test with.
            const employee = new Employee('test', 1, 'test@test.com');
            // Finally, we test if our exampleOutput matches that of the getName() method
            // found within the Employee class.
            expect(employee.getName()).toEqual(exampleOutput);
        })
    })

    // test Employee class getId() method
    describe("getId", () => {
        it("should return the ID of \'Employee\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 1;
            // Next we create a new Employee object to test with.
            const employee = new Employee('test', 1, 'test@test.com');
            // Finally, we test if our exampleOutput matches that of the getId() method
            // found within the Employee class.
            expect(employee.getId()).toEqual(exampleOutput);
        })
    })

    // test Employee class getEmail() method
    describe("getEmail", () => {
        it("should return the email of \'Employee\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test@test.com';
            // Next we create a new Employee object to test with.
            const employee = new Employee('test', 1, 'test@test.com');
            // Finally, we test if our exampleOutput matches that of the getEmail() method
            // found within the Employee class.
            expect(employee.getEmail()).toEqual(exampleOutput);
        })
    })

    // test Employee class getRole() method
    describe("getRole", () => {
        it("should return the role of \'Employee\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'Employee';
            // Next we create a new Employee object to test with.
            const employee = new Employee('test', 1, 'test@test.com');
            // Finally, we test if our exampleOutput matches that of the getRole() method
            // found within the Employee class.
            expect(employee.getRole()).toEqual(exampleOutput);
        })
    })
});

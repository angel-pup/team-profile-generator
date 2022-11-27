const Manager = require('../lib/Manager');

describe("Manager", () => {

    // test Manager class getName() method
    describe("getName", () => {
        it("should return the name of \'Manager\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test';
            // Next we create a new Manager object to test with.
            const manager = new Manager('test', 1, 'test@test.com', '318-555-0663');
            // Finally, we test if our exampleOutput matches that of the getName() method
            // inherited by the Manager class.
            expect(manager.getName()).toEqual(exampleOutput);
        });
    });

    // test Manager class getId() method
    describe("getId", () => {
        it("should return the ID of \'Manager\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 1;
            // Next we create a new Manager object to test with.
            const manager = new Manager('test', 1, 'test@test.com', '318-555-0663');
            // Finally, we test if our exampleOutput matches that of the getId() method
            // inherited by the Manager class.
            expect(manager.getId()).toEqual(exampleOutput);
        });
    });

    // test Manager class getEmail() method
    describe("getEmail", () => {
        it("should return the email of \'Manager\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test@test.com';
            // Next we create a new Manager object to test with.
            const manager = new Manager('test', 1, 'test@test.com', '318-555-0663');
            // Finally, we test if our exampleOutput matches that of the getEmail() method
            // inherited by the Manager class.
            expect(manager.getEmail()).toEqual(exampleOutput);
        });
    });

    // test Manager class getRole() method
    describe("getRole", () => {
        it("should return the role of \'Manager\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'Manager';
            // Next we create a new Manager object to test with.
            const manager = new Manager('test', 1, 'test@test.com', '318-555-0663');
            // Finally, we test if our exampleOutput matches that of the getRole() method
            // inherited by the Manager class.
            expect(manager.getRole()).toEqual(exampleOutput);
        });
    });

    // test Manager class getOfficeNumber() method
    describe("getOfficeNumber", () => {
        it("should return the office number of \'Manager\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = '318-555-0663';
            // Next we create a new Manager object to test with.
            const manager = new Manager('test', 1, 'test@test.com', '318-555-0663');
            // Finally, we test if our exampleOutput matches that of the getOfficeNumber() method
            // inherited by the Manager class.
            expect(manager.getOfficeNumber()).toEqual(exampleOutput);
        });
    });
});

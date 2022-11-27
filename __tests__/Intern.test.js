const Intern = require('../lib/Intern');

describe("Intern", () => {

    // test Intern class getName() method
    describe("getName", () => {
        it("should return the name of \'Intern\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test';
            // Next we create a new Intern object to test with.
            const intern = new Intern('test', 1, 'test@test.com', 'University of Kansas');
            // Finally, we test if our exampleOutput matches that of the getName() method
            // inherited by the Intern class.
            expect(intern.getName()).toEqual(exampleOutput);
        });
    });

    // test Intern class getId() method
    describe("getId", () => {
        it("should return the ID of \'Intern\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 1;
            // Next we create a new Intern object to test with.
            const intern = new Intern('test', 1, 'test@test.com', 'University of Kansas');
            // Finally, we test if our exampleOutput matches that of the getId() method
            // inherited by the Intern class.
            expect(intern.getId()).toEqual(exampleOutput);
        });
    });

    // test Intern class getEmail() method
    describe("getEmail", () => {
        it("should return the email of \'Intern\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test@test.com';
            // Next we create a new Intern object to test with.
            const intern = new Intern('test', 1, 'test@test.com', 'University of Kansas');
            // Finally, we test if our exampleOutput matches that of the getEmail() method
            // inherited by the Intern class.
            expect(intern.getEmail()).toEqual(exampleOutput);
        });
    });

    // test Intern class getRole() method
    describe("getRole", () => {
        it("should return the role of \'Intern\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'Intern';
            // Next we create a new Intern object to test with.
            const intern = new Intern('test', 1, 'test@test.com', 'University of Kansas');
            // Finally, we test if our exampleOutput matches that of the getRole() method
            // inherited by the Intern class.
            expect(intern.getRole()).toEqual(exampleOutput);
        });
    });

    // test Intern class getSchool() method
    describe("getSchool", () => {
        it("should return the school of \'Intern\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'University of Kansas';
            // Next we create a new Intern object to test with.
            const intern = new Intern('test', 1, 'test@test.com', 'University of Kansas');
            // Finally, we test if our exampleOutput matches that of the getSchool() method
            // inherited by the Intern class.
            expect(intern.getSchool()).toEqual(exampleOutput);
        });
    });
});

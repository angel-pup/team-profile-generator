const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    // test Engineer class getName() method
    describe("getName", () => {
        it("should return the name of \'Engineer\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test';
            // Next we create a new Engineer object to test with.
            const engineer = new Engineer('test', 1, 'test@test.com', 'SpencerRSMS');
            // Finally, we test if our exampleOutput matches that of the getName() method
            // inherited by the Engineer class.
            expect(engineer.getName()).toEqual(exampleOutput);
        })
    })

    // test Engineer class getId() method
    describe("getId", () => {
        it("should return the ID of \'Engineer\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 1;
            // Next we create a new Engineer object to test with.
            const engineer = new Engineer('test', 1, 'test@test.com', 'SpencerRSMS');
            // Finally, we test if our exampleOutput matches that of the getId() method
            // inherited by the Engineer class.
            expect(engineer.getId()).toEqual(exampleOutput);
        })
    })

    // test Engineer class getEmail() method
    describe("getEmail", () => {
        it("should return the email of \'Engineer\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'test@test.com';
            // Next we create a new Engineer object to test with.
            const engineer = new Engineer('test', 1, 'test@test.com', 'SpencerRSMS');
            // Finally, we test if our exampleOutput matches that of the getEmail() method
            // inherited by the Engineer class.
            expect(engineer.getEmail()).toEqual(exampleOutput);
        })
    })

    // test Engineer class getRole() method
    describe("getRole", () => {
        it("should return the role of \'Engineer\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'Engineer';
            // Next we create a new Engineer object to test with.
            const engineer = new Engineer('test', 1, 'test@test.com', 'SpencerRSMS');
            // Finally, we test if our exampleOutput matches that of the getRole() method
            // inherited by the Engineer class.
            expect(engineer.getRole()).toEqual(exampleOutput);
        })
    })

    // test Engineer class getGithub() method
    describe("getGithub", () => {
        it("should return the GitHub username of \'Engineer\'", () => {
            // In order to test the function, we need to create a working example. First we define
            // what we should expect as our output.
            const exampleOutput = 'SpencerRSMS';
            // Next we create a new Engineer object to test with.
            const engineer = new Engineer('test', 1, 'test@test.com', 'SpencerRSMS');
            // Finally, we test if our exampleOutput matches that of the getGithub() method
            // inherited by the Engineer class.
            expect(engineer.getGithub()).toEqual(exampleOutput);
        })
    })
});

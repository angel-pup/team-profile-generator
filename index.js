const inquirer = require('inquirer');
const fs = require('fs');
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// Include packages needed for this application
// Employee Types
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// HTML Generator
const Template = require('./src/Template');

// Constants to make code more readable/slightly less typing later on
const NAME_QUESTION = 'name-question';
const ID_QUESTION = 'id-question';
const EMAIL_QUESTION = 'email-question';
const OFFICE_NUMBER_QUESTION = 'office-number-question';
const GITHUB_QUESTION = 'github-question';
const SCHOOL_QUESTION = 'school-question';
const ADD_EMPLOYEE_QUESTION = 'add-employee-question';

// Dictionary of questions
const questions = {
    'name-question': {
        type: 'input',
        name: 'name',
        message: 'Please input Employee\'s name.'
    },
    'id-question': {
        type: 'input',
        name: 'id',
        message: 'Please input Employee\'s ID.'
    },
    'email-question': {
        type: 'input',
        name: 'email',
        message: 'Please input Employee\'s email address.'
    },
    'office-number-question': {
        type: 'input',
        name: 'officeNumber',
        message: 'Please input Employee\'s Office Number.'
    },
    'github-question': {
        type: 'input',
        name: 'github',
        message: 'Please input Employee\'s GitHub Username.'
    },
    'school-question': {
        type: 'input',
        name: 'github',
        message: 'Please input Employee\'s current School.'
    },
    'add-employee-question': {
        type: 'list',
        name: 'type',
        choices: ['Engineer', 'Intern', 'No Thanks.'],
        message: 'Would you like to add another team member?'
    }
}

// Function to generate an HTML file
function writeToFile(fileName, data) {}

// Function to initialize app
function init() {}

// Function to ask question
function question(question_type) {
    inquirer
        .prompt([questions[question_type]])
        .then((data) => {
            console.log(data); // TODO: Manipulate data
            switch(question_type) {
                case OFFICE_NUMBER_QUESTION:
                    question(NAME_QUESTION);
                    break;
                case NAME_QUESTION:
                    question(ID_QUESTION);
                    break;
                case ID_QUESTION:
                    question(EMAIL_QUESTION);
                    break
                case EMAIL_QUESTION:
                    question(ADD_EMPLOYEE_QUESTION);
                    break;
                case ADD_EMPLOYEE_QUESTION:
                    if(data.type === 'Engineer') {
                        question(GITHUB_QUESTION);
                    } else if(data.type === 'Intern') {
                        question(SCHOOL_QUESTION);
                    } else {
                        console.log('No further questions...')
                        console.log('Generating HTML file.');
                    }
                    break;
                default:
                    question(NAME_QUESTION);
            }
        })
}

// Function call to initialize app
init();
question(OFFICE_NUMBER_QUESTION);

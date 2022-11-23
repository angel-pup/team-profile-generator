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
        message: 'Please input employee\'s name.'
    },
    'id-question': {
        type: 'input',
        name: 'id',
        message: 'Please input employee\'s ID.'
    },
    'email-question': {
        type: 'input',
        name: 'email',
        message: 'Please input employee\'s email address.'
    },
    'office-number-question': {
        type: 'input',
        name: 'office_number',
        message: 'Adding Manager to the team.\nPlease input Manager\'s Office Number.'
    },
    'github-question': {
        type: 'input',
        name: 'github',
        message: 'Adding Engineer to the team.\nPlease input employee\'s GitHub Username.'
    },
    'school-question': {
        type: 'input',
        name: 'school',
        message: 'Adding Intern to the team.\nPlease input Employee\'s current School.'
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
async function init() {

    let employees = [];
    let manager_info = await manager_questions();

    const manager = new Manager(
        manager_info.name,
        manager_info.id,
        manager_info.email,
        manager_info.office_number
    );

    employees.push(manager);

    let employee_type = '';

    while(employee_type !== 'No Thanks.') {
        let add_moar_employees = await add_employee();
        employee_type = add_moar_employees.type;

        if (employee_type === 'Engineer') {
            const engineer_info = await engineer_questions();
            const engineer = new Engineer(engineer_info.name, engineer_info.id, engineer_info.email, engineer_info.github);
            employees.push(engineer);
        } else if (employee_type === 'Intern') {
            const intern_info = await intern_questions();
            const intern = new Intern(intern_info.name, intern_info.id, intern_info.email, intern_info.school);
            employees.push(intern);
        }
    }

    console.log(employees); // TODO: create new instance of Template, then pass data/generate HTML
}

async function add_employee() {
    return inquirer.prompt([questions[ADD_EMPLOYEE_QUESTION]])
}

async function manager_questions() {
    return inquirer
        .prompt([
            questions[OFFICE_NUMBER_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ])
}

async function engineer_questions() {
    return inquirer
        .prompt([
            questions[GITHUB_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ])
}

async function intern_questions() {
    return inquirer
        .prompt([
            questions[SCHOOL_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ])
}

// Function call to initialize app
init();

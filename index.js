
// Include packages needed for this application
const inquirer = require('inquirer'); // For building promise data from command line inputs
const fs = require('fs'); // For file reading/writing
const Engineer = require('./lib/Engineer'); // Employee Type
const Intern = require('./lib/Intern'); // Employee Type
const Manager = require('./lib/Manager'); // Employee Type
const path = require('path'); // For handling file paths
// Import JSDOM Class for creating a mock DOM, necessary for leveraging jQuery with Node.js
const { JSDOM } = require( "jsdom" );
// IO functions return buffers, need to use toString
// HTML Template. This will be used to create the mock DOM
const html_template = fs.readFileSync(path.join(__dirname, './src/Template.html')).toString();
// creating a new jsdom object using JSDOM class, passing in our HTML Template
const jsdom = new JSDOM(html_template);
// importing jquery, pointing it to our mock DOM
const $ = require("jquery")(jsdom.window);
// reading and storing our card template, transforming buffer to string again
const card_template = fs.readFileSync(path.join(__dirname, './src/Card_Template.html')).toString();
// parsing the card template and storing it as nodes object, for further manipulation via jQuery
const html_member = $('#members');
const card = $.parseHTML(card_template);

// Constants to make code more readable/slightly less typing later on
const NAME_QUESTION = 'name-question';
const ID_QUESTION = 'id-question';
const EMAIL_QUESTION = 'email-question';
const OFFICE_NUMBER_QUESTION = 'office-number-question';
const GITHUB_QUESTION = 'github-question';
const SCHOOL_QUESTION = 'school-question';
const ADD_EMPLOYEE_QUESTION = 'add-employee-question';

const ICONS = {
    "SCHOOL": "<i class=\"fa fa-thin fa-school\"></i>",
    "ENGINEER": "<p style=\"text-align:center\"><i class=\"fa fa-solid " +
        "fa-glasses\" style=\"padding-right:10px\"></i>Engineer</p>",
    "MANAGER": "<p style=\"text-align:center\"><i class=\"fa fa-solid " +
        "fa-mug-hot\" style=\"padding-right:10px\"></i>Manager</p>",
    "INTERN": "<p style=\"text-align:center\"><i class=\"fa fa-solid " +
        "fa-user-graduate\" style=\"padding-right:10px\"></i>Intern</p>",
    "GITHUB": "<i class=\"fa fa-brands fa-github\"></i>",
    "OFFICE_NUMBER": "<i class=\"fa fa-solid fa-phone\"></i>"
}


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

/**
 * Asks questions about team members, and generates appropriate HTML
 * @returns {Promise<void>}
 */
async function init() {
    // declare local array to store Employee objects
    let employees = [];

    // ask initial question to gather manager information, store data in temporary variable
    const manager_info = await manager_questions();

    // create a new Manager object
    const manager = new Manager(
        manager_info.name,
        manager_info.id,
        manager_info.email,
        manager_info.office_number
    );

    // push Manager object to our employee array
    employees.push(manager);

    // create an empty string, will be used for checking data during while loop
    let employee_type = '';

    // if employee type is not equal to our stop value, continue asking questions
    while(employee_type !== 'No Thanks.') {

        // call add_employee() to check if user would like to add another team member
        let add_moar_employees = await add_employee();
        // store the returned value
        employee_type = add_moar_employees.type;

        // if employee_type is Engineer, ask Engineer questions and store object data
        if (employee_type === 'Engineer') {
            const engineer_info = await engineer_questions();
            const engineer = new Engineer(
                engineer_info.name,
                engineer_info.id,
                engineer_info.email,
                engineer_info.github
            );
            // store Engineer data object in our employee object array
            employees.push(engineer);
        }

        // else if employee_type is Intern, ask Intern questions and store object data
        else if (employee_type === 'Intern') {
            const intern_info = await intern_questions();
            const intern = new Intern(
                intern_info.name,
                intern_info.id,
                intern_info.email,
                intern_info.school
            );
            // store Intern data object in our employee object array
            employees.push(intern);
        }

    }

    html_member.append(card);

    for (let i = 1; i < employees.length; i++) {
        const card_clone = $('.xl3').eq(0).clone();
        card_clone.appendTo(html_member);
    }

    const name = $('.name-template');
    const id = $('.id-template');
    const email = $('.email-template');
    const extra = $('.extra-template');

    for (let i = 0; i < employees.length; i++) {

        name.eq(i).append(`<p style=\"text-align:center; padding-top:15px\">${await employees[i].getName()}</p>`);

        id.eq(i).html(await employees[i].getId());
        const email_address = await employees[i].getEmail();
        email.eq(i).attr('href', `mailto: ${email_address}`);
        email.eq(i).html(email_address);

        switch(await employees[i].getRole()) {
            case 'Engineer':
                const username = await employees[i].getGithub();
                name.eq(i).append(ICONS['ENGINEER']);
                extra.eq(i).parent().prepend(ICONS['GITHUB']);
                extra.eq(i).html(`<a class="title" href="https://github.com/${username}"` +
                    `target="_blank">github.com/${username}</a>`);
                break;
            case 'Manager':
                const office_number = await employees[i].getOfficeNumber();
                name.eq(i).append(ICONS['MANAGER']);
                extra.eq(i).parent().prepend(ICONS['OFFICE_NUMBER']);
                extra.eq(i).html(office_number);
                break;
            case 'Intern':
                name.eq(i).append(ICONS['INTERN']);
                extra.eq(i).parent().prepend(ICONS['SCHOOL']);
                extra.eq(i).html(await employees[i].getSchool());
                break;
            default:
                // TODO: handle
        }


    }

    const output = jsdom.serialize();
    fs.writeFileSync(path.join(__dirname, './dist/output.html'), output);
    console.log('HTML Generated :)');
}

/**
 *
 * @returns {Promise<*>}
 */
async function add_employee() {
    return inquirer.prompt([questions[ADD_EMPLOYEE_QUESTION]]);
}

/**
 *
 * @returns {Promise<*>}
 */
async function manager_questions() {
    return inquirer
        .prompt([
            questions[OFFICE_NUMBER_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ]);
}

/**
 *
 * @returns {Promise<*>}
 */
async function engineer_questions() {
    return inquirer
        .prompt([
            questions[GITHUB_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ]);
}

/**
 *
 * @returns {Promise<*>}
 */
async function intern_questions() {
    return inquirer
        .prompt([
            questions[SCHOOL_QUESTION],
            questions[NAME_QUESTION],
            questions[ID_QUESTION],
            questions[EMAIL_QUESTION]
        ]);
}

// Function call to initialize app
init();

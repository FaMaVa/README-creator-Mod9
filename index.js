// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description or your project:",
    "What kind of license should your project have?", //options displayed: MIT, APACHE 2.0, GPL 3.0, BSD 3, None)
    "What command should be run to install dependencies?", //default: npm i
    "What command should be run to run tests?", //default: npm test
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, JSON.stringify(data), (err) =>
    //     err ? console.log(err) : console.log('Generating R')
    // ); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'title',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[3],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            },
            {
                type: 'input',
                name: 'installation',
                default: "npm i",
                message: questions[5],
            },
            {
                type: 'input',
                name: 'tests',
                default: "npm test",
                message: questions[6],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[8],
            },
        ])
};

// Function call to initialize app
init();

// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description or your project:",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        name: 'installation',
        default: "npm i",
        message: "What command should be run to install dependencies?",
    },
    {
        type: 'input',
        name: 'tests',
        default: "npm test",
        message: "What command should be run to run tests?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the repo?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            
        };
    }
)};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        generateMD.renderLicenseBadge(data.license);
        generateMD.renderLicenseLink(data.license);
        generateMD.renderLicenseSection(data.license);
        const markdown = generateMD.generateMarkdown(data);
        writeToFile("GeneratedREADME.md", markdown);
    })
};
// Function call to initialize app
init();

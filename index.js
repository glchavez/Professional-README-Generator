// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a short description of your project.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information for your project.',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions for your project.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license would you like for your project?',
        choices: [ 'Choice A', 'Choice B', 'Choice C', 'Choice D' ],
    },
    {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

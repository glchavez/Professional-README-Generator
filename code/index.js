// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown');

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
        name: 'description',
        message: 'Enter a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like for your project?',
        choices: [ 'Choice A', 'Choice B', 'Choice C', 'Choice D' ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log("Successfully wrote to README.md");    
    } catch (error) {
        console.log(error)
    }
};

// TODO: Create a function to initialize app
function init() {

    questions().then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile("README.md", markdown)
    });
};

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (input) => {
            if (!input) {
                return "Please enter your name"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid title"
            }
            return true;
        }
    },
    {
        name: "description",
        message: "Describe what your project is about",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid description"
            }
            return true;
        }
    },
    {
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid installation steps"
            }
            return true;
        }
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use",
        validate: (input) => {
            if (!input) {
                return "Please enter a insturctions and examples for use"
            }
            return true;
        }
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project",
        choices: [
            "No License",
            "MIT",
            "GPL 3.0",
            "APACHE 2.0", 
            "BSD 3"
        ]
    },
    {
        name: "contributing",
        message: "What guidelines should other developers follow if they wish to contribute?",
        validate: (input) => {
            if (!input) {
                return "Please enter some guidelines for contributing"
            }
            return true;
        }
    },
    {
        name: "tests",
        message: "Include tests for your application and provide examples on how to run them",
        validate: (input) => {
            if (!input) {
                return "Please includes some tests and examples"
            }
            return true;
        }
    },
    {
        name: "github",
        message: "What is your GitHub username?",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid GitHub username"
            }
            return true;
        }
    },
    {
        name: "email",
        message: "What is your email? This will help developers reach you!",
        validate: (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(input)) {
                return "You have to provide a valid email address"
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("./test/README.md", answers);
    })
}

// Function call to initialize app
init();

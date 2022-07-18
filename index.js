// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        message: "What command should be run to install dependencies?",
        default: "(npm i)",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid installation steps"
            }
            return true;
        }
    },
    {
        name: "usage",
        message: "What does the user need to know about using the repo?",
        validate: (input) => {
            if (!input) {
                return "Please enter insturctions and examples for use"
            }
            return true;
        }
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project",
        choices: [
            "MIT",
            "GPL 3.0",
            "APACHE 2.0", 
            "BSD 3",
            "None"
        ]
    },
    {
        name: "contributing",
        message: "What does the user need to know about contibuting to the repo?",
        validate: (input) => {
            if (!input) {
                return "Please enter some guidelines for contributing"
            }
            return true;
        }
    },
    {
        name: "tests",
        message: "What command should be run to run tests?",
        default: "(npm test)",
        validate: (input) => {
            if (!input) {
                return "Please include the command to run tests"
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
        console.log("Generating README...");
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

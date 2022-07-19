// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        // Prompts user for title
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
        // Prompts user for description
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
        // Prompts user for installation information
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid installation steps"
            }
            return true;
        }
    },
    {
        // Prompts user for usage information
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
        // Prompts user to select a license for their project
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
        // Prompts user for information on contributions
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
        // Prompts user for how to run tests
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test",
        validate: (input) => {
            if (!input) {
                return "Please include the command to run tests"
            }
            return true;
        }
    },
    {
        // Prompts for user's github
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
        // Prompts for user email
        name: "email",
        message: "What is your email? This will help developers reach you!",
        // Validate user's email
        validate: (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(input)) {
                return "You have to provide a valid email address"
            }
            return true;
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) console.log(err);
        // Message to log after user completes questionnaire and while file is developing
        console.log("Generating README...");
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        // Pass user's answers and file path to generate README
        writeToFile("./test/README.md", answers);
    })
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        message: "Describe what your project is about"
    },
    {
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project",
        choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense", "Eclipse Public License 2.0", "Creative Commons Zero v1.0 Universal", "BSD 2-Clause \"Simpllified\" License", "BSD 3-Clause \"New\" or \"Revised\" License"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

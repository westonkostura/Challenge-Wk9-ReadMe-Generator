// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "what is the Project title?",
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: "project description",
        name: 'description'
    },
    {
        type: 'input',
        message: "project installation",
        name: 'installation'
    },
    {
        type: 'input',
        message: "project usage",
        name: 'usage'
    },
    {
        type: 'input',
        message: "project contributions",
        name: 'contributions'
    },
    {
        type: 'input',
        message: "deployed application URL",
        name: 'deployed'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('logged')
    )
}

// TODO: Create a function to initialize app
async function init() {
    
}

// Function call to initialize app
init();

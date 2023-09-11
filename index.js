// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        type: 'list',
        message: "Which license did you use?",
        name: 'license',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
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
    fs.appendFile(`./${fileName}README.md`, data, (err) =>
    err ? console.log(err) : console.log('README generated')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
            var fileContent = generateMarkdown(answer);
            writeToFile(answer.projectTitle, fileContent);
        })
}


// Function call to initialize app
init()

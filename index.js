// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const asciiName = require("ascii-name");

// TODO: Create an array of questions for user input
const title = "Welcome to the README Generator";
const asciiArt = asciiName.getName(title)
const questions = [
  {
    type: "input",
    message: "what is the Project title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "project description",
    name: "description",
  },
  {
    type: "input",
    message: "project installation",
    name: "installation",
  },
  {
    type: "input",
    message: "project usage",
    name: "usage",
  },
  {
    type: "list",
    message: "Which license did you use?",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "project contributions",
    name: "contributions",
  },
  {
    type: "input",
    message: "deployed application URL",
    name: "deployed",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`./${fileName}README.md`, data, (err) =>
    err ? console.log(err) : console.log("README generated")
  );
}

// TODO: Create a function to initialize app
function init() {
    console.log("                                        _                    _        ");
    console.log("                            __ __ _____| |__ ___ _ __  ___  | |_ ___  ");
    console.log("                            \\ V  V / -_) / _/ _ \\ '  \\/ -_) |  _/ _ \\     ");
    console.log("                             \\_/\\_/\\___|_\\__\\___/_|_|_\\___|  \\__\\___/ ");

    console.log("  _____  ______          _____  __  __ ______    _____                           _         ");
    console.log(" |  __ \\|  ____|   /\\   |  __ \\|  \\/  |  ____|  / ____|                         | |            ");
    console.log(" | |__) | |__     /  \\  | |  | | \\  / | |__    | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ __ ");
    console.log(" |  _  /|  __|   / /\\ \\ | |  | | |\\/| |  __|   | | |_ |/ _ \\ '_ \\ / _ \\ '__/ _` | __/ _ \\| '__|    ");
    console.log(" | | \\ \\| |____ / ____ \\| |__| | |  | | |____  | |__| |  __/ | | |  __/ | | (_| | || (_) | |       ");
    console.log(" |_|  \\_\\______/_/    \\_\\_____/|_|  |_|______|  \\_____|\\___|_| |_|\\___|_|  \\__,_|\\__\\___/|_|   ");

    console.log("           +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+");
    console.log("           |A|n|s|w|e|r| |q|u|e|s|t|i|o|n|s| |t|o| |g|e|t| |R|E|A|D|M|E| |f|i|l|e|");
    console.log("          +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+");


  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(answer.projectTitle, fileContent);
  });
}

// Function call to initialize app
init();

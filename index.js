// Included packages needed for this application
// Import the 'prompts' library & Utilities
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown"); 

// An array of questions for user input
const questions = [
    {
        type: 'text',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'text',
        name: 'description',
        message: 'Enter a description of your project:',
      },
      {
        type: 'text',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'text',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT License", "GPL 3.0", "Apache License 2.0", "Boost Software License 1.0", "None"],
      },
      {
        type: 'text',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'text',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'text',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'text',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// A function to write README file
function writeToFile(fileName, data) {
    // sets the file path to the Dist folder and the file name passed in.
    const filePath = `${fileName}`;
    // writes the file to the file path and data passed in.
    fs.writeFile(filePath, data, (err) => {
    // throws an error if there is an error if the file is not written.
    if (err) {
        throw err;
    }
    console.log(`The ${fileName} file has been successfully created!`);
    });
}

// A function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        // sets the github link to a template string that includes the github username from the answers.
        const githubLink = `https://github.com/${answers.GithubUsername}`;
        // sets the data to the generateMarkdown function with the answers object.
        const data = generateMarkdown(answers, githubLink);
        // write data to the README.md file.
        writeToFile("README.md", data);
      });
}

// Function call to initialize app
init();

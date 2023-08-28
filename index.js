// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your instructions for installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage for the project:',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Select your license used for the project:',
        // choices: [MIT..] ***FINISH THIS***
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter any contributions for the project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests completed for the project:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username for the project:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email used for the project:',
    },
    // Add more prompts for other sections...
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = `
# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- Add installation instructions here -->
${data.installation}

## Usage
<!-- Add usage information here -->
${data.usage}

## License
<!-- Add license badge and explanation here -->
${data.license}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
<!-- Add contribution guidelines here -->
${data.contributions}

## Tests
<!-- Add test instructions here -->
${data.tests}

## Questions
GitHub: [Your GitHub Profile](https://github.com/${data.username})
Email: ${data.email}
  `;

    // Write the content to README.md file
    fs.writeFileSync(fileName, readmeContent, (err) => {
        if (err) throw err;
        console.log(`${fileName} created successfully.`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();

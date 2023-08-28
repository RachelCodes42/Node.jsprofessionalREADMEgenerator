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

## License
<!-- Add license badge and explanation here -->

## Contributing
<!-- Add contribution guidelines here -->

## Tests
<!-- Add test instructions here -->

## Questions
GitHub: [Your GitHub Profile](https://github.com/yourusername)
Email: your.email@example.com
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

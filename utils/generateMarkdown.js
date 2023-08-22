// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Your logic to return the license badge
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Your logic to return the license link
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Your logic to return the license section
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

## Usage
<!-- Add usage information here -->

## License
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contributing
<!-- Add contribution guidelines here -->

## Tests
<!-- Add test instructions here -->

## Questions
GitHub: [Your GitHub Profile](https://github.com/yourusername)
Email: your.email@example.com
  `;
}

module.exports = generateMarkdown;


// Access information for each license
const licensesList = require('./licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      console.log("licenses.licenseBadge: ", licenses.licenseBadge)
      return licenses.licenseBadge;
    }
  })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      return licenses.licenseLink;
    }
  })
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      return licenses.licenseSection;
    }
  })
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the user's answers
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;

  return `# ${title}

[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})

## Description
${description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## License
${renderLicenseSection(license)}

## Contributing
${contributing}

## Tests
To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.
You can find more of my work at [${github}](https://www.github.com/${github})
`;
}

module.exports = generateMarkdown;

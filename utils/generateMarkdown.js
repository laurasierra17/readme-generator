// Access information for each license
const licensesList = require('./licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      badge = licenses.licenseBadge;
    }
  })
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      link = licenses.licenseLink;
    }
  })
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section;
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      section = licenses.licenseSection;
    }
  })
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the user's answers
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const section = renderLicenseSection(license);

  return `# ${title}

[![License: ${license}](${badge})](${link})

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

${license && 
  `## License
  ${section}`
}

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

// Access information for each license
const licensesList = require('./licenses.js');

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge;
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      badge = licenses.licenseBadge;
    }
  })
  return badge;
}

// Function that returns the license link
function renderLicenseLink(license) {
  let link;
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
      link = licenses.licenseLink;
    }
  })
  return link;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  // Return an empty string if the license is "None"
  if (license === "None") {
    return "";
  } else {
    let section = "## License \n";
    licensesList.forEach(licenses => {
      if (licenses.license === license) {
        section += licenses.licenseSection;
      }
    })
    return section;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the user's answers
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;
  // Returns the badge associated with the selected license
  const badge = renderLicenseBadge(license);
  // Returns the link associated with the selected license
  const link = renderLicenseLink(license);
  // Returns the Licensing section associated with the selected license
  const section = renderLicenseSection(license);

  // Render the license badge
  renderBadge = () => {
    if (license === "None") {
      return "";
    } else {
      return `[![License: ${license}](${badge})](${link})`
    }
  }

  // Render the License link in the table of content
  renderLicenseTOC = () => {
    if (license === "None") {
      return "";
    } else {
      return `* [License](#license)`
    }
  }

  // README markdown
  return `# ${title}

${renderBadge()}

## Description
${description}

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC()}
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

${section}

## Contributing
${contributing}

## Tests
To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.
You can find more of my work at [${github}](https://www.github.com/${github}).
`;
}

module.exports = generateMarkdown;

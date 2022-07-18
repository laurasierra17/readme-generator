// Access information for each license
const licensesList = require('./licenses.js');
console.log(licenses);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licensesList.forEach(licenses => {
    if (licenses.license === license) {
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

`;
}

module.exports = generateMarkdown;

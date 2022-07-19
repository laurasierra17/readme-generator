// An array of licenses and its associated information
// This is what is used to match the user's selection with the information
// to be displayed on the README markdown
const licenses = [
    {
        license: "None",
        licenseBadge: "",
        licenseLink: "",
        licenseSection: ""
    },
    {
        license: "MIT",
        licenseBadge: "https://img.shields.io/badge/License-MIT-yellow.svg",
        licenseLink: "https://opensource.org/licenses/MIT",
        licenseSection: "This project is licensed under the MIT license."
    },
    {
        license: "APACHE 2.0",
        licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
        licenseSection: "This project is licensed under the APACHE 2.0 license."
    },
    {
        license: "GPL 3.0",
        licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
        licenseSection: "This project is licensed under the GPL 3.0 license."
    },
    {
        license: "BSD 3",
        licenseBadge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        licenseLink: "https://opensource.org/licenses/BSD-3-Clause",
        licenseSection: "This project is licensed under the BSD 3 license."
    },
];

module.exports = licenses;
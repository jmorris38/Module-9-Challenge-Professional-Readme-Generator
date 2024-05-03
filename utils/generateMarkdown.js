// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // If statement that passes in the License and returns the appropriate badge else returns an empty string
  if (license === "MIT License") {
    return `![Static Badge](https://img.shields.io/badge/MIT-License-blue)`;
  } else if (license === "Apache License 2.0") {
    return `![Static Badge](https://img.shields.io/badge/Apache_License_2.0-License-green)`;
  } else if (license === "GPL 3.0") {
    return `![Static Badge](https://img.shields.io/badge/GNU_GPLv3-License-red)`;
  } else if (license === "Boost Software License 1.0") {
    return `![Static Badge](https://img.shields.io/badge/Boost_Software_License_1.0-License-yellow)`;
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "GPL 3.0") {
    return `[GPL 3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license === "Boost Software License 1.0") {
    return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else {
    return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "N/A";
  } else {
    return `This project is licensed under the ${renderLicenseLink(
      license
    )} license.`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
 // This is a const variable for the github link that sets the variable to a template string which includes the github username from the data object
 const githubLink = `https://github.com/${data.githubUsername}`;
 // This is a return statement that returns a template string with the data object passed in.
 // The template string includes the title, license badge, description, table of contents, installation, usage, license badge, license section, contributing, tests, github link, email, and questions.
 return `
 # ${data.title}

 ${renderLicenseBadge(data.license)}

 ## Description

 ${data.description}

 ## Installation

 ${data.installation}

 ## Usage

 ${data.usage}

 ## License

 ${renderLicenseBadge(data.license)}

 ${renderLicenseSection(data.license)}

 ## Contributing

 ${data.contributing}

 ## Tests

 ${data.tests}

 ## Queries

 GitHub: ${githubLink}

 Email: ${data.email}`

}

module.exports = generateMarkdown;

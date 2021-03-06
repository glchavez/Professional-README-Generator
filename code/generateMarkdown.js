// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge = ""

  switch (license) {
    case 'MIT':
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'Apache 2.0':
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case 'GPL 3.0':
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case 'BSD 3':
      licenseBadge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      break;
      case 'None':
       return licenseBadge = "";
  }

  return licenseBadge;
};  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink = ""

  switch (license) {
    case 'MIT':
      licenseLink = "[license](https://opensource.org/licenses/MIT)";
      break;
    case 'Apache 2.0':
      licenseLink = "[license](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GPL 3.0':
      licenseLink = "[license](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'BSD 3':
      licenseLink = "[license](https://opensource.org/licenses/BSD-3-Clause)";
      break;
      case 'None':
       return licenseLink = "";
  }

  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseSection = ""

  switch (license) {
    case 'MIT':
      licenseSection = "This project is licensed under the MIT " + renderLicenseLink(license) + ".";
      break;
    case 'Apache 2.0':
      licenseSection = "This project is licensed under the Apache 2.0 " + renderLicenseLink(license) + ".";
      break;
    case 'GPL 3.0':
      licenseSection = "This project is licensed under the GPL 3.0 " + renderLicenseLink(license) + ".";
      break;
    case 'BSD 3':
      licenseSection = "This project is licensed under the BSD 3 " + renderLicenseLink(license) + ".";
      break;
      case 'None':
       return licenseSection = "";
  }

  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  <ol>
   <li>[Description](#description)</li>
    <li>[Installation](#installation)</li>
    <li>[Usage](#usage)</li>
    <li>[Tests](#tests)</li>
    <li>[Contributing](#contributing)</li>
    <li>[Questions](#questions)</li>
    <li>[License](#license)</li>
  </ol>


  ## Description
  ${data.description}


  ## installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Tests
  ${data.tests}


  ## Contributing
  ${data.contributing}


  ## Questions
  To review the code for this application, visit my GitHub page at github.com/${data.username}. For any additional questions, feel free to email me at ${data.email}.


  ## License
  ${renderLicenseSection(data.license)}`
}

module.exports = generateMarkdown;

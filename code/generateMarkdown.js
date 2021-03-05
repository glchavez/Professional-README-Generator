// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  <ol>
   <li>[Description](#description)</li>
    <li>[Installation](#installation)</li>
    <li>[Usage](#usage)</li>
    <li>[Tests](#tests)</li>
    <li>[Contributing](#contributing)</li>
    <li>[Questions](#questions)</li>
    <li>[License](#license)</li>
  <ol>


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
  ${data.license}`;
}

module.exports = generateMarkdown;

const licenseList = require('./licenseList.js')
// Below is a function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  }
  const selectedLicense = licenseList.filter(licenseList => licenseList.name == license)
  return selectedLicense[0].badge;
};

// Below is a function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  }
  const selectedLicense = licenseList.filter(licenseList => licenseList.name == license)
  return selectedLicense[0].link;
}

// Below is a function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  }
}

// Below is a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  -[Installation Instruction](#installation)
  -[Usage Information](#usage)
  -[Contribution Guidelines](#contributions)
  -[Test Instructions](#test)
  -[License](#license)
  -[Questions?](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributions
  ${answers.contributions}

  ## Test
  ${answers.test}

  ## License
  ${answers.license}

  ${renderLicenseLink(answers.license)}

  ## Questions
  ${answers.username}
  
  https://github.com/${answers.username}

  Additional questions? Contact Me:

  ${answers.email}

`;
}

module.exports = generateMarkdown;

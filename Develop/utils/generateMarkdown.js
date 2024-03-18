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
  ## Description
  ${data.description}

  ## Table of contents:
  Description
  *[Installation](#installation)
  *[Usage Information](#usage)
  *[Contribution Guidelines](#contributions)
  *[Test Instructions](#test)
  *[License](#license)
  *[Questions](#username)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributions}

  ## Test Instructions
  ${data.test}

  ## License
  ${data.license}

  ## Questions?
  ${data.username}
  Contact Me:
  ${data.email}

`;
}

module.exports = generateMarkdown;

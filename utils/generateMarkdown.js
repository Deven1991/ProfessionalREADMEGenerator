// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseIcon = "";
var licenseURL = "";
function renderLicenseBadge(license) {
  if (license === "MIT") {
    licenseIcon = `![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)`;
  }
  else if (license === "Apache") {
    licenseIcon = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  else if (license === "IBM") {
    licenseIcon = `![License: IBM](https://img.shields.io/badge/License-IBM-ff69b4.svg)`;
  }
  else {
    licenseIcon = " ";
  }
  return licenseIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    licenseURL = `This project is covered by the license of: [MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "Apache") {
    licenseURL = `This project is covered by the license of: [Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "IBM") {
    licenseURL = `This project is covered by the license of: [IBM](https://opensource.org/licenses/IPL-1.0)`;
  } 
  else {
    licenseURL= " ";
  }
  return licenseURL;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "No license was used."
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  renderLicenseBadge(response.license);
  renderLicenseLink(response.license);

  return ` # ${response.name} </br>

## Description 
${licenseIcon} </br>
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [ScreenShot](#screenshot)
- [Collaboraters](#collaboraters)
- [License](#license)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## Features 
${response.features}
## Demo Video
[Demo Video](${response.demo ? response.demo : "N/A"})
## Screenshot
<img src="${response.imageURL}" alt="screenshot of application"/> </br>
${response.confirmimageURL2}
## Collaboraters
${response.collaboraters ? response.collaboraters : "N/A"}
## License 
${licenseURL}
## Tests
${response.test ? response.test : "N/A"}
## Contributing 
${response.contribute ? response.contribute : "N/A"}
## Questions
If you have any questions or would like to discuss this application further, please reach out to me via email at [${response.email}](mailto:${response.email}) or visit my github profile at [${response.userName}](http://www.github.com/${response.userName}).
### Created by ${response.createdBy}
`};

module.exports = generateMarkdown;
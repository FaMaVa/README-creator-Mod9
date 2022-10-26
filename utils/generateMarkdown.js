// A function that returns a license badge based on which license is passed in
let badge;

function renderLicenseBadge(license) {
  if (license === "MIT") {
    badge = `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
    return badge;
  } else if (license === "APACHE 2.0") {
    badge = `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    return badge;
  } else if (license === "GPL 3.0") {
    badge = `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    return badge;
  } else if (license === "BSD 3") {
    badge = `(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    return badge;
  } else {
    badge = ``;
    return badge;
  };
};

// A function that returns the license link
let link;

function renderLicenseLink(license) {
  if (license === "MIT") {
    link = `(https://opensource.org/licenses/MIT)`;
    return link;
  } else if (license === "APACHE 2.0") {
    link = `(https://opensource.org/licenses/Apache-2.0)`;
    return link;
  } else if (license === "GPL 3.0") {
    link = `(https://www.gnu.org/licenses/gpl-3.0)`;
    return link;
  } else if (license === "BSD 3") {
    link = `(https://opensource.org/licenses/BSD-3-Clause)`;
    return link;
  } else {
    link = ``;
    return link;
  }; 
};

// A function that returns the license section of README
let licenseSection;

function renderLicenseSection(license) {
  if (license === "MIT" || license === "APACHE 2.0" || license === "GPL 3.0" || license === "BSD 3") {
    licenseSection = `[![License]${badge}]${link}`
    return licenseSection;
  } else {
    licenseSection = ``;
    return licenseSection;
  };
};

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${licenseSection} 
  
  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To Install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
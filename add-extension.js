#!/usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getName = () => {
  return new Promise(resolve => {
    rl.question('Please enter the name: ', name => resolve(name))
  })
}

const getDescription = () => {
  return new Promise(resolve => {
    rl.question('Please enter the extension description: ', desc => resolve(desc))
  })
}

const getBasicUrl = () => {
  return new Promise(resolve => {
    rl.question('Please enter a general URL for the extension (e.g. GitHub repo): ',
      url => resolve(url)
    )
  })
}

const getChromeUrl = () => {
  return new Promise(resolve => {
    rl.question('Please provide the download link for Chrome (empty if not applicable): ',
      url => resolve(url)
    )
  })
}

const getFirefoxUrl = () => {
  return new Promise(resolve => {
    rl.question('Please provide the download link for Firefox (empty if not applicable): ',
      url => resolve(url)
    )
  })
}

const getScreenshotUrl = () => {
  return new Promise(resolve => {
    rl.question('Please provide a link to an image of the extension. (empty if not applicable): ',
      url => resolve(url)
    )
  })
}

const run = async () => {  
  const name = await getName();
  const desc = await getDescription();
  const basicUrl = await getBasicUrl();
  const chromeUrl = await getChromeUrl();
  const firefoxUrl = await getFirefoxUrl();
  const screenshotUrl = await getScreenshotUrl();

  const chromeLink = chromeUrl ? ` <a href="${chromeUrl}"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" width="24" /></a>` : '';
  const firefoxLink = firefoxUrl ? ` <a href="${firefoxUrl}"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" width="24" /></a>` : '';
  const screenshotTab = `
  ${screenshotUrl ? `
  <details><summary>Screenshots</summary>

  ![${name}](${screenshotUrl})
  </details>
  ` : ``
  }
  `

const output = `
### [${name}](${basicUrl})${chromeLink}${firefoxLink}

${desc}

${screenshotTab}
`;

  process.stdout.write(output);
  rl.close()
}

run()



// const askQuestions = () => {
//   const questions = [
//     {
//       name: "extension-name",
//       type: "input",
//       message: "What is the name of the browser extension"
//     },
//     {
//       name: "extension-description",
//       type: "input",
//       message: "Please provide the download link for Firefox (empty if not applicable)",
//     },
//     {
//       name: "basic-url",
//       type: "input",
//       message: "Please enter a link to a general page about the extension, e.g. GitHub repo",
//     },
//     {
//       name: "chrome-url",
//       type: "input",
//       message: "Please provide the download link for Chrome (empty if not applicable)",
//     },
//     {
//       name: "firefox-url",
//       type: "input",
//       message: "Please provide the download link for Firefox (empty if not applicable)",
//     },
//   ];
//   return inquirer.prompt(questions);
// }
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      name: "device",
      type: "list",
      message: `selec device`,
      choices: [
        { name: "pc", value: "pc" },
        { name: "mobile", value: "mobile" },
      ],
    },
  ])
  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

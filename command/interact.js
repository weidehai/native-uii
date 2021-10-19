const inquirer = require("inquirer");

function selectDevice() {
  return inquirer.prompt([
    {
      name: "device",
      type: "list",
      message: `select device`,
      choices: [
        { name: "pc", value: "pc" },
        { name: "mobile", value: "mobile" },
      ],
    },
  ]);
}

function inputModuleName() {
  return inquirer.prompt([
    {
      name: "moduleName",
      type: "input",
      message: `input module name`,
      validate: function (input) {
        const done = this.async();
        if (typeof input !== "string" || input.length === 0) {
          done("You need to provide a valid string");
          return;
        }
        done(null, true);
      },
    },
  ]);
}

module.exports = {
  selectDevice,
  inputModuleName,
};

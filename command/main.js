const interact = require("./interact");
const { addExport, addModuleFile } = require("./add");

interact
  .selectDevice()
  .then(async (anwsers) => {
    let moduleName = await interact.inputModuleName();
    addExport(`./${anwsers.device}/${moduleName.moduleName}/${moduleName.moduleName}`);
    addModuleFile(anwsers.device, moduleName.moduleName);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

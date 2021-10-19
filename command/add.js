const { appendFile, writeFile,isDirectoryExists } = require("woneFs");
const path = require("path");
const filePath = require("./filePath");

async function addExport(from) {
  appendFile(filePath.index, `\nexport * from '${from}'`);
}

async function addModuleFile(device, module) {
  writeFile(path.join(filePath[device], `./${module}/${module}.js`), "");
}

module.exports = {
  addExport,
  addModuleFile
};

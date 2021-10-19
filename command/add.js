const { appendFile, writeFile, isDirectoryExists } = require("woneFs");
const fsPromises = require("fs/promises");
const when = require("./utils/utils");
const path = require("path");
const filePath = require("./filePath");

async function addExport(from) {
  appendFile(filePath.index, `\nexport * from '${from}'`);
}

async function addModuleFile(device, module) {
  const directory = path.join(filePath[device], `./${module}`);
  if (!isDirectoryExists(directory)) {
    await fsPromises.mkdir(directory);
  }
  writeFile(path.join(directory, `./${module}.js`), "");
}

module.exports = {
  addExport,
  addModuleFile,
};

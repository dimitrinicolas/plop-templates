const path = require('path');
const walkFilesSync = require('./walk-files-sync.js');

const TEAMPLATES_DIRNAME = 'templates';

const generateActions = (moduleName, dirName) => {
  const actions = [];
  actions.push({
    type: 'getRelatedModulesDescriptions',
    speed: 'slow'
  });
  const dir = path.resolve(__dirname, '../', TEAMPLATES_DIRNAME, moduleName);
  const files = walkFilesSync(dir).map(filePath =>
    path.relative(dir, filePath)
  );
  for (const file of files) {
    actions.push({
      type: 'add',
      path: `${dirName}/${file}`,
      templateFile: path.resolve(
        __dirname,
        '../',
        `${TEAMPLATES_DIRNAME}/${moduleName}/${file}`
      )
    });
  }
  return actions;
};

module.exports = generateActions;

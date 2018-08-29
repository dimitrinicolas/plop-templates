const generateActions = require('./src/generate-actions.js');
const getRelatedModulesDescriptions = require('./src/get-related-modules-descriptions.js');

module.exports = plop => {
  plop.setPartial('YYYY', String(new Date().getFullYear()));
  plop.setPartial('MM', String(('0' + (new Date().getMonth() + 1)).slice(-2)));
  plop.setPartial('DD', String(('0' + new Date().getDate()).slice(-2)));

  plop.setPartial('relatedList', '');
  plop.setPartial('relatedLinks', '');

  plop.setActionType(
    'getRelatedModulesDescriptions',
    getRelatedModulesDescriptions(plop)
  );

  plop.setGenerator('node-module', {
    description:
      'Create a simple node package, with Ava, Travis, ESLint, and Coveralls integration',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module segment name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your module description?'
      },
      {
        type: 'input',
        name: 'related',
        message: 'List related npm packages (space separated)'
      }
    ],
    actions: generateActions('node-module', '{{dashCase name}}')
  });
};

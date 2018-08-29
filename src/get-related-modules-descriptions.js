const npmAPI = require('api-npm');

const getRelatedList = input =>
  input.split(' ').map(item => item.trim().replace(/ /g, ''));

const getRelatedModulesDescriptions = plop => {
  return answers => {
    return new Promise(resolve => {
      const dataList = [];
      const packageList = getRelatedList(answers.related);

      const total = packageList.length;
      let i = 0;
      const next = () => {
        i++;
        if (i === total) {
          if (dataList.length) {
            plop.setPartial(
              'relatedList',
              '\n## Related\n\n' +
                dataList
                  .map(
                    item =>
                      `- [${item.name}][${item.name}] - ${item.description}`
                  )
                  .join('\n') +
                '\n\n'
            );
            plop.setPartial(
              'relatedLinks',
              '\n' +
                dataList
                  .map(
                    item =>
                      `[${item.name}]: https://www.npmjs.com/package/${
                        item.name
                      }`
                  )
                  .join('\n') +
                '\n'
            );
          }
          resolve();
        }
      };

      for (const package of packageList) {
        npmAPI.getdetails(package, data => {
          if (
            !data.error &&
            typeof data.name === 'string' &&
            typeof data.description === 'string'
          ) {
            dataList.push({
              name: data.name,
              description: data.description
            });
          }
          next();
        });
      }
    });
  };
};

module.exports = getRelatedModulesDescriptions;

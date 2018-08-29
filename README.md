# plop-templates

My personnal root projects plop templates.

## Installation

```console
$ npm install -g plop
$ npm install @dimitrinicolas/plop-templates
```

## Usage

Create a plopfile.js file in your projects root directory.

```js
// plopfile.js
module.exports = require('@dimitrinicolas/plop-templates');
```

Then launch plop CLI using the `plop` command.

## Templates

### node-module

Create a simple node package, with Ava, Travis, ESLint, and Coveralls integration

#### Prompts

- `name` - Node module segment name
- `description` - Node module description
- `related` - Space separated related NPM packages

#### Structure

```
{{dashCase name}}/
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .travis.yml
├── CHANGELOG.md
├── index.js
├── LICENSE
├── package.json
├── README.md
└── test.js
```

## Related

- [plop][plop] - Consistency Made Simple
- [front-end-stack][front-end-stack] - Personal front-end development stack, built on PostCSS, Webpack, Babel, ESLint and Browsersync

## License

This project is licensed under the [MIT license](LICENSE).

[plop]: https://github.com/amwmedia/plop
[front-end-stack]: https://github.com/dimitrinicolas/front-end-stack

# eslint-config

This package includes the common eslint config used by front end projects.

## Usage

Install the package

```sh
yarn add --dev @mladen-se/eslint-config
```

Create a `.eslintrc` with following content in the root folder of your project.

```js
{
  "extends": "@mladen-se/eslint-config"
}
```

For eslint to work correctly some settings needs to be configured.

_You need to specify what globals should be available_

```json
{
  "env": {
    // es6 features, e.g promises
    "es6": true,
    // Node features, e.g process.env.NODE_ENV
    "node": true,
    // jest feature, e.g describe, test and it
    "jest": true,
    // allow commonjs module system, e.g require()
    "commonjs": true,
    // allow browser api, e.g window
    "browser": true
  }
}
```

_If you use react, then you need to specify what react version to use_

```json
{
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

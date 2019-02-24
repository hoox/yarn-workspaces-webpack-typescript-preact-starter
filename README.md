# A Yarn Workspaces + Webpack + TypeScript + Preact Starter Kit 🔰

This is a simple starter kit for those who want to use **TypeScript** with **Yarn Workspaces** and **Webpack**.

The starter kit is also also configured to use **Preact**.

## Pre-requisites

- Node.js 10.15.0
- Yarn 1.13.0

## Environment variables

- `NODE_ENV` eg. `production`
- `PORT` eg. `8080`

## Scripts

For development:

- `cd ./packages/package-app`
- `yarn start`

For production:

- `cd ./packages/package-app`
- `yarn build`

## TypeScript loaders

There are a number of TypeScript loaders available for Webpack, such as [ts-loader](https://github.com/TypeStrong/ts-loader), and [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader).

However, Babel now supports TypeScript through **@babel/preset-typescript**, so you can simply use [babel-loader](https://github.com/babel/babel-loader) with [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript.html) and you're good to go!

Compilation speeds are also faster due to only using **babel-loader**.

[Dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import) are also supported out of the box using [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import).

## What's in the box

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)
- [Preact](https://preactjs.com/)

### JavaScript

- [babel-loader](https://github.com/babel/babel-loader)
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
- [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)

### CSS

- [style-loader](https://github.com/webpack-contrib/style-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [poscess-preset-env](https://github.com/csstools/postcss-preset-env)
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

### HTML

- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

## References

- [TypeScript and Babel 7](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)

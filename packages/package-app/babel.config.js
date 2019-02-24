module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/typescript', { isTSX: true, allExtensions: true, jsxPragma: 'h' }],
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
  ],
};

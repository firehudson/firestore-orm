/* eslint-disable no-console */
const defaultAwesomeFunction = require('../lib').default;
const { awesomeFunction } = require('../lib');

const defaultVal = defaultAwesomeFunction('Aditya');
const val = awesomeFunction();

// defaultVal === 'I am the Default Awesome Function, fellow comrade! - Aditya'
console.log(defaultVal);
// val === 'I am just an Awesome Function'
console.log(val);

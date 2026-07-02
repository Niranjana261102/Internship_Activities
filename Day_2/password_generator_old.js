#!/usr/bin/env node
// Run: node password-generator.js [length] [--no-symbols] [--no-numbers] [--no-uppercase]

var crypto = require('crypto');

var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var NUMBERS = '0123456789';
var SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function parseArgs(argv) {
  var args = argv.slice(2);
  var length = 16;
  var useUppercase = true;
  var useNumbers = true;
  var useSymbols = true;
  var i;

  for (i = 0; i < args.length; i++) {
    if (/^\d+$/.test(args[i])) {
      length = parseInt(args[i], 10);
    }
    if (args[i] === '--no-uppercase') {
      useUppercase = false;
    }
    if (args[i] === '--no-numbers') {
      useNumbers = false;
    }
    if (args[i] === '--no-symbols') {
      useSymbols = false;
    }
  }

  return {
    length: length,
    useUppercase: useUppercase,
    useNumbers: useNumbers,
    useSymbols: useSymbols
  };
}

function generatePassword(options) {
  var charset = LOWER;
  var bytes;
  var password = '';
  var i;

  if (options.useUppercase) {
    charset += UPPER;
  }
  if (options.useNumbers) {
    charset += NUMBERS;
  }
  if (options.useSymbols) {
    charset += SYMBOLS;
  }

  bytes = crypto.randomBytes(options.length);
  for (i = 0; i < options.length; i++) {
    password += charset[bytes[i] % charset.length];
  }
  return password;
}

var options = parseArgs(process.argv);

if (options.length < 4) {
  console.error('Password length must be at least 4.');
  process.exit(1);
}

console.log(generatePassword(options));

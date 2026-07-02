#!/usr/bin/env node
// Run: node password-generator.js [length] [--no-symbols] [--no-numbers] [--no-uppercase]

const crypto = require('crypto');
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';


const parseArgs = (argv) => {
  const args = argv.slice(2);
  let length = 16;
  let useUppercase = true;
  let useNumbers = true;
  let useSymbols = true;

  for (let i = 0; i < args.length; i++) {
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
    length,
    useUppercase,
    useNumbers,
    useSymbols
  };
}

const generatePassword = (options) => {
  let charset = LOWER;
  let bytes;
  let password = '';
  let i;

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
  for (let i = 0; i < options.length; i++) {
    password += charset[bytes[i] % charset.length];
    }
  return password;
}

const options = parseArgs(process.argv);

if (options.length < 4) {
  console.error('Password length must be at least 4.');
  process.exit(1);
}

console.log(generatePassword(options));

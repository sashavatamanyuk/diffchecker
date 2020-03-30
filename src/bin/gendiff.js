#!/usr/bin/env node

import commander from 'commander';

commander
    .version('1.0.0')
    .arguments('<firstConfig> <secondConfig>')
    .option('-f, --format [type]', 'output format')
    .description('Compares two configuration files and shows a difference.')
    .parse(process.argv);

if (!commander.args.length) commander.help();
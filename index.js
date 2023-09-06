import { argv } from 'node:process';
import chalk from 'chalk';
import randomHexColor from 'random-hex-color';

const hashFrame = ` ###############################
 ###############################
 ###############################
 #####                     #####
 #####       ${randomHexColor()}       #####
 #####                     #####
 ###############################
 ###############################
 ###############################`;

// console.log(chalk.hex(randomHexColor())(hashFrame));
console.log(argv);

if (argv[2] === 'red' || argv[2] === 'green' || argv[2] === 'blue') {
  console.log(chalk.red(hashFrame));
} else {
  console.log(chalk.hex(randomHexColor())(hashFrame));
}

import { argv } from 'node:process'; // helps get input user in CLI
import chalk from 'chalk'; // prints color with hex format
import Color from 'color'; // prints color with hsl format
import randomHexColor from 'random-hex-color'; // generates randomcolor in hex format

const hashFrame = ` ###############################
 ###############################
 ###############################
 #####                     #####
 #####       ${randomHexColor()}       #####
 #####                     #####
 ###############################
 ###############################
 ###############################`;

const hueStringUser = argv[2];
const luminosityStringUser = argv[3];

const hueStringUserToRGBFormat = Color(hueStringUser);

console.log(argv);
console.log(hueStringUserToRGBFormat.hsl().color[2]); // converts color to hsl format and access lightness
console.log(hueStringUser);
console.log(hueStringUserToRGBFormat);
console.log(luminosityStringUser);

// to be done
if (argv[2] === 'red' || argv[2] === 'green' || argv[2] === 'blue') {
  console.log(chalk.blue(hashFrame));
} else {
  console.log(chalk.hex(randomHexColor())(hashFrame));
}

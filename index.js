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

console.log(1, argv);
console.log(2, hueStringUserToRGBFormat.hsl().color[2]); // converts color to hsl format and access lightness
console.log(3, hueStringUser);
console.log(4, hueStringUserToRGBFormat);
console.log(5, luminosityStringUser);
console.log(6, Color('red'));

// to be done

if (argv.length < 3) {
  console.log(chalk.hex(randomHexColor())(hashFrame));
} else if (argv.length === 3) {
  console.log(chalk.red(hashFrame));
} else {
  console.log(chalk.blue(hashFrame));
}

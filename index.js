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

function convertLuminosityStringUser(userValue) {
  if (userValue === 'dark') {
    return 25;
  } else if (userValue === 'light') {
    return 75;
  } else {
    return 'the value of luminosity does not correspond. Either type dark or light';
  }
}

if (argv.length < 3) {
  console.log(chalk.hex(randomHexColor())(hashFrame));
} else if (argv.length === 3) {
  console.log(8, chalk.hex(Color(hueStringUser).hex())(hashFrame));
} else {
  // assign the value of the user luminosity into a variable
  const luminosityChosenByTheUser =
    convertLuminosityStringUser(luminosityStringUser);
  // tur RGB into hsl
  const result = Color(hueStringUserToRGBFormat).hsl();

  // change luminosity in the the hsl to fit user's choice
  result.color[2] = luminosityChosenByTheUser;

  // here changes the the hsl to hex
  console.log(14, chalk.hex(Color(result).hex())(hashFrame));
}

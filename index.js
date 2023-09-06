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
    return 0.75;
  } else if (userValue === 'light') {
    return 0.25;
  } else {
    return 'the value of luminosity does not correspond. Either type dark or light';
  }
}

console.log(1, argv);
console.log(2, hueStringUserToRGBFormat.hsl().color[2]); // converts color to hsl format and access lightness
console.log(3, hueStringUser);
console.log(4, hueStringUserToRGBFormat);
console.log(5, luminosityStringUser);
console.log(6, Color('red'));
console.log(7, Color('red').hex());
// to be done

if (argv.length < 3) {
  console.log(chalk.hex(randomHexColor())(hashFrame));
} else if (argv.length === 3) {
  console.log(8, chalk.hex(Color(hueStringUser).hex())(hashFrame));
} else {
  const luminosityChosenByTheUser =
    convertLuminosityStringUser(luminosityStringUser);
  console.log(9, luminosityChosenByTheUser);
  const hexColor = Color(hueStringUser).lighten(luminosityChosenByTheUser);
  console.log(10, chalk.hex(hexColor.color)(hashFrame));
  console.log(11, hexColor.color);

  /* console.log(
    10,
    (Color(hueStringUser).hsl().color[3] = luminosityChosenByTheUser),
  );*/
}

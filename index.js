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

console.log(chalk.hex(randomHexColor())(hashFrame));

import chalk from 'chalk';
import randomHexColor from 'random-hex-color';

const hashFrame = ` ###############################
 ###############################
 ###############################
 #####                     #####
 #####       #edff28       #####
 #####                     #####
 ###############################
 ###############################
 ###############################`;

console.log(chalk.hex(randomHexColor())(hashFrame));

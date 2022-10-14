#! /usr/bin/env node

import { exit } from 'process';
import { helpMessage } from './help';
import generateComponent from './generateComponent';

//const args = process.argv.slice(2); // command line arguments start at position 2
let inputPath = process.argv[2];
let flags: string[] = process.argv.slice(3).filter(flag => /^[-][a-zA-Z]$/.test(flag));


// Running
//-------------
(async () => {
    //if the help flag is called print help and exit
    if (flags.includes('-h') || /^[-][hH]$/.test(process.argv[2])) {
        console.log(helpMessage);
        process.exit(0);
    };
    
    if (inputPath) {
        await generateComponent(
            inputPath,
            flags.includes('-t'),
            flags.includes('-f'),
            flags.includes('-s')
        );
        exit(0);
    } else {
        console.log('\n' + helpMessage + '\n');
        exit(0);
    }
})();

import {mkdir, stat, writeFile} from 'fs/promises';
import { exit } from 'process';
import { dotVueComponent, flatComponentTempalte } from './templates';
import { isNameValid, isPathValid } from './validityChecks';

const generateComponent = async (path: string, isTypeScript: boolean, isFlat: boolean, isSass: boolean) => {
    if (!isPathValid(path)) { console.log(">_ERROR: Invalid path"); exit(-1); };

    //check if the component already exists (if not fs.stat throw an error and trigger the catch branch)
    try {
        await stat(`./${path}`);
        console.log("\nABORTED: A component with the same name already exists\n");
        exit(-2);
    }
    catch { //if the component not exists yet
        try {
            const splittedPath = path.split('/');
            const name = splittedPath[splittedPath.length - 1];
            if (!isNameValid(name)) { console.log(">_ERROR: Invalid name"); exit(-1); };
            if (isFlat) {
                await writeFile(`./${name}.vue`, flatComponentTempalte(), {flag: 'wx'});
                console.log(`Created ${name} component'`);
                return;
            }
            //Component Directory
            await mkdir(`./${path}`, {recursive: true});
            console.log(`Created directory (${path})`);
            //Component Files
            const stylesheet = `${name}.${isSass ? "scss" : "css"}`
            await writeFile(`./${path}/${name}.vue`, dotVueComponent(isTypeScript, stylesheet));
            await writeFile(`./${path}/${stylesheet}`, "");
            console.log(`Created ${name} component'`);
        }
        catch (err) {
            if ((err as {errno: number, code: string}).code === 'EEXIST')
                console.log('\nABORTED: A file with the same name already exists\n');
            else console.log(err);
            exit(-2);
        }
    }
};

export default generateComponent;

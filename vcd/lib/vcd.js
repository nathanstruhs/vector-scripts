const util = require('util');
const exec = util.promisify(require('child_process').exec);

exports.run = async function() {
    const arg = process.argv[2];
    console.log(arg)

    const vectorDirs = await execute('cd ~/vector && ls');
};

async function execute(command, print = true) {
    const { stdout, stderr } = await exec(command);

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    if (print) { console.log(stdout) };
    return stdout;
}


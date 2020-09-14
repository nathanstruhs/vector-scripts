const util = require('util');
const exec = util.promisify(require('child_process').exec);
const _ = require('lodash');
const config = require('../config');

exports.run = async function() {
    const currentDir = await execute('pwd', false);

    const mapping = _.find(config.mappings, ['targetPath', currentDir.trim()]);

    if (!mapping) {
        console.error(incorectDirectoryMessage);
        return;
    }

    await execute(`cd ${mapping.dependencyPath} && npm link`);
    await execute(
        `cd ${mapping.targetPath} && npm link ${mapping.dependencyPath}`
    );
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

const incorectDirectoryMessage = `Are you in the correct directory?

Your current location is not configured to execute this command.
Try adding a new mapping to config.`

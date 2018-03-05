const minimist = require('minimist');
const path = require('path');
const configExtend = require('config-extend');


function argvConfig(defaultConfig) {
	let argv = minimist(process.argv);
	let config = configExtend({}, defaultConfig);
	let configFile = argv.c || argv.config;

	if (configFile) {
		let file = path.resolve(configFile);
		console.log('file: ', file);
		try {
			config =  configExtend(config, require(file));
		}
		catch(err) {
			throw new Error('Could not load configuration file ' + file + ': ' + err.message);
		}
	}

	return config;
}


module.exports = argvConfig;

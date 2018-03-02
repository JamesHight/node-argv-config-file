const minimist = require('minimist');
const path = require('path');
const configExtend = require('config-extend');


function argvConfig(defaultConfig) {
	let argv = minimist(process.argv);
	let config = configExtend({}, defaultConfig);

	if (argv.c) {
		let file = path.resolve(argv.c);
		let configFile;

		try {
			configFile = require(file);
		}
		catch(e) {
			throw new Error('Could not load configuration file at location: ' + file);
		}

		config = configExtend(config, configFile);
	}

	return config;
}


module.exports = argvConfig;

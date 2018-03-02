Argv Config File
----------------

Pass a JavaScript configuration file on the command line to a Node.js application. The module [config-extend](https://www.npmjs.com/package/config-extend) is used to merge with the default configuration.

````javascript
// app.js
const argvConfigFile = require('argv-config-file');

let config = argvConfigFile({
	// Default config
	// Extended by object exported by file passed on the command line
	foo: ['bar'],
	biz: 'baz'
});
````

````javascript
// my-config.js
module.exports = {
	// Custom config
	foo: ['array', 'override']
}
````


````bash
node app.js -c /some/directory/my-config.js
````

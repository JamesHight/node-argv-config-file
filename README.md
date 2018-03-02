Argv Config File
----------------

Pass a JavaScript configuration file on the command line to a Node.js application. Configuration merging is done using [config-extend](https://www.npmjs.com/package/config-extend).

````bash
npm install --save argv-config-file
````


````javascript
// app.js
const argvConfigFile = require('');

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

Argv Config File
================

Pass a js or json configuration file on the command line to a Node.js application. Configuration merging is done using [config-extend](https://www.npmjs.com/package/config-extend).

### Install

````bash
npm install --save argv-config-file
````


Usage
-------

### app.js

````javascript
const argvConfigFile = require('argv-config-file');

let config = argvConfigFile({
	// Default config
	// Extended using the file passed on the command line
	foo: ['bar'],
	biz: 'baz'
});
````


### my-config.js

````javascript
module.exports = {
	// Custom config
	foo: ['array', 'override']
}
````


### my-config.json

````json
{
	"foo": ["array", "override"]
}
````

### Run

````bash
node app.js -c /some/directory/my-config.js
node app.js --config=/some/directory/my-config.json
````


### Config Value

````javascript
{
	foo: ['array', 'override'],
	biz: 'baz'
}
````

Argv Config File
================

Pass a JavaScript configuration file on the command line to a Node.js application. Configuration merging is done using [config-extend](https://www.npmjs.com/package/config-extend).

### Install

````bash
npm install --save argv-config-file
````


Usage
-------

### app.js

````javascript
const argvConfigFile = require('');

let config = argvConfigFile({
	// Default config
	// Extended by object exported by file passed on the command line
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


### Run

````bash
node app.js -c /some/directory/my-config.js
````


### Config Value

````
{
	foo: ['array', 'override'],
	biz: 'baz'
}
````

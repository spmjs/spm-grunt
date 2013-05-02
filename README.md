# spm-grunt

> A bridge between spm and grunt.

-----

It extends grunt.

## invokeTask(name, options)

```js
var grunt = require('spm-grunt');
grunt.invokeTask('build', {
    fallback: function(grunt) {
        console.log('fallback')
    }
});
```

It will search the gruntfiles and detect if the task name in the gruntfile. If the task is in the gruntfile, it will run the task, if not, it will call the fallback function.


## loadGlobalTasks(name)

Load tasks in the global `NODE_PATH`. Just like loadNpmTasks, it can load task collections.


## Changelog

**May 2, 2013** `0.1.4`

Fallback if the gruntfile has errors.

**April 23, 2013** `0.1.3`

Show warn and error message.

**April 15, 2013** `0.1.2`

Fix on pathLog.


**April 12, 2013** `0.1.1`

Patch log right.

**April 11, 2013** `0.1.0`

First version.

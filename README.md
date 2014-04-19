# Angular Mongo Example
This is a revamping of the code examples from the [phloxblog.in][phloxblog]
blog post "[Single Page Application with Angular.js, Node.js and MongoDB (MongoJS Module)][blog-post]"
by [Piyas De][piyas-de].

This post is not meant to replace that post.  It is only intended to complement
it by showing updated code examples.

The examples have been updated to use [Express 4.x][express], use a more RESTful
API, pass [JSHint][jshint] (via [grunt][grunt]), install angular via
[Bower][bower] and work as a [npm package][npm-package].  This repository also
includes a configuration file for [EditorConfig][editorconfig].  You should
check it out if you are not familiar with it.

This uses a [MongoLab][mongolab] database.  If this post leads to that database
getting used for things other than this exmaple, it will be deleted without
notice.


## How to setup and run
```bash
$ npm install
$ npm start
```

To see the application in action go to <http://localhost:8080/> in your browser.

To see the API in action go to <http://localhost:8080/api/user> in your browser
or go the following with `curl`.

```base
$ curl http://localhost:8080/api/user
```


## How to run JSHint against all the files
```bash
$ grunt test
```


## Directory Structure
There is an enormous amount of reading[[1][yeoman-generator-angular-issues-109]]
[[2][best-practices-angular-structure]] for all of the opinions on how the
AngularJS application directory should be structured.

```
|-- angular-mongo/                 <---- Root directory
|   |-- .bowerrc                   <---- Configuration file for Bower
|   |-- .editorconfig              <---- Configuration file for EditorConfig
|   |
|   |-- .git/                      <---- Configuration directory for Git
|   |   |-- ...
|   |
|   |-- .gitignore                 <---- Ignore file for Git
|   |-- .jsdoc-conf.json           <---- Configuration file for JSDoc
|   |-- .jshintrc                  <---- Configuration file for JSHint
|   |-- Gruntfile.js               <---- Configuration file for grunt
|   |-- README.md                  <---- Documentation
|   |
|   |-- app/                       <---- The AngularJS application directory
|   |   |-- app-controller.js      <---- Controller
|   |   |-- index.html             <---- HTML View
|   |
|   |-- bower.json                 <---- Configuration file for Bower
|   |-- node_modules/              <---- `npm install` dependencies directory
|   |   |-- ...
|   |
|   |-- package.json               <---- Configuration file for npm
|   |
|   |-- public/                    <---- Static files generated from `bower install`
|   |   |-- ...
|   |
|   |-- server.js                  <---- THe ExpressJS server
|   |-- set-env.conf               <---- Configuration file for the runtime environment
```         


## References

- [Single Page Application with Angular.js, Node.js and MongoDB (MongoJS Module)][blog-post] - 
  The original blog post that inspired this body of work.

- [Google JavaScript Style Guide][javascriptguide]

- [An AngularJS Style Guide for Closure Users at Google][angularjs-google-style]

- [Best Practice Recommendations for Angular App Structore][best-practices-angular-structure]

- [Proposals to Make Components More Reusable #109][yeoman-generator-angular-issues-109]




[angularjs-google-style]: https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html
[best-practices-angular-structure]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
[blog-post]: http://www.phloxblog.in/single-page-application-angular-js-node-js-mongodb-mongojs-module
[bower]: http://bower.io
[editorconfig]: http://editorconfig.org
[express]: http://expressjs.com/4x/api.html
[grunt]: http://gruntjs.com
[javascriptguide]: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[jsdoc]: http://usejsdoc.org
[jshint]: http://jshint.com
[mongolab]: https://mongolab.com
[npm-package]: https://www.npmjs.org/doc/files/package.json.html
[piyas-de]: http://www.phloxblog.in/author/admin
[phloxblog]: http://www.phloxblog.in
[yeoman-generator-angular-issues-109]: https://github.com/yeoman/generator-angular/issues/109
/* jshint camelcase: false */
'use strict';


var db = require('mongojs').connect('mongodb://test-user:test@ds053858.mongolab.com:53858/test-database', [ 'test-collection' ]),
    app,
    port = process.env.PORT || process.env.npm_package_config_port,
    debug = require('debug')('angular-mongo'),
    logger = require('morgan'),
    express = require('express'),
    bodyParser = require('body-parser');


app = express();


/* middleware */
app.use(logger());
app.use(bodyParser());
app.use(express['static'](__dirname + '/public'));


/* application routes */
app.get('/', function (request, response) {
    response.sendfile('app/index.html');
});


app.get('/app/:file', function (request, response) {
    response.sendfile('app/' + request.params['file']);
})


/* api routes */
app.get('/api/user', function (request, response) {
    var responseModel = [];

    db['test-collection'].find('', function (error, users) {
        if (error) {
            console.error('Error: %j', error);
            response.send(500, error);
        } else {
            debug('users: %j', users);
            users.forEach(function (user) {
                responseModel.push({ name: user.username });
            });

            debug('responseModel: %j', responseModel);
            response.send(200, responseModel);
        }
    });
});


app.post('/api/user', function (request, response) {
    var data = request.body;

    db['test-collection'].save(
        {
            email: data.email,
            password: data.password,
            username: data.username
        },
        function (error, saved) {
            if (error || !saved) {
                response.end('user not saved');
            } else {
                response.end('user saved');
            }
        }
    );
});


/* start server */
console.log('starting express server on port %s', port);
app.listen(port);
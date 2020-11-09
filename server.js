var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
app.use(express.static('resources'));
global.__basedir = __dirname;
 
require('./app/routes/customer.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port) 
})

// -------------- )()()()()()()()()()()


// require('dotenv').config()
// const path = require('path')
// const routes = require('./app/routes/customer.route')

// const lti = require('ltijs').Provider
// global.__basedir = __dirname;


// // Setup
// lti.setup(process.env.LTI_KEY,
//   {
//     url: 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?authSource=admin',
//     connection: { user: process.env.DB_USER, pass: process.env.DB_PASS }
//   }, {
//     staticPath: path.join(__dirname, './public'), // Path to static files
//     cookies: {
//       secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
//       sameSite: '' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
//     },
//     devMode: true // Set DevMode to true if the testing platform is in a different domain and https is not being used
//   })

// // Whitelisting the main app route and /nolti to create a landing page
// lti.whitelist(lti.appRoute(), { route: new RegExp(/^\/nolti$/), method: 'get' }) // Example Regex usage

// // When receiving successful LTI launch redirects to app, otherwise redirects to landing page
// lti.onConnect(async (token, req, res) => {
//   if (token) return res.sendFile(path.join(__dirname, '/views/index.html'))
//   else lti.redirect(res, '/nolti') // Redirects to landing page
// })

// // When receiving deep linking request redirects to deep link React screen
// lti.onDeepLinking(async (token, req, res) => {
//   return lti.redirect(res, '/deeplink', { newResource: true })
// })

// // Setting up routes
// lti.app.use(routes)

// // Setup function
// const setup = async () => {
//   await lti.deploy({ port: process.env.PORT })

//   /**
//    * Register platform
//    */
//   await lti.registerPlatform({
//     url: 'http://localhost/moodle',
//     name: 'Platform',
//     clientId: 'KgWBlCE7ebbNy65',
//     authenticationEndpoint: 'http://localhost/moodle/mod/lti/auth.php',
//     accesstokenEndpoint: 'http://localhost/moodle/mod/lti/token.php',
//     authConfig: { method: 'JWK_SET', key: 'http://localhost/moodle/mod/lti/certs.php' }
//   }) 
// }

// setup()

//importing our controller file with require() & assign controllers exported logic to a variable
const PersonController = require('../controllers/person.controller');

//export an anonymous arrow function that requres an "app" in its parameter 
//the parameters value (argument) will be assigned in our server.js, which will be the server object itself
//get() an HTTP verb requests the route to look at Controller file, find the value that goes with the "index" key and execute that value 
//on controller the .index value is a function that responds to the client request with a response object containing a "message" key and value of "Hello World".
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
}
//create people by sending a post request to 'localhost:8000/api/people'.
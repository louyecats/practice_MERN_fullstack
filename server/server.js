const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json()); /* allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true })); /*allows JSON Objects with strings and arrays*/

require('./config/mongoose.config');
/* import our mongoose config file so it will fire up the MongoDB server connection androutes file so we can handle a post request */

require('./routes/person.routes')(app);   // We're linking routes to server.js by importing the routes export
// These two lines are the long-hand notation of the code above. They better show what's going on.
    // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
    // personRoutes(app);     <-- invoke the function and pass in the express "app" server
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
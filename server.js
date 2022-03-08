/***********************************************************************************
 *  Purpose         : The main entry point of backend server
 *  @file           : server.js
 *  @author         : Shweta Kasbe
 *  @version        : 1.0
 *  @since          : 05-12-2021
 ***********************************************************************************/

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

let cors = require('cors');

// create express app
const app = express();
app.use(cors());

// Image upload using multer



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config/database_config');
const mongoose = require('mongoose');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url).then(() => {
        console.log('Database successfully connected!')
    },
    error => {
        console.log('Could not connect to database : ' + error)
    }
)
app.use('/', router); //matches request to the root route


// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
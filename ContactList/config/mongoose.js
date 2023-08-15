//require the database
const mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection
const db = mongoose.connection;

//check for error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print
db.once('open',function(){
    console.log('connected successfully to the db');
})
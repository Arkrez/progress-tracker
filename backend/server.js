
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//This lets us load our env config files
require('dotenv').config();

//This is how we create our express server
const app = express();
const port = process.env.PORT || 5000;


//Middleware allows us to parse JSON
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Hi! MongoDB database connection established successfully")
})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

//Starts the server by listening on specified port
app.listen(port, () => {
    console.log(`Hi! Server is running on port: ${port} ${userRouter} ${exerciseRouter}`)
}); 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const usersRoutes = require('./routes/auth');

//Configuring the application
dotenv.config();
const app = express();

//Connecting to the database
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true},
    (error) => {
            if(error) {
                console.error(`An error has occurred: ${error}`);
            } else {
                console.log(`Database connection: ${getDatabaseState()}`);
            }
        }
    );

//Middleware
app.use(express.json());
app.use('/api/users', usersRoutes);

//Listening to teh app server
app.listen(
    process.env.PORT,
    () => console.log(`Server running on port: ${process.env.PORT}`)
);

function getDatabaseState() {
    switch (mongoose.connection.readyState) {
        case 0: return "disconnected";
        case 1: return "connected";
        case 2: return "connecting...";
        case 3: return "disconnecting";
    }
}



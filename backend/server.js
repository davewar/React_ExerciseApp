const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


app.use(bodyparser.json())
app.use(cors());


// connect to db
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true} ,()=>{
        console.log("connected");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Server running");
});

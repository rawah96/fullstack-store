// dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// start app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// accessing json data in app
app.use(express.json());

// DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connection successful')
});

// routing 
const usersRouter = require('./routes/users');
app.use('/users/', usersRouter);

// production
if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

// run server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
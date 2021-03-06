const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

// Import Routes
const postRoute = require('./routes/posts');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/posts', postRoute)


// Routes
app.get('/', (req, res) => {
    res.send("This app is up and running ");
})
app.get('/posts', (req, res) => {
    res.send("posts");
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true,useNewUrlParser: true}, () => {
    console.log('connected to DB! ')
})

// Listening
const PORT = 3000 || process.env.PORT;
app.listen(3000, () => { console.log(`Server running on port : ` , PORT)});
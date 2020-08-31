const express = require('express');
const app = express();


// Routes
app.get('/', (req, res) => {
    res.send("This app is up and running ");
})
app.get('/posts', (req, res) => {
    res.send("posts");
})

// Listening
const PORT = 3000 || process.env.PORT;
app.listen(3000, () => { console.log(`Server running on port : ` , PORT)});
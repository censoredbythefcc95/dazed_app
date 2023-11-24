const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello - this is testing the backend server for the Dazed and Confused App.');
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});
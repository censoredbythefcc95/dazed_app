const express = require('express');
const app = express();
const quotes = require('./quotes');

app.get('/', (req, res) => {
    res.send('Hello - this is testing the backend server for the Dazed and Confused App.');
});

app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

app.get('/api/quotes/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === quoteId);

    if (!quote) {
        res.status(404).json({ error: "Quote not found."});
    } else {
        res.json(quote);
    }
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});
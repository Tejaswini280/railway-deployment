const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

/* ---------- FRONTEND ---------- */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* ---------- PORTFOLIO API ---------- */
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });

    res.json({
        success: true,
        message: 'Thank you for your message!'
    });
});

/* ---------- REQUIRED FOR TESTS ---------- */
app.post('/add', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res
            .status(400)
            .json({ error: 'Both a and b should be numbers' });
    }

    res.status(200).json({ result: a + b });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res
            .status(400)
            .json({ error: 'Both a and b should be numbers' });
    }

    res.status(200).json({ result: a - b });
});

/* ---------- SERVER ---------- */
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;

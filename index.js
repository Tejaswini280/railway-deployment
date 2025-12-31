const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.json({ success: true, message: 'Thank you for your message!' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} else {
    module.exports = app;
}

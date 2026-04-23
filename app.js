require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Routes
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

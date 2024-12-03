require('dotenv').config();
const express = require('express');

const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 || process.env.PORT;

connectDB();


app.use(express.json());

app.get('', (req, res) => {
        res.send("Welcome to the API.");
      });

app.use('/posts', require('./server/routes/main'));
app.use('/users', require('./server/routes/admin'));

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

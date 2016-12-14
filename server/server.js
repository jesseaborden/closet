const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8000;
const sequelize = require('./database').sequelize;

const app = express();

app.listen(PORT, () => console.log("Server running on port", PORT));
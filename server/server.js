require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());


const loginRoute = require('./routes/login.js')
app.use('/api/login',loginRoute)

const changelogRoute = require('./routes/changelog.js')
app.use('/api/changelog',changelogRoute)

const PORT  = 5000;
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const cors = require('./midlewares/cors');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

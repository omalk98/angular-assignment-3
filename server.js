const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/asn3-omar-hussein')));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/asn3-omar-hussein/'}),
);

app.listen(process.env.PORT || 8080);
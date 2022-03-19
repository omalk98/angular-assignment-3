const express = require('express');
const app = express();

app.use(express.static('./dist/asn3-omar_hussein'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/asn3-omar_hussein/'}),
);

app.listen(process.env.PORT || 8080);
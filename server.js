const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./dist/ui-service'));

app.get('/*', (req, res) => 
    res.sendFile('index.html', {root: 'dist/ui-service'}),
);

app.listen(process.env.PORT || 8080);
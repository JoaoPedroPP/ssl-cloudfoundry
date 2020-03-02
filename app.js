const express = require('express');

const app = express()

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('<h3>Working</h3>')
});

app.listen(app.get('port'), '0.0.0.0', () => console.log(`Server and running on: ${app.get('port')}`));
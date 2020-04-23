const express = require('express');
const logger = require('morgan');
const tracker = require('./libs/tracker');

const app = express();
const port = 3000;

app.use(logger('dev'));

app.get('/track/indiapost/:id', async (req, res) => {
    const data = await tracker.indiapost(req.params.id);
    res.json(data);
});

app.listen(port, () => console.log('\x1b[34m%s\x1b[0m', `🚀 API Running on port ${port}`));


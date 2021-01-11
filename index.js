const express = require('express');
const logger = require('morgan');
const tracker = require('./libs/tracker');

const app = express();
const port = 3000;

app.use(logger('dev'));

app.get('/track/:courier/:id', async (req, res) => {
    try {
        if (req.params.courier == 'tpcindia') {
            const data = await tracker.tpcindia(req.params.id);
            res.json(data);
        }
    } catch (error) {
        res.json(error);
    }
});

app.listen(port, () => console.log('\x1b[34m%s\x1b[0m', `🚀 API Running on port ${port}`));


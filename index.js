/* Module */
const express = require('express');
const cors = require('cors');

/* ============ */
const PORT = process.env.PORT || 3000;

/*---*/
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

/** Web Path */
app.get('/', require('./routers/web/komikindo'), (req, res) => {
    res.render('pages/index');
});

app.use('/', require('./routers/web/komikindo'));

/* API Path */
app.get('/api', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to Komikato API'
    });
});
// app.use('/api/account', require('./routers/account'));

app.use('/api/komikindo/download', require('./routers/api/komikindo/download'));
app.use('/api/komikindo', require('./routers/api/komikindo/general'));
app.use('/api/komikindo/chapter', require('./routers/api/komikindo/chapter'));

app.use('*', async (req, res) => {
    res.status(404).send(
      '<h1>404 NOT FOUND</h1> <img src="https://i.makeagif.com/media/5-04-2015/CUdjWj.gif" /> <br /><br /> <a href="/id">Kembali</a>'
    );
});

/* Listener */
app.listen(PORT, async () => {
    console.log('Listening on PORT ' + PORT);
});

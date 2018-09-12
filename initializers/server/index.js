const express = require('express');

const app = express();

const manifest = require('../../public/assets/manifest.json');

<<<<<<< HEAD
const webpackAsset = (bandle) => manifest.bundle.js;
=======
const webpackAsset = (bundle) => manifest[bundle];
>>>>>>> f4b562973ca1aeabeb85a16f6a4bc004ceeae617

app.use(express.static('public'));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render('index', { webpackAsset });
});

app.listen(3001, () => console.log('server listen 3001'));
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Para producción usar la constante del puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
    // Configuracion de Hbs 
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    /*  //res.send('Hola mundo!');
     let salida = {
         nombre: 'Memo',
         edad: 26,
         url: req.url
     }; */
    //res.send(salida);
    res.render('home', {
        nombre: 'guiLLermo oceGUeda'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
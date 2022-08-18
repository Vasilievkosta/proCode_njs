const express = require('express');
const app = express();
const cars = require('./public/data.js');
const PORT = 3000;
const page404 = "<div style='background-color: #2ca5cd; width: 100%; height: 100%;'><h2 style='font-size: 6em; color: white; text-align: center; padding-top: 25vh;'>No Page Found</h2></div>";

app.use(express.static('./public'));

const obj = {
		title: 'Shop car',
		phone: '+380501234567',
		social: ['Linkedin', 'Gmail', 'Telegram', 'gitHub'],		
	};

app.set('view engine', 'ejs');

app.get('/data', (req, res) => {	
	res.json(cars);
});

app.get('/', (req, res) => {
	res.send('<h1>Главная страница<h1><br/><a href="/shop">На магазин )</a>');
});

app.get('/about', (req, res) => {
	res.send('About us');
});

app.get('/car/:id', (req, res) => {
	const {id} = req.params;
	const point = cars[+id - 1];
	res.render('pages/car', point);
});

app.use('/shop', (req, res) => {	
	res.render('pages/shop', obj);
});

app.use((req, res) => {
	res.status(404).send(page404);
});

app.listen(PORT, (err) => {
	if (err) {
		console.log('error ', err);
	}
	console.log(`Server OK, Port - ${PORT}`);
});
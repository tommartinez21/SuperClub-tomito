const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'))

app.get('/product/:id', (req, res) => res.render('product'))

app.get('/carat', (req, res) => res.render('cart'))

app.get('/checkout', (req, res) => res.render('checkout'))

app.get('/register', (req, res) => res.render('register'))

app.get('/login', (req, res) => res.render('login'))

app.listen(3000, () => console.log('toy ready'))
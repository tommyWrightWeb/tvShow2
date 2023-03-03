const express = require('express')

const fs = require('fs')

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())

app.get('/', function (req, res) {
   res.render('tvSearch.ejs');
})


app.listen(8000);

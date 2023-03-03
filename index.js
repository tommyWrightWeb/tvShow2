const express = require('express')

const fs = require('fs')

const app = express();



app.use(express.static('public'))
app.use(express.json())

app.get('/', function (req, res) {
   res.render('tvSearch');
})


app.listen(8000);

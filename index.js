let express = require('express')
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);
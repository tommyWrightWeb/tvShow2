let express = require('express')
var app = express();
// Render static files
app.use(express.static('public'));

app.get("/tvSearch", function (req, res) {
   res.render("/tvSearch.html");
})
// Port website will run on
app.listen(8080);

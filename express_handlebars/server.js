var express = require('express');
var hbs  = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("listening : " + PORT);
  })

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var animes = [
    { anime : 'Naruto', type: 'action', episodes: 220 },
    { anime : 'One Piece', type: 'action', episodes: 826},
    { anime : 'Death Note', type: 'mystery', episodes: 37},
    { anime : 'Bleach', type: 'action', episodes: 366},
    { anime : 'Full Metal Alchemist : Brotherhood', type: 'action', episodes: 64}
]

app.get('/anime', function(req, res) {
    // renders the info and loops
    res.render('anime', {anime: animes})
})

app.get('/favorite', function(req, res) {
    res.render('favorite', {anime: animes[3].anime})
})

app.get('/favorite/:anime', function(req, res) {
    for (var i = 0; i < animes.length; i++) {
        if (animes[i].anime === req.params.anime) {
            return res.render('favorite', animes[i])
        }
    }
})

 
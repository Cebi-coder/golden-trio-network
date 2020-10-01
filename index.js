<<<<<<< HEAD
var plumbers = [
    { business: plumbing, name: Avela, surname: Bhinqa },
    { business: plumbing, name: Jacob, surname: Lubisi },
    { business: plumbing, name: Isriel, surname: Sontonga },
    { business: plumbing, name: Menzi, surname: Johnson },
    { business: plumbing, name: Xolani, surname: Thimla },
];

var nails = [
    { business: NailTech, name: Zinzi, surname: Nxele },
    { business: NailTech, name: Bongiwe, surname: Zweni },
    { business: NailTech, name: Bulelwa, surname: Mkhize },
    { business: NailTech, name: Candice, surname: Mayers },
    { business: NailTech, name: Julia, surname: Bidoli },
    { business: NailTech, name: Hazel, surname: Peter },
    { business: NailTech, name: Zenande, surname: Moya },
];

var movers = [

    { business: mover, name: Senzo, surname: Sithole },
    { business: mover, name: Mzwamadoda, surname: Sikhweyiya },
    { business: mover, name: Mzwamadoda, surname: Sikhweyiya },
    { business: mover, name: Mandla, surname: Sithole },

];
=======
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
let app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {
    })
    })

    let PORT = process.env.PORT || 3030;

app.listen(PORT, function(){

  console.log('App starting on port', PORT);
});
>>>>>>> cc40525f58c2c194747434537bcc1cac2a98f4fa

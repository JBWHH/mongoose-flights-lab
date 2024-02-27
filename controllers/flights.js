const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create,
}


async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights
    });
}


async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Flight.find({ flight: flight._id});
    res.render('flights/show', { title: 'Flight Detail', flight, tickets});
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''} );
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const flight = await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message});
    }
}




//async function create(req, res) {
//    const flight = new Flight();
//    flight.save(function (err) {
//        if (err) {
//            console.log(err)
//            return res.render('flights/new');
//            res.redirect('/flights');    
//        }
//    })
//}
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create, 
    new: newTicket,
}

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        req.body.flight = flight._id;
        await Ticket.create(req.body);
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

function newTicket(req, res) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id});
}

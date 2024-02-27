const express = require('express');
const router = express.Router();
const ticketsCtrl  = require('../controllers/tickets');

router.post('/:id/tickets', ticketsCtrl.create);
router.get('/:id/tickets/new', ticketsCtrl.new);


module.exports = router;
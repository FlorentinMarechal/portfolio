const {Router} = require('express');

const router = Router();

const boardgameController = require('./controller/boardgameController');

router.get('/hello', (_, response) => response.json(`Hello World !`))

router.get('/games', boardgameController.findAll);

router.get('/game/:id', boardgameController.findOne);


module.exports = router
const {json, response} = require('express');

const Boardgame = require('../models/boardgame');

const boardgameController = {
    findAll: async (_, response) => {
        try {
            const result = await Boardgame.findAll();
            response.json(result);
        } catch (error) {
            response.status(500).send(error.message);
        }
    },

    findOne: async (request, response) => {
        try {
            const {id} = request.params
            const result = await Boardgame.findOne(id);
            response.json(result);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

};

module.exports = boardgameController;
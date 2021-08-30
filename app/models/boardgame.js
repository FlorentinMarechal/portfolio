const db = require('../database');

class NoBoardgameError extends Error {
    constructor(id) {
        super(`No boardgame with id: ${id}`);
    }
};


class Boardgame {

    // pour tester la class d'une erreur sans avoir à l'importer dans le contrôleur, on stock cette class comme propriétée statique du modèle
    static NoBoardgameError = NoBoardgameError;

    constructor(obj={}) {
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM boardgame');
            return rows.map(row => new Boardgame(row));
        } catch (error) {
            if(error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM boardgame WHERE id= $1', [id]);
            if(rows[0]) {
                return new Boardgame(rows[0]);
            }
            throw new NoBoardgameError(id);
        } catch (error) {
            if(error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    async save() {
        try {
            if(this.id) {
                await db.query('SELECT update_boardgame($1, $2, $3, $4, $5, $6, $7)', [
                    this.name,
                    this.author, 
                    this.editor,
                    this.min_players,
                    this.max_players,
                    this.min_age,
                    this.id
                ]);
            } else {
                const {rows} = await db.query('SELECT new_boardgame($1, $2, $3, $4, $5, $6)', [
                    this.name,
                    this.author, 
                    this.editor,
                    this.min_players,
                    this.max_players,
                    this.min_age
                ]);
                this.id = this.rows[0].id;
                return this;
            }
            
        } catch (error) {
            if(error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }


};

module.exports = Boardgame;
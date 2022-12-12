const Apuesta = require("../models/apuestas.model");

module.exports.get_all = (req, res) => {
    /*Apuesta.find()*/
    Apuesta.find().collation({locale: "en"}).sort({nombre: 1})
        .then(apuesta => res.json(apuesta))
        .catch(err => res.status(400).json(err));
}

module.exports.create_apuesta = (req, res) => {
    Apuesta.create(req.body)
        .then(apuesta => res.json(apuesta))
        .catch(err => res.status(400).json(err));
}

module.exports.get_apuesta = (req, res) => {
    Apuesta.findOne({_id: req.params.id})
        .then(apuesta => res.json(apuesta))
        .catch(err => res.status(400).json(err));
}




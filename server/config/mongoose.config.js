const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_bet_soccer", {
    useNewUrlParser: true,  // use new url parser
    useUnifiedTopology: true // use unified topology
})
    .then(() => console.log("Conexión con DB"))
    .catch(err => console.log("No se pudo conectar con DB "+err));
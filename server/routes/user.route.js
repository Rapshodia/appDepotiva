
const UserController = require("../controllers/user.controllers");
const ApuestaController = require("../controllers/apuesta.controllers");



module.exports = app => {   

    app.post("/api/register", UserController.register);

    app.post("/api/login", UserController.login);

    app.get("/api/logout", UserController.logout);

    app.get("/api/apuesta", ApuestaController.get_all);

    app.post("/api/apuesta", ApuestaController.create_apuesta);
}
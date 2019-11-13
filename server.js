/**
 * Move to version 3 DONE
 * Remove TodoList DONE
 * Add other Modules
 */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import everything from express and assign it to the express variable
const express_1 = __importDefault(require("express"));
// import all the controllers. If you add a new controller, make sure to import it here as well.
const controllers_1 = require("./controllers");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_model_1 = require("./models/User.model");
const welcome_controller_1 = require("./controllers/welcome.controller");
const login_controller_1 = require("./controllers/login.controller");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'development',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: 'db.sqlite'
});
sequelize.addModels([User_model_1.User]);
// create a new express application instance
const app = express_1.default();
app.use(express_1.default.json());
// define the port the express app will listen on
var port = 3000;
if (process.env.PORT !== undefined) {
    port = parseInt(process.env.PORT);
}
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/welcome', welcome_controller_1.WelcomeController);
app.use('/login', login_controller_1.LoginController);
sequelize.sync().then(() => {
    // start serving the application on the given port
    app.listen(port, () => {
        // success callback, log something to console as soon as the application has started
        console.log(`Listening at http://localhost:${port}/`);
    });
});
//# sourceMappingURL=server.js.map
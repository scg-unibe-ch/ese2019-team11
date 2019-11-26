// import everything from express and assign it to the express variable
import express from 'express';

// import all the controllers. If you add a new controller, make sure to import it here as well.
import {Sequelize} from 'sequelize-typescript';
import {User} from './models/User.model';
import {LoginController} from './controllers/login.controller';
import {RegisterController} from './controllers/register.controller';
import {Service} from './models/service.model';

const sequelize =  new Sequelize({
  database: 'development',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: 'db.sqlite'
});
sequelize.addModels([User, Service]);

// create a new express application instance
const app: express.Application = express();
app.use(express.json());

// define the port the express app will listen on
let port = 3000;
if (process.env.PORT !== undefined) {
  // tslint:disable-next-line:radix
  port = parseInt(process.env.PORT);
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/login', LoginController);
app.use('/register', RegisterController);

sequelize.sync().then(() => {
// start serving the application on the given port
  app.listen(port, () => {
    // success callback, log something to console as soon as the application has started
    console.log(`Listening at http://localhost:${port}/`);
  });
});

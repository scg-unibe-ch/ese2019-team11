
import express from 'express';
import {Sequelize} from 'sequelize-typescript';
import {User} from './models/User.model';
import {Event} from './models/Event.model';
import {Service} from './models/Service.model';
import {Ort} from './models/Ort.model';
import {WelcomeController} from './controllers';
import {LoginController} from './controllers';
import {RegisterController} from './controllers/register.controller';
import {EventController} from './controllers/event.controller';
import {ServiceController} from './controllers/service.controller';
import {OrtController} from './controllers/ort.controller';

/**
 * backend runs on this file
 */

const sequelize =  new Sequelize({
  database: 'development',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: 'db.sqlite'
});
sequelize.addModels([User, Event, Service, Ort]);



// create a new express application instance
const app: express.Application = express();
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));

// define the port the express app will listen on
let port = 3000;
if (process.env.PORT !== undefined) {
  port = parseInt(process.env.PORT);
}


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/welcome', WelcomeController);
app.use('/login', LoginController);
app.use('/register', RegisterController);
app.use('/event', EventController);
app.use('/service', ServiceController);
app.use('/ort', OrtController);

sequelize.sync().then(() => {
// start serving the application on the given port
  app.listen(port,'0.0.0.0', () => {
    // success callback, log something to console as soon as the application has started
    console.log(`Listening at http://localhost:${port}/`);
  });
});

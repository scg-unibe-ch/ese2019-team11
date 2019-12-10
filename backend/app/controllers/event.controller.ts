import {Router, Request, Response} from 'express';
import {Event} from '../models/Event.model';
import {Sequelize} from 'sequelize-typescript';




const router: Router = Router();

/**
 * returns all events
 */
router.get('/all', async (req: Request, res: Response) => {
  const instances = await Event.findAll();
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
  res.statusCode = 300;
  res.send('null');
});

/**
 * gets all services by this user id
 */
router.get('/id/:id',async (req: Request, res: Response) => {
    const id = req.params.id;
    const instances = await Event.findAll({
      where:{
        userid: id
      }
    });
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
);

/**
 * deletes a location
 */
router.post('/delete/:id',async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const event = new Event();
    event.fromSimplification(req.body);
    if(event.userid !== id) {
      res.statusCode = 403;
      res.send('cannot delete this post');
      return;
    }
    await Event.destroy({
      where: {id: event.id}
    });
    const instances = await Event.findAll({
      where:{
        userid: id
      }
    });
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
);

/**
 * posts a new event
 */
router.post('/',async (req: Request, res: Response) => {
    const event = new Event();
    event.fromSimplification(req.body);
    await event.save();
    res.statusCode = 200;
    res.send(event.toSimplification());
  }
);

router.get('/search/:value', async (req: Request, res: Response) => {
  const value = req.params.value;
  const instances = await Event.findAll({
    where: Sequelize.or({
        title: {[Sequelize.Op.like]: '%' + value + '%'}},
      {description:{[Sequelize.Op.like]: '%' + value + '%'},
      },
      {wann:{[Sequelize.Op.like]: '%' + value + '%'},
      },
      {wo:{[Sequelize.Op.like]: '%' + value + '%'},
      },
      {need:{[Sequelize.Op.like]: '%' + value + '%'},
      },
      {email:{[Sequelize.Op.like]: '%' + value + '%'},
      }
    )
  });
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
    return;
  }
  res.statusCode = 300;
  res.send('null');
});

export const EventController: Router = router;

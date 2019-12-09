import {Router, Request, Response} from 'express';
import {Event} from '../models/Event.model';
import {Service} from "../models/service.model";
import {Sequelize} from "sequelize-typescript";



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
      }
    )
  });
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
  res.statusCode = 300;
  res.send('null');
});

export const EventController: Router = router;

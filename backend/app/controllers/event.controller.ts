import {Router, Request, Response} from 'express';
import {Event} from '../models/Event.model';


const router: Router = Router();

/**
 * returns all services
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
 * posts a new service
 */
router.post('/:title/:description/:wann/:wo/:userid',async (req: Request, res: Response) => {
    const title = req.params.title;
    const description = req.params.description;
    const userid = Number.parseInt(req.params.userid);
    const wann = req.params.wann;
    const wo = req.params.wo;

    const event = new Event();
    event.description = description;
    event.title = title;
    event.userid = userid;
    event.wann = wann;
    event.wo = wo;
    await event.save();

    res.statusCode = 200;
    res.send(event.toSimplification());
  }
);

export const EventController: Router = router;

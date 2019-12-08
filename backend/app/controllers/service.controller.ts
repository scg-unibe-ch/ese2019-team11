import {Router, Request, Response} from 'express';
import {Service} from '../models/Service.model';


const router: Router = Router();

/**
 * returns all services
 */
router.get('/all', async (req: Request, res: Response) => {
  const instances = await Service.findAll();
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
router.post('/:title/:description/:typ/:userid',async (req: Request, res: Response) => {
    const title = req.params.title;
    const description = req.params.description;
    const typ = req.params.typ;
    const userid = Number.parseInt(req.params.userid);
    const service = new Service();
    service.typ = typ;
    service.description = description;
    service.title = title;
    service.userid = userid;
    await service.save();
    res.statusCode = 200;
    res.send(service.toSimplification());
  }
);

export const ServiceController: Router = router;

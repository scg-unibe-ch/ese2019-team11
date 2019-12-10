import {Router, Request, Response} from 'express';
import {Service} from '../models/Service.model';
import {Sequelize} from 'sequelize-typescript';


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
 * gets all services by this user id
 */
router.get('/id/:id',async (req: Request, res: Response) => {
    const id = req.params.id;
    const instances = await Service.findAll({
      where:{
        userid: id
      }
    });
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
);

/**
 * deletes a service
 */
router.post('/delete/:id',async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
    const service = new Service();
    service.fromSimplification(req.body);
    if(service.userid !== id) {
      res.statusCode = 403;
      res.send('cannot delete this post');
      return;
    }
    await Service.destroy({
      where: {id: service.id}
    });
    const instances = await Service.findAll({
      where:{
        userid: id
      }
    });
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
);

/**
 * posts a new service
 */
router.post('/',async (req: Request, res: Response) => {
    const service = new Service();
    service.fromSimplification(req.body);
    await service.save();
    res.statusCode = 200;
    res.send(service.toSimplification());
  }
);

router.get('/search/:value', async (req: Request, res: Response) => {
  const value = req.params.value;
  let instances: Service[];
  if(value === '*') {
    instances = await Service.findAll();
  } else {
    instances = await Service.findAll({
      where: Sequelize.or({
          title: {[Sequelize.Op.like]: '%' + value + '%'}
        },
        {
          description: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          hourlywage: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          availability: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          email: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          typ: {[Sequelize.Op.like]: '%' + value + '%'},
        }
      )
    });
  }
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
  res.statusCode = 300;
  res.send('null');
});

export const ServiceController: Router = router;

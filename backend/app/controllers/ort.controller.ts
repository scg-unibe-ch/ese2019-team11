import {Router, Request, Response} from 'express';
import {Ort} from '../models/Ort.model';
import {Sequelize} from 'sequelize-typescript';


const router: Router = Router();

/**
 * returns all locations
 */
router.get('/all', async (req: Request, res: Response) => {
  const instances = await Ort.findAll();
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
  res.statusCode = 300;
  res.send('null');
});

/**
 * posts a new location
 */
router.post('/',async (req: Request, res: Response) => {
    const ort = new Ort();
    ort.fromSimplification(req.body);
    await ort.save();
    res.statusCode = 200;
    res.send(ort.toSimplification());
  }
);

/**
 * gets all locations which at least partially match 'value' in one of their parameters of type string
 */
router.get('/search/:value', async (req: Request, res: Response) => {
  const value = req.params.value;
  let instances: Ort[];
  if(value === '*') {
    instances = await Ort.findAll();
  } else {
    instances = await Ort.findAll({
      where: Sequelize.or({
          title: {[Sequelize.Op.like]: '%' + value + '%'}
        },
        {
          description: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          area: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          rent: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          availability: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          email: {[Sequelize.Op.like]: '%' + value + '%'},
        },
        {
          address: {[Sequelize.Op.like]: '%' + value + '%'},
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

/**
 * gets all services by this user id
 */
router.get('/id/:id',async (req: Request, res: Response) => {
    const id = req.params.id;
    const instances = await Ort.findAll({
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
    const ort = new Ort();
    ort.fromSimplification(req.body);
    if(ort.userid !== id) {
      res.statusCode = 403;
      res.send('cannot delete this post');
      return;
    }
    await Ort.destroy({
      where: {id: ort.id}
    });
    const instances = await Ort.findAll({
      where:{
        userid: id
      }
    });
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
);

export const OrtController: Router = router;

import {Router, Request, Response} from 'express';
import {Ort} from '../models/Ort.model';
import {Service} from "../models/service.model";
import {Sequelize} from "sequelize-typescript";


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

router.get('/search/:value', async (req: Request, res: Response) => {
  const value = req.params.value;
  const instances = await Ort.findAll({
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

export const OrtController: Router = router;

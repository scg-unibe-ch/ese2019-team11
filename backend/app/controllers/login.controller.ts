import {Router, Request, Response} from 'express';
import {User} from '../models/User.model';


const router: Router = Router();


router.get('/all', async (req: Request, res: Response) => {
  const instances = await User.findAll();
  if (instances !== null) {
    res.statusCode = 200;
    res.send(instances.map(e => e.toSimplification()));
  }
  res.statusCode = 300;
  res.send('null');
});
router.post('/:email/:password',async (req: Request, res: Response) => {
    const email = req.params.email;
    const password = req.params.password;

    if (email == null || password == null) {
      res.statusCode = 403;
      res.send('');
      return;
    }
    try {
      const instance = await User.findAll();
      if (instance !== null) {
        let i = 0;
        for(i=0; i<instance.length; i++){
          if(instance[i].email === email && instance[i].password === password){
            res.statusCode = 200;
            res.send(instance[i].toSimplification());
            return;
          }
        }

        res.statusCode = 404;
        res.send('wrong you noob');
        return;
      }
      res.statusCode = 404;
      res.send('');
    } catch (ex) {
    res.statusCode = 405;
    res.send('exception:' + ex);
  }
}
);

export const LoginController: Router = router;

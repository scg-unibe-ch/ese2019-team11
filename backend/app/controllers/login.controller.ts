import {Router, Request, Response} from 'express';
import {User} from '../models/User.model';


const router: Router = Router();
router.post('/:email/:password',async (req: Request, res: Response) => {
    const email = req.params.email;
    const password = req.params.password;

    let options = {};
    if (email !== null && password !== null) {
      options = {
        include: [{model: User}],
        where: {
          email: email
        }
        };

    } else {
      res.statusCode = 403;
      res.send('');
      return;
    }
    try {
      const instance = await User.find(options);
      if (instance !== null && password === instance.password) {
        res.statusCode = 200;
        res.send(instance.toSimplification());
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

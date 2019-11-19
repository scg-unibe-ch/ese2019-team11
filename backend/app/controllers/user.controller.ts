import {Router, Request, Response} from 'express';
import {User} from '../models/user.model';

const router: Router = Router();


export const UserController: Router = router;


// REGISTRATION, POST A NEW USER
router.post('/signup', async(req: Request, res: Response) => {
  const user = req.body;
  const mailcheck = await User.findByPk(user.email);
    // check if email is already in use or not
  if (mailcheck) {
    res.statusCode = 406;
    res.json({'message': 'this email was already used for registration'});
    return;
  }
  const instance = new User();
  instance.fromSimplification(user);
  await instance.save();
  res.statusCode = 201;
  res.json({'message': 'user registered'});
  res.send(instance.toSimplification());
  return;
});

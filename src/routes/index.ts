import express, { Request, Response, NextFunction} from 'express';
import { register } from '../controller/index-controller';

const router = express.Router();

/* GET home page. */

router.get('/', function(req: Request, res: Response, next: NextFunction) {

  // res.render('index', { title: 'Express' });
  res.json( { message: 'welcome'})

});

router.get('/register', function(req: Request, res: Response, next: NextFunction) {

  // res.render('index', { title: 'Express' });
  res.json( { message: 'sign up here'})

});

router.post('/register', register )

export default router

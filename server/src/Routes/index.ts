import { Router } from 'express';

import SignUpController from '../controllers/SignUp';

const routes = Router();
const signUpController = new SignUpController();

routes.post('/signup', signUpController.create);

routes.get('/', (req, res) => res.json({ message: 'run' }));

export default routes;

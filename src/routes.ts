import {Router} from 'express'
import { UserRegisterController } from './controller/user/user-register.controller';
import { UserLoginController } from './controller/user/user-login.controller';
import { AuthMiddleware } from './middlewares/auth';


const registerController = new UserRegisterController();
const loginController = new UserLoginController();



export const router = Router();

router.post("/register", registerController.store);
router.post("/login", loginController.authenticate)
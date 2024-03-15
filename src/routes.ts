import {Router} from 'express'
import { UserController } from './controller/user.controller'
import { AuthController } from './controller/auth/auth.controller';
import { AuthMiddleware } from './middlewares/auth';


const userController = new UserController();
const authController = new AuthController();



export const router = Router();

router.post("/register", userController.store);
router.post("/login", AuthMiddleware, authController.authenticate)
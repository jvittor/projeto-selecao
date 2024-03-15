import {Router} from 'express'
import { UserController } from './controller/user.controller'

const usercontroller = new UserController();
export const router = Router();

router.post("/register", usercontroller.store);
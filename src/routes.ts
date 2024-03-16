import {Router} from 'express'
import { UserRegisterController } from './controllers/user/user-register.controller';
import { UserLoginController } from './controllers/user/user-login.controller';
import { AuthMiddleware } from './middlewares/auth';

import { PaymentCreateController } from './controllers/payment/payment-create.controller';
import { PaymentListController } from './controllers/payment/payment-list.controller';
import { PaymentUpdateController } from './controllers/payment/payment-update.controller';
import { PaymentDeleteController } from './controllers/payment/payment-delete.controller';


import { BalanceCreateController } from './controllers/balance/balance-create.controller';
import { BalanceListController } from './controllers/balance/balance-list.controller';
import { BalanceUpdateController } from './controllers/balance/balance-update.controller.';
import { BalanceDeleteController } from './controllers/balance/balance-delete.controller';


// user
const registerController = new UserRegisterController();
const loginController = new UserLoginController();

// payment
const paymentController = new PaymentCreateController();
const paymentListController = new PaymentListController();
const paymentUpdateController = new PaymentUpdateController();
const paymentDeleteController = new PaymentDeleteController();

// balance
const balanceController = new BalanceCreateController();
const balanceListController = new BalanceListController();
const balanceUpdateController = new BalanceUpdateController();
const balanceDeleteController = new BalanceDeleteController();



export const router = Router();

// user
router.post("/register", registerController.store);
router.post("/login", loginController.authenticate)

// payment
router.post("/payments/payment", AuthMiddleware, paymentController.create);
router.get("/payments", AuthMiddleware, paymentListController.list);
router.put("/payments/:paymentId", AuthMiddleware, paymentUpdateController.update);
router.delete("/payments/:paymentId", AuthMiddleware, paymentDeleteController.delete);

// balance
router.post("/balances/balance", AuthMiddleware, balanceController.create)
router.get("/balances", AuthMiddleware, balanceListController.list)
router.put("/balances/:balanceId", AuthMiddleware, balanceUpdateController.update)
router.delete("/balances/:balanceId", AuthMiddleware, balanceDeleteController.delete)
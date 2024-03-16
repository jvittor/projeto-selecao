import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export class PaymentListController {
    async list(req: Request, res: Response) {
        const userId = req.userId;
        try {
            const userPayments = await prisma.payment.findMany({
                where: {
                    userId: parseInt(userId)
                }
            });
            return res.json({
                error: false,
                message: "lista de pagamentos do usuário obtida com sucesso!",
                payments: userPayments
            });
        } catch (error) {
            console.error("erro na listagem dos pagamentos do usuário:", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

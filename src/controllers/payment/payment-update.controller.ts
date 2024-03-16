import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PaymentUpdateController {
    async update(req: Request, res: Response) {
        const paymentId = req.params.paymentId;
        const userId = req.userId;
        const newData = req.body;

        try {
            const payment = await prisma.payment.findUnique({
                where: { id: parseInt(paymentId) }
            });

            if (!payment) {
                return res.status(404).json({ error: "pagamento não encontrado" });
            }

            if (payment.userId !== parseInt(userId)) {
                return res.status(403).json({ error: "tentando ser espertinho ein? tem permissão não." });
            }

            const updatedPayment = await prisma.payment.update({
                where: { id: parseInt(paymentId) },
                data: newData
            });

            return res.status(200).json({ message: "pagamento atualizado com sucesso", payment: updatedPayment });
        } catch (error) {
            console.error("erro ao atualizar pagamento :(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

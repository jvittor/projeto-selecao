import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PaymentDeleteController {
    async delete(req: Request, res: Response) {
        const paymentId = req.params.paymentId;
        const userId = req.userId;

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
            const balance = await prisma.balance.findUnique({
                where: { id: payment.balanceId }
            });

            if (!balance) {
                return res.status(404).json({ error: "saldo não encontrado para o pagamento" });
            }
            const returnedValue = balance.remainingValue + payment.value;
            await prisma.balance.update({
                where: { id: balance.id },
                data: { remainingValue: returnedValue }
            });
            await prisma.payment.delete({
                where: { id: parseInt(paymentId) }
            });

            return res.status(200).json({ message: "pagamento excluído com sucesso :)" });
        } catch (error) {
            console.error("erro ao excluir pagamento :(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

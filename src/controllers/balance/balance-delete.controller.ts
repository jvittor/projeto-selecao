import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BalanceDeleteController {
    async delete(req: Request, res: Response) {
        const balanceId = req.params.balanceId;
        const userId = req.userId;

        try {
            const balance = await prisma.balance.findUnique({
                where: { id: parseInt(balanceId) }
            });

            if (!balance) {
                return res.status(404).json({ error: "saldo não foi encontrado" });
            }

            if (balance.userId !== parseInt(userId)) {
                return res.status(403).json({ error: "tentando ser espertinho ein? tem permissão não." });
            }
            const payments = await prisma.payment.findMany({
                where: { balanceId: parseInt(balanceId) }
            });
            if (payments.length > 0) {
                return res.status(400).json({ error: "o saldo em questão têm pagamentos vinculados a ele. exclua o pagamento primeiro." });
            }
            await prisma.balance.delete({
                where: { id: parseInt(balanceId) }
            });

            return res.status(200).json({ message: "saldo excluído com sucesso :)" });
        } catch (error) {
            console.error("erro ao excluir saldo :(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

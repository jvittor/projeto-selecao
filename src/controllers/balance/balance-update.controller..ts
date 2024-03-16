import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BalanceUpdateController {
    async update(req: Request, res: Response) {
        const balanceId = req.params.balanceId;
        const userId = req.userId;
        const newData = req.body;
        try {
            const balance = await prisma.balance.findUnique({
                where: { id: parseInt(balanceId) }
            });

            if (!balance) {
                return res.status(404).json({ error: "saldo não encontrado" });
            }

            if (balance.userId !== parseInt(userId)) {
                return res.status(403).json({ error: "tentando ser espertinho ein? tem permissão não." });
            }

            const updatedBalance = await prisma.balance.update({
                where: { id: parseInt(balanceId) },
                data: newData
            });

            return res.status(200).json({ message: "saldo atualizado com sucesso", balance: updatedBalance });
        } catch (error) {
            console.error("erro ao atualizar saldo :(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

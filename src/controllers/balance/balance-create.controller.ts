import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BalanceCreateController {
    async create(req: Request, res: Response) {
        const userId = req.userId;
        const balanceData = req.body;

        try {
            balanceData.remainingValue = balanceData.initialValue;
            const newBalanceData = { ...balanceData, userId: userId };
            const createdBalance = await prisma.balance.create({
                data: newBalanceData
            });

            return res.status(201).json({ message: "saldo criado com sucesso :)", balance: createdBalance });
        } catch (error) {
            console.error("deu erro ao criar saldo :( veja novamente!", error);
            return res.status(500).json({ error: "erro interno do servidor!" });
        }
    }
}

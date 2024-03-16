import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export class BalanceListController {
    async list(req: Request, res: Response) {
        const userId = req.userId;
        try {
            const userBalances = await prisma.balance.findMany({
                where: {
                    userId: parseInt(userId)
                }
            });
            return res.json({
                error: false,
                message: "listinha fesquinha de saldos do usuário!",
                balances: userBalances
            });
        } catch (error) {
            console.error("deu erro na listagem dos saldos do usuário :(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

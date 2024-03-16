import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PaymentCreateController {
    async create(req: Request, res: Response) {
        const userId = req.userId;
        const paymentData = req.body;

        try {
            const userIdNumber = parseInt(userId);
            const userBalance = await prisma.balance.findFirst({
                where: { userId: userIdNumber },
                select: { id: true, remainingValue: true, initialValue: true }
            });

            if (!userBalance) {
                return res.status(400).json({ error: "saldo foi encontrado não!" });
            }

            if (!paymentData.balanceId) {
                paymentData.balanceId = userBalance.id;
            }

            const specifiedBalance = await prisma.balance.findFirst({
                where: { id: paymentData.balanceId }
            });

            if (!specifiedBalance || specifiedBalance.userId !== userIdNumber) {
                return res.status(400).json({ error: "saldo não foi encontrado ou não pertece ao usuario" });
            }
            let updatedRemainingValue;
            if (specifiedBalance.initialValue === specifiedBalance.remainingValue) {
                updatedRemainingValue = specifiedBalance.initialValue - paymentData.value;
            } else {
                updatedRemainingValue = specifiedBalance.remainingValue - paymentData.value;
            }

            if (updatedRemainingValue < 0) {
                return res.status(400).json({ error: "saldo insuficiente ein, reveja o valor!" });
            }

            await prisma.balance.update({
                where: { id: paymentData.balanceId },
                data: { remainingValue: updatedRemainingValue }
            });
            const newPaymentData = { ...paymentData, userId: userId };
            const createdPayment = await prisma.payment.create({
                data: newPaymentData
            });

            return res.status(201).json({ message: "pagamento criado com sucesso :)", payment: createdPayment });
        } catch (error) {
            console.error("erro ao criar pagamento:(", error);
            return res.status(500).json({ error: "erro interno do servidor [nos fios do server]" });
        }
    }
}

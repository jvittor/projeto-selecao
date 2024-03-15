import { Request, Response } from "express";
import { prisma } from "../utils/prisma";


export class UserController {
    async store(req: Request, res: Response) {
        const {email, password} = req.body;
        const user = await prisma.user.create({
            data: {
                email, 
                password,
            },
        });

        return res.json({ user })
    }
}
import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcryptjs";


export class UserController {
    async store(req: Request, res: Response) {
        const {email, password} = req.body;
        
        const userExists = await prisma.user.findUnique({ where: { email } });
        if(userExists){
            return res.json({ error: "usuario ja existe!"})
        }
        const hash_password = await bcrypt.hash(password, 8);
        const user = await prisma.user.create({
            data: {
                email, 
                password: hash_password,
            },
        });

        return res.json({ user })
    }
}
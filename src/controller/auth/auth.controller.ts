import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export class AuthController {
    async authenticate(req: Request, res: Response) {
        const {email, password} = req.body;
        
        const user = await prisma.user.findUnique({ where: { email } });
        
        if(!user) {
            return res.json({ error: "usuario não encontrado ein!"})
        }

        const isValuePassword = await bcrypt.compare(password, user.password);

        if(!isValuePassword) {
            return res.json({ error: "senha esta incorreta ein!"})
        }
        
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as jwt.Secret, { expiresIn: "1d" });
       
        return res.json({ user, token })
    }
}
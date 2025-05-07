import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|br)$/;
    
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email inválido, precisa conter um domínio válido!" });
    }
  
    try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });
    res.status(201).json(userDB);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error!" });
  }
};

export const loginUser = async (req, res) => {
    try {
      const userInfo = req.body;
  
      const user = await prisma.user.findUnique({
        where: { email: userInfo.email },
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const isMatch = await bcrypt.compare(userInfo.password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
  
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
  
      res.status(200).json(token);
    } catch (err) {
      res.status(500).json({ message: "Server error!" });
    }
  };

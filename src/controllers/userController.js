import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const user = req.body;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const hasNumber = /\d/;

  if (!user.name || user.name.trim() === "" || user.name === Number) {
    return res.status(400).json({ message: "Designation is required." });
  }

  if (hasNumber.test(user.name)) {
    return res
      .status(400)
      .json({ message: "Designation cannot contain numbers." });
  }

  if (!user.email || user.email.trim() === "") {
    return res.status(400).json({ message: "Imperial ID is required." });
  }

  if (!emailRegex.test(user.email)) {
    return res.status(400).json({ message: "Imperial ID format is invalid." });
  }

  if (!user.password || user.password.trim() === "") {
    return res.status(400).json({ message: "Access Code is required." });
  }

  if (user.password.length < 6) {
    return res
      .status(400)
      .json({ message: "Access Code must be at least 6 characters." });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Imperial ID already registred." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });

    const token = jwt.sign(
      { id: userDB.id, name: userDB.name, email: userDB.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    res.status(201).json({ message: "Authentication successful!" });
  } catch (err) {
    console.error(err);
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
      return res.status(401).json({ message: "Incorrect access code" });
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    res.status(201).json({ message: "Authentication successful!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
};

export const tokenUser = async (req, res) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    res.status(200).json({ user: decoded });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logout successful!" });
};

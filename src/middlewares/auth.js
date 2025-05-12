import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("JWT_SECRET não definido!");
}

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Token não enviado ou formato errado:", authHeader);
    return res.status(401).json({ message: "Acesso negado!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id; 
    next();
  } catch (err) {
    console.error("Token inválido:", err.message);
    return res.status(401).json({ message: "Token inválido!" });
  }
};

export default auth;

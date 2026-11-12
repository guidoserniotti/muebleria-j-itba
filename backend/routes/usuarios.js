import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import { verificarToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/registro", async (req, res) => {
  const { nombre, email, password } = req.body ?? {};

  if (
    typeof nombre !== "string" ||
    !nombre.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof password !== "string" ||
    !password
  ) {
    return res.status(400).json({ error: "Nombre, email y contraseña son obligatorios" });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const usuario = await Usuario.create({
    nombre: nombre.trim(),
    email,
    password: passwordHash,
  });

  res.status(201).json({
    _id: usuario._id,
    nombre: usuario.nombre,
    email: usuario.email,
    rol: usuario.rol,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};

  if (typeof email !== "string" || !email.trim() || typeof password !== "string" || !password) {
    return res.status(400).json({ error: "Email y contraseña son obligatorios" });
  }

  const usuario = await Usuario.findOne({ email: email.trim().toLowerCase() }).select("+password");
  if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { id: usuario._id.toString(), rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    token,
    usuario: {
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
  });
});

router.get("/perfil", verificarToken, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario.id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.status(200).json({
    _id: usuario._id,
    nombre: usuario.nombre,
    email: usuario.email,
    rol: usuario.rol,
  });
});

export default router;

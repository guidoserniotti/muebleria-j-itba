import jwt from "jsonwebtoken";

export function verificarToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authorization.slice(7).trim();
  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({ error: "Token inválido o vencido" });
    }
    return next(error);
  }

  return next();
}

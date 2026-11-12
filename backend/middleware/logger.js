const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // sin esto el pedido se queda colgado y nunca llega a la ruta
};

export default logger;

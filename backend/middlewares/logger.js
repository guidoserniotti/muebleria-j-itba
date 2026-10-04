const logger = (req, res, next) => {
    const fecha = new Date().toLocaleString('es-AR').replace(',', '');
    console.log(`[${fecha}] ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = logger;

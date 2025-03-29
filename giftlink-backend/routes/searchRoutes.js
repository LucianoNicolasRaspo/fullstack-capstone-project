const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search for gifts
router.get('/', async (req, res, next) => {
    try {
        // Conectar a la base de datos MongoDB
        const db = await connectToDatabase();

        const collection = db.collection("gifts");

        // Inicializar el objeto de consulta
        let query = {};

        // Agregar el filtro de nombre al query si el parámetro name no está vacío
        if (req.query.name && req.query.name.trim() !== '') {  // Corregido
            query.name = { $regex: req.query.name, $options: "i" }; // Usando regex para coincidencia parcial, insensible a mayúsculas/minúsculas
        }

        // Agregar otros filtros al query
        if (req.query.category) {
            query.category = req.query.category;
        }
        if (req.query.condition) {
            query.condition = req.query.condition;
        }
        if (req.query.age_years) {
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        // Obtener los regalos filtrados usando el método find(query)
        const gifts = await collection.find(query).toArray();

        res.json(gifts);
    } catch (e) {
        next(e);
    }
});

module.exports = router;

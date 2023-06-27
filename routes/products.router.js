const express = require('express');
const router = express.Router();

const ProductsService = require('../service/product.service');
const { tr } = require('@faker-js/faker');
const service = new ProductsService();
// Los endpoints especificos deben declararsen antes de los endpoints dinamicos.

// Query params
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// Recibir parametros
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;

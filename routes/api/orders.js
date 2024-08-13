import express from 'express';

import Order from '../../models/order.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
})
router.post('/', async (req, res) => {
    const { body } = req;
    const result = await Order.create({ ...body })
    res.status(201).json(result);
})

export default router;
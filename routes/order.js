import express from 'express';
import order from '../controllers/order.js'

const orderRouter = express.Router();

orderRouter
    .post('/', order.create)
    .get('/get', order.get)
    .get('/get/pending', order.getPending)
    .get('/get/taken', order.getTaken)
    .get('/get/ready', order.getReady)
    .get('/get/prev', order.getPrev)
    .get('/set/taken/:id', order.setTaken)
    .get('/set/ready/:id', order.setReady)
    .get('/set/prev/:id', order.setPrev)
    .get('/get/:id', order.getOne)

export default orderRouter;
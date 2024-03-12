import express from 'express';
import item from '../controllers/item.js'

const itemRouter = express.Router();

itemRouter
    .get('/get', item.get)
    .get('/get/:id', item.getOne)

export default itemRouter;
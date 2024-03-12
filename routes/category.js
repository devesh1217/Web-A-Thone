import express from 'express';
import category from '../controllers/category.js'

const categoryRouter = express.Router();

categoryRouter
    .get('/get', category.get)
    .get('/get/:id', category.getName)

export default categoryRouter;
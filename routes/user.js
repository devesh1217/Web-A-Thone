import express from 'express';
import user from '../controllers/user.js'

const orderRouter = express.Router();

orderRouter
    .get('/otp/get', user.otp)

export default orderRouter;
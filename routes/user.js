import express from 'express';
import user from '../controllers/user.js'

const userRouter = express.Router();

userRouter
    .get('/otp/get', user.otp)
    .post('/auth', user.login)

export default userRouter;
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import jwt from 'jsonwebtoken'

const server = express();

// DB Connections
const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}
main()
    .then(() => { console.log('DB Connected') })
    .catch((err) => { console.log('Error occuered!', err) });




const auth = (req, res, next) => {
    try {
        const token = req.get('Authorization').split('Bearer ')[1];
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        if(decoded.userId){
            next();
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(401);
    }
};

// Middle Wares
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/api/user', auth, userRouter);


server.use('*', (req, res) => {
    res.sendFile(path.resolve(process.env.PUBLIC_DIR, 'index.html'));
})

// Starting Server
const startServer = async () => {
    server.listen(process.env.PORT, () => { });
}

startServer()
    .then(() => { console.log('Server Started') })
    .catch(() => { console.log('Error') });
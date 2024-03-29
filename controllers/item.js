import mongoose from 'mongoose';
import itemSchema from '../models/item.js'


const itemRoute = {
    get: async (req, res) => {
        let data;

        try{
            data = await itemSchema.find({});
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getOne: async (req, res) => {
        let data;
        const id = (req.params.id);
        try{
            data = await itemSchema.aggregate([
                {$match: { categoryID: id } }
            ]);
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
}


export default itemRoute;
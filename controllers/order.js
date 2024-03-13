import mongoose from 'mongoose';
import orderSchema from '../models/order.js'

const orderRoute = {
    create: async (req, res) => {
        const data = new orderSchema(req.body);
        await data.save()
            .then((doc) => {
                res.status(201).json({success:true,id:doc._id});
            }).catch((err) => {
                console.log(err)
                res.status(501).json({success:false});
            });
    },
    get: async (req, res) => {
        let data;

        try{
            data = await orderSchema.aggregate([
                { $sort : { date : 1 } }
            ]);
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getPending: async (req, res) => {
        let data;

        try{
            data = await orderSchema.find(
                { status:'Ordered'}
            );
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getTaken: async (req, res) => {
        let data;

        try{
            data = await orderSchema.find(
                { status:'Preparing'}
            );
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getReady: async (req, res) => {
        let data;

        try{
            data = await orderSchema.find(
                { status:'Ready'}
            );
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getPrev: async (req, res) => {
        let data;

        try{
            data = await orderSchema.find(
                { status:'Served'}
            );
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    setTaken: async (req, res) => {
        let data;

        try{
            data = await orderSchema.updateOne({_id:req.params.id},{status:"Preparing"})
            res.status(200).json({success:true});
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    setReady: async (req, res) => {
        let data;
        
        try{
            data = await orderSchema.updateOne({_id:req.params.id},{status:"Ready"})
            res.status(200).json({success:true});
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    setPrev: async (req, res) => {
        let data;

        try{
            data = await orderSchema.updateOne({_id:req.params.id},{status:"Served"})
            res.status(200).json({success:true});
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getOne: async (req, res) => {
        let data;
        const id = (req.params.id);
        try{
            data = await orderSchema.findOne({_id:id});
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
}


export default orderRoute;
import categorySchema from '../models/category.js'


const categoryRoute = {
    get: async (req, res) => {
        let data;

        try{
            data = await categorySchema.find({});
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
    getName: async (req, res) => {
        let data;

        try{
            data = await categorySchema.findOne({_id:req.params.id},{categoryName:1});
            res.status(200).json(data);
        } catch(err){
            console.log(err)
            res.sendStatus(501);
        }   
    },
}


export default categoryRoute;
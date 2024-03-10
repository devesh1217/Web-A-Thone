import itemSchema from '../models/item.js'
import webpush from 'web-push'


const keys = {
    PublicKey:'BNOGUi-eC2wjhs2_v78dkfp8IMriCQRuwnuAWGEMTNLrIPMvnYveaz7dcIno3q-1TQdmKFwO1fBRxpvstObVMec',
    PrivateKey: 'Q6u-9wkxYZZUEaErQ6pxhKeMVB1_BsxgKdwfH8qSeXQ'
}

webpush.setVapidDetails(
    'mailto:u22cs035@coed.svnit.ac.in',
    keys.PublicKey,
    keys.PrivateKey
)


const itemRoute = {
    get: async (req, res) => {
        let data;

        try{
            data = await itemSchema.find({});
        } catch(err){
            console.log(err)
        }
    },
}


export default itemRoute;
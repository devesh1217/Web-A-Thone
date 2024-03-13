import mongoose from 'mongoose';
import userSchema from '../models/user.js'
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'u22cs035@coed.svnit.ac.in',
        pass: 'cevngsaampsoskog'
    }
});

const userRoute = {
    otp: async (req,res) => {
        let digits = '0123456789abcdefghijklmnopqrstuvwxyz';
        let OTP = '';
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        const mailOptions = {
            from: 'u22cs035@coed.svnit.ac.in',
            to: 'u22cs061@coed.svnit.ac.in',
            subject: 'Your OTP is '+OTP,
            text: 'Thanks!'
        };

        transporter.sendMail(mailOptions)
        .then(doc=>{
            res.status(200).json({otp:bcrypt.hashSync(OTP,process.env.SALT),success:true});
        }).catch(err=>{
            console.log(err)
            res.status(501).json({success:false});
        })
    },
    login: async (req,res) => {
        const id = req.body.id;
        const pswd = req.body.pswd;
        if(pswd==process.env.PSWD && id==process.env.USER_ID){
            res.status(200).json({isvalid:true});
        } else {
            res.status(200).json({isvalid:false});
        }

    },
}


export default userRoute;
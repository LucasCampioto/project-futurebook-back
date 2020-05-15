import {Request,Response} from 'express';
import admin from "firebase-admin";
import { SendVideoDB } from '../../../data/sendVideoDB';
import { SendVideoUC, SendVideoUCInput } from '../../../business/usecase/sendVideoUC';

export const sendVideos = async (req: Request, res: Response) => {
    try{
        const sendVideosDB = new SendVideoDB();
        const sendVideoUC =  new SendVideoUC(sendVideosDB);
        const videoId = await admin.firestore().collection("sendVideo").doc().get().then(doc => doc.id);
        const input: SendVideoUCInput ={
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            videoId,
        } 
        await sendVideoUC.execute(input);
        res.status(200).send("video enviado com sucesso")
   }catch(err){
       res.status(400).send(err.message)
   }
}
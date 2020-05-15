import {Request,Response} from 'express';
import { ChangeVideoDB } from '../../../data/changeVideoDB';
import { ChangeVideoUC, ChangeVideoInput } from '../../../business/usecase/changeVideoUC';

export const changeVideos = async (req: Request, res: Response) => {
    try{
        const changeVideoDB = new ChangeVideoDB();
        const sendVideoUC =  new ChangeVideoUC(changeVideoDB);
        const input: ChangeVideoInput ={
            title: req.body.title,
            description: req.body.description,
            videoId: req.params.videoId
        }
        await sendVideoUC.execute(input);
        res.status(200).send("video alterado com sucesso")
   }catch(err){
       res.status(400).send(err.message)
   }
}
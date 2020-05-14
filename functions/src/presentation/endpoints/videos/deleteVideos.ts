import {Request,Response} from 'express';
import { DeleteVideoDB } from '../../../data/deleteVideoDB';
import { DeleteVideoUC, DeleteVideoInput } from '../../../business/usecase/deleteVideoUC';

export const deleteVideos = async (req: Request, res: Response) => {
    try{ 
        const deleteVideoDB =  new DeleteVideoDB();
        const deleteVideoUC = new DeleteVideoUC(deleteVideoDB);
        const input : DeleteVideoInput = {
            videoId: req.params.videoId
        }
        await deleteVideoUC.execute(input);
        res.status(200).send("deletado com sucesso")
    }catch(err){
        res.status(400).send(err.message)
    }
}
import {Request,Response} from 'express';
import { GetVideosDB } from '../../../data/getVideosDB';
import { GetVideosUC } from '../../../business/usecase/getVideosUC';

export const getVideos = async (req: Request, res: Response) => {
    try{
        const getvideoDB = new GetVideosDB();
        const getVideoUC = new GetVideosUC(getvideoDB);
        const videos = await  getVideoUC.execute();
        res.status(200).send({
            message:"sucesso",
            videos,
        })
    }catch(err){
        res.status(400).send(err.message)
    }
}
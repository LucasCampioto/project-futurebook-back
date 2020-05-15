import {Request,Response} from 'express';
import { GetVideosDetailsUC} from '../../../business/usecase/getVideosDetailsUC';
import { GetVideosDetailsDB} from '../../../data/getVideosDetailsDB';

export const getVideosDetails = async (req: Request, res: Response) => {
    try{
        const getVideosDetailsUC = new GetVideosDetailsUC(new GetVideosDetailsDB() )
        const response =  await getVideosDetailsUC.execute({videoId: req.params.videoId})
        res.status(200).send(response)
    }catch(err){
        res.status(400).send(err.message)
    }

}
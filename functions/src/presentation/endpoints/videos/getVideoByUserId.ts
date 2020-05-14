import { Request, Response } from 'express';
import { GetVideosByUserIdUC } from '../../../business/usecase/getVideosByUserIdUC';
import { GetVideoByUserIdDB } from '../../../data/getVideoByUserIdDB'

export const getVideoByUserId = async(req: Request, res:Response) =>{
    try{
        const getVideosByUserIdUC = new GetVideosByUserIdUC(new GetVideoByUserIdDB())
        const response = await getVideosByUserIdUC.execute( {
            userId: req.headers.auth as string
          } )

          res.status( 200 ).send( response )
    }catch(err){
        res.status(400).send(err.message)
    }
}
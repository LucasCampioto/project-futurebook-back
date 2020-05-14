import {GetVideosDetailsGateway} from '../gateway/getVideosByUserId'
import { Video } from '../entities/video'

export class GetVideosByUserIdUC{
    constructor( private db: GetVideosDetailsGateway){}
  
    public async execute( input:GetVideosByUserIdInput ): Promise<GetVideosByUserIdOutput>{
     
        const result = await this.db.getVideosByUserId( input.userId )
  
        return ( {
          videos: result
        } )
     
    }
  }
  
  interface GetVideosByUserIdInput{
    userId: string
  }
  
  interface GetVideosByUserIdOutput{
    videos: Video[]
  }
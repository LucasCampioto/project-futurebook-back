import { GetVideosDetailsGateway } from "../../business/gateway/getVideosDetailsGateway"

export class GetVideosDetailsUC {
    constructor(private db: GetVideosDetailsGateway){}
    
    public async execute(input: GetVideosDetailsInput): Promise<GetVideoInfoByIdOutput>{
        const videosDetails = await this.db.getVideosDetails(input.videoId)
        return  ({ videosDetails })    
    }

}  

export interface GetVideosDetailsInput{
    videoId:string
}

export interface GetVideoInfoByIdOutput{
   videosDetails: any
}
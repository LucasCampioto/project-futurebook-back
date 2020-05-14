import { GetVideosDB } from "../../data/getVideosDB"

export class GetVideosUC {
    constructor(private db: GetVideosDB){}

    public async execute(): Promise<any>{
        return { videos: await this.db.getVideos()}
    }
}
    
export interface GetVideosOutput{
        videos:[]
}
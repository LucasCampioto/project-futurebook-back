import {Video} from '../entities/video'

export interface GetVideosDetailsGateway {
    getVideosByUserId( userId:string ): Promise<Video[]>
}


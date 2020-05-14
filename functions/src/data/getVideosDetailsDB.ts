import * as admin from "firebase-admin";
import { GetVideosDetailsGateway } from "../business/gateway/getVideosDetailsGateway";



export class GetVideosDetailsDB implements GetVideosDetailsGateway {
    
    async getVideosDetails(videoId:string): Promise<any> {
        try{
            const result = await admin.firestore().collection('sendVideos').doc(videoId).get();
            const videoDetails = {
                title: result.data()?.title,
                description: result.data()?.description,
                url: result.data()?.url,
            }
              return videoDetails
        }catch{
            throw new Error("Video not found")
        }
    }
}
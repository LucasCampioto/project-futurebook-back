import {GetVideosDetailsGateway} from '../business/gateway/getVideosByUserId'
import { Video } from '../business/entities/video'
import * as admin from "firebase-admin";

export class GetVideoByUserIdDB implements GetVideosDetailsGateway{
    async getVideosByUserId(userId:string):Promise<Video[]>{
       
            const verifyToken = await admin.auth().verifyIdToken(userId)
            const userToken = verifyToken.uid
            const result = await admin.firestore().collection('sendVideos')
                  .where("userId", "==", userToken)
                  .get()

            return result.docs.map((doc) => {
                let video = new Video(
                    doc.data().url,
                    doc.data().description,
                    doc.data().title,
                    doc.id
                )
                return video
            })
      
    }
}
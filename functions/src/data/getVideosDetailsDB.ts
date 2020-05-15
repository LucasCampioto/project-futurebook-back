import * as admin from "firebase-admin";
import { GetVideosDetailsGateway } from "../business/gateway/getVideosDetailsGateway";

export class GetVideosDetailsDB implements GetVideosDetailsGateway {   
    async getVideosDetails(videoId:string): Promise<any> {
        try{
            const result = await admin.firestore().collection('sendVideo').doc(videoId).get();
            const userId = await admin.firestore().collection("users").doc().get().then(doc => doc.id)
            const user = await admin.firestore().collection('users').doc(userId).get()

            const videoDetails = {
                title: result.data()?.title,
                description: result.data()?.description,
                url: result.data()?.url,
                userName: user.data()?.username,
                userPhoto: user.data()?.photo
            }
              return videoDetails
        }catch{
            throw new Error("Video not found")
        }
    }
}
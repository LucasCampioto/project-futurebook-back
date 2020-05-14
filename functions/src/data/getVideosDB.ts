import * as admin from "firebase-admin";


export class GetVideosDB {
    async getVideos(): Promise<any> {
        const videoRef = admin.firestore().collection('sendVideo');
        const snapshot = await videoRef.get();

        return snapshot.docs.map(doc => {
            let video = {
                url: doc.data().url,
                description: doc.data().description,
                title: doc.data().title,
                id: doc.id
            }
            return video;
        })
    }
}




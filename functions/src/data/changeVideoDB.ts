import * as admin from "firebase-admin";
import {ChangeVideoGateway} from '../business/gateway/changeVideoGateway';

export class ChangeVideoDB implements ChangeVideoGateway {
    async changeVideo(videoId:string, title:string, description:string): Promise<void> {
            await admin.firestore().collection('sendVideo').doc(videoId).update({
                title,
                description
            })
    }
}
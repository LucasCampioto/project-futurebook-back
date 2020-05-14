import {SendVideoGateway} from '../gateway/sendVideoGateway';


export class SendVideoUC {
        constructor(
        private sendVideoGateway: SendVideoGateway
    ){}

    async execute(input: SendVideoUCInput){
        await this.sendVideoGateway.sendVideo(input.url, input.title, input.description, input.videoId)
    }
}


export interface SendVideoUCInput {
    url: string,
    title: string,
    description: string,
    videoId: string,
    
}
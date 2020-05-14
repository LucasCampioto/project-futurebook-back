import {ChangeVideoGateway} from '../gateway/changeVideoGateway';

export class ChangeVideoUC {
    constructor(
        private changeVideoGateway: ChangeVideoGateway
    ){}

    async execute(input: ChangeVideoInput){
        await this.changeVideoGateway.changeVideo(input.videoId, input.title, input.description)
    }
}

export interface ChangeVideoInput{
    videoId:string,
    title:string,
    description:string,
}
import {DeleteVideoGateway} from '../gateway/deleteVideoGateway';

export class DeleteVideoUC {
    constructor(
        private deleteVideGateway: DeleteVideoGateway
    ){}

    async execute(input: DeleteVideoInput){
        await this.deleteVideGateway.deleteVideo(input.videoId)
    }
}

export interface DeleteVideoInput{
    videoId: string,
}
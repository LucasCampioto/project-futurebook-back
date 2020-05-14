export interface ChangeVideoGateway{
    changeVideo(videoId:string, title:string, description:string):Promise<void>
}
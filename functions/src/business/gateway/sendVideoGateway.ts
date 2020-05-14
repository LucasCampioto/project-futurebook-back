export interface SendVideoGateway {
    sendVideo(url: string, title:string, description:string, videoId:string): Promise<void>
}
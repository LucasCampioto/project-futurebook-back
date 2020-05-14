
export interface GetVideosDetailsGateway {
    getVideosDetails(videoId: string): Promise<any>
}
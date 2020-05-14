import * as functions from 'firebase-functions';
import express from 'express';
import  cors from 'cors';
import admin from "firebase-admin";
import { getVideos } from './endpoints/videos/getVideos';
import { sendVideos } from './endpoints/videos/sendVideos';
import { changeVideos } from './endpoints/videos/changeVideos';
import { deleteVideos } from './endpoints/videos/deleteVideos';
import { getVideosDetails } from './endpoints/videos/getVideosDetails';
import { getVideoByUserId } from './endpoints/videos/getVideoByUserId';

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

app.get('/getVideos', getVideos)
app.post('/sendVideos', sendVideos)
app.put('/changeVideos/:videoId', changeVideos)
app.delete('/deleteVideo/:videoId', deleteVideos)
app.get('/videosDetails/:videoId', getVideosDetails)
app.get('/videos/user', getVideoByUserId)

export const futureTube = functions.https.onRequest(app)
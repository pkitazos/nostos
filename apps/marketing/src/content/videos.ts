import { getS3File } from "../assets/distribution";

export const videos = [
  { url: getS3File("videos/video-1.mp4") },
  { url: getS3File("videos/video-2.mp4") },
  { url: getS3File("videos/video-3.mp4") },
  { url: getS3File("videos/video-4.mp4") },
];

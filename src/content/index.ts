export function getS3File(src: string) {
  const CDN = 'https://d2jgkuusud5fri.cloudfront.net'
  return `${CDN}/${src}`
}

export const resultExamples = [
  { name: 'example 1', URL: 'https://www.instagram.com/reel/CvMplsVu_mz/' },
  { name: 'example 2', URL: 'https://www.instagram.com/reel/CvQJiOSJs3o/' },
  { name: 'example 3', URL: 'https://www.instagram.com/reel/CxOSlOALjtj/' },
  // { name: 'example 4', URL: 'https://www.instagram.com/reel/CvfMXSYNglP/' },
  // { name: 'example 5', URL: 'https://www.instagram.com/reel/CxSy_9aN3XO/' },
  { name: 'example 6', URL: 'https://www.instagram.com/reel/Cvhs3gbuEna/' },
  // { name: 'example 7', URL: 'https://www.instagram.com/reel/Cu1s3AKuH6C/' },
  // { name: 'example 8', URL: 'https://www.instagram.com/reel/CuRlZCgNaGO/' },
  // { name: 'example 9', URL: 'https://www.instagram.com/reel/CsZIk1TL8Qz/' },
  // { name: 'example 10', URL: 'https://www.instagram.com/reel/CtZYGXNsX2U/' },
  // { name: 'example 11', URL: 'https://www.instagram.com/reel/CwQGJgnMUZ8/' },
]

export const videos = [
  { url: getS3File('videos/video-1.mp4') },
  { url: getS3File('videos/video-2.mp4') },
  { url: getS3File('videos/video-3.mp4') },
  { url: getS3File('videos/video-4.mp4') },
]

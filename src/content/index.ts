export function getS3File(src: string) {
  const CDN = 'https://d2jgkuusud5fri.cloudfront.net'
  return `${CDN}/${src}`
}

export const resultExamples = [
  { name: 'example 1', URL: 'https://www.instagram.com/reel/CvMplsVu_mz/' },
  { name: 'example 2', URL: 'https://www.instagram.com/reel/CvQJiOSJs3o/' },
  { name: 'example 3', URL: 'https://www.instagram.com/reel/CxOSlOALjtj/' },
  { name: 'example 4', URL: 'https://www.instagram.com/reel/CvfMXSYNglP/' },
  { name: 'example 5', URL: 'https://www.instagram.com/reel/CxSy_9aN3XO/' },
  { name: 'example 6', URL: 'https://www.instagram.com/reel/Cvhs3gbuEna/' },
  { name: 'example 7', URL: 'https://www.instagram.com/reel/Cu1s3AKuH6C/' },
  { name: 'example 8', URL: 'https://www.instagram.com/reel/CuRlZCgNaGO/' },
  { name: 'example 9', URL: 'https://www.instagram.com/reel/CsZIk1TL8Qz/' },
  { name: 'example 10', URL: 'https://www.instagram.com/reel/CtZYGXNsX2U/' },
  { name: 'example 11', URL: 'https://www.instagram.com/reel/CwQGJgnMUZ8/' },
]

export const videos = [
  { url: getS3File('videos/video-1.mp4') },
  { url: getS3File('videos/video-2.mp4') },
  { url: getS3File('videos/video-3.mp4') },
  { url: getS3File('videos/video-4.mp4') },
]

// below is all unused

export const allCollaborators = [
  { name: 'Aqua Dome', imageURL: '' },
  { name: 'Mandarin Oriental', imageURL: '' },
  { name: 'Melian', imageURL: '' },
  { name: 'Village Cinemas', imageURL: '' },
  { name: 'Casa Cook', imageURL: '' },
  { name: 'Zuma', imageURL: '' },
  { name: "Cook's Club", imageURL: '' },
  { name: 'Collaborator 8', imageURL: '' },
]

export const galleryCollaborators = [
  {
    name: 'Melian Boutique Hotel',
    siteURL: 'https://www.melian.gr/',
    backgroundImageURL: getS3File('melian-boutique-hotel/037A4271-147.jpg'),
    images: [
      { imageURL: getS3File('melian-boutique-hotel/037A4083-119.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A4211-134.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/_IAN0528-408.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A3550-37.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A3627-46.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A3508-31.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/LAPS0012.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A3480-21.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/LAPS8363.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A3639-50.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/_IAN8412-208.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/_IAN7048-57.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A5691-352.jpg') },
      { imageURL: getS3File('melian-boutique-hotel/037A5712-354.jpg') },
    ],
  },
  {
    name: 'Aqua Dome',
    siteURL: 'https://www.aqua-dome.at/en/',
    backgroundImageURL: getS3File('aqua-dome/Hotels-135.jpg'),
    images: [
      { imageURL: getS3File('aqua-dome/Hotels-135.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-115.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-81.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-77.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-76.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-137.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-78.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-87.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-97.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-117.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-72.jpg') },
      { imageURL: getS3File('aqua-dome/Hotels-73.jpg') },
    ],
  },
  {
    name: 'Santorini Sky',
    siteURL: 'https://santorinisky.com/',
    backgroundImageURL: getS3File('santorini-sky/Lodge-23.jpg'),
    images: [
      { imageURL: getS3File('santorini-sky/Lodge-24.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-22.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-4.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-6.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-23.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-7.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-20.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-25.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-18.jpg') },
      { imageURL: getS3File('santorini-sky/Lodge-21.jpg') },
    ],
  },
  {
    name: 'Panorama Suites',
    siteURL: 'https://www.panorama-suites.com/',
    backgroundImageURL: getS3File('panorama/Panorama-202.jpg'),
    images: [
      { imageURL: getS3File('panorama/Panorama-179.jpg') },
      { imageURL: getS3File('panorama/Panorama-187.jpg') },
      { imageURL: getS3File('panorama/Panorama-296.jpg') },
      { imageURL: getS3File('panorama/Panorama-210.jpg') },
      { imageURL: getS3File('panorama/Panorama-274.jpg') },
      { imageURL: getS3File('panorama/Panorama-122.jpg') },
      { imageURL: getS3File('panorama/Panorama-319.jpg') },
      { imageURL: getS3File('panorama/Panorama-32.jpg') },
      { imageURL: getS3File('panorama/Panorama-202.jpg') },
      { imageURL: getS3File('panorama/Panorama-203.jpg') },
      { imageURL: getS3File('panorama/Panorama-267.jpg') },
      { imageURL: getS3File('panorama/Panorama-185.jpg') },
    ],
  },
]

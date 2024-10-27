import { getS3File } from "../assets/distribution";

export type Collaborator = {
  name: string;
  backgroundImageURL: string;
  siteURL: string;
  images: GalleryImage[];
};

export type GalleryImage = { imageURL: string };

export const galleryCollaborators: Collaborator[] = [
  {
    name: "Melian Boutique Hotel",
    siteURL: "https://www.melian.gr/",
    backgroundImageURL: getS3File("melian-boutique-hotel/037A4271-147.jpg"),
    images: [
      { imageURL: getS3File("melian-boutique-hotel/037A4083-119.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A4211-134.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/_IAN0528-408.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A3550-37.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A3627-46.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A3508-31.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/LAPS0012.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A3480-21.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/LAPS8363.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A3639-50.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/_IAN8412-208.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/_IAN7048-57.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A5691-352.jpg") },
      { imageURL: getS3File("melian-boutique-hotel/037A5712-354.jpg") },
    ],
  },
  {
    name: "Aqua Dome",
    siteURL: "https://www.aqua-dome.at/en/",
    backgroundImageURL: getS3File("aqua-dome/Hotels-135.jpg"),
    images: [
      { imageURL: getS3File("aqua-dome/Hotels-135.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-115.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-81.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-77.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-76.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-137.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-78.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-87.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-97.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-117.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-72.jpg") },
      { imageURL: getS3File("aqua-dome/Hotels-73.jpg") },
    ],
  },
  {
    name: "Santorini Sky",
    siteURL: "https://santorinisky.com/",
    backgroundImageURL: getS3File("santorini-sky/Lodge-23.jpg"),
    images: [
      { imageURL: getS3File("santorini-sky/Lodge-24.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-22.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-4.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-6.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-23.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-7.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-20.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-25.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-18.jpg") },
      { imageURL: getS3File("santorini-sky/Lodge-21.jpg") },
    ],
  },
  {
    name: "Panorama Suites",
    siteURL: "https://www.panorama-suites.com/",
    backgroundImageURL: getS3File("panorama/Panorama-202.jpg"),
    images: [
      { imageURL: getS3File("panorama/Panorama-179.jpg") },
      { imageURL: getS3File("panorama/Panorama-187.jpg") },
      { imageURL: getS3File("panorama/Panorama-296.jpg") },
      { imageURL: getS3File("panorama/Panorama-210.jpg") },
      { imageURL: getS3File("panorama/Panorama-274.jpg") },
      { imageURL: getS3File("panorama/Panorama-122.jpg") },
      { imageURL: getS3File("panorama/Panorama-319.jpg") },
      { imageURL: getS3File("panorama/Panorama-32.jpg") },
      { imageURL: getS3File("panorama/Panorama-202.jpg") },
      { imageURL: getS3File("panorama/Panorama-203.jpg") },
      { imageURL: getS3File("panorama/Panorama-267.jpg") },
      { imageURL: getS3File("panorama/Panorama-185.jpg") },
    ],
  },
];

export function getS3File(src: string) {
  const CDN = "https://d2jgkuusud5fri.cloudfront.net";
  return `${CDN}/${src}`;
}

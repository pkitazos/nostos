import { Metadata } from "next";

import { PhotoGalleryGrid } from "apps/marketing/src/components/photo-gallery-grid";
import { ContentSection } from "apps/marketing/src/components/content-section";
import { Heading } from "apps/marketing/src/components/ui/heading";
import { galleryCollaborators } from "../../../content/gallery-collaborators";

export const metadata: Metadata = { title: "Photo Gallery - Nõstos Agency" };
export const runtime = "edge";

export default async function Page() {
  return (
    <ContentSection className="pt-header flex w-full flex-col items-center gap-28">
      <Heading className="pt-28">Photo Gallery</Heading>
      <PhotoGalleryGrid collaborators={galleryCollaborators} />
    </ContentSection>
  );
}

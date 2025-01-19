import { Metadata } from "next";

import { ContentSection } from "@/components/content-section";
import { PhotoGalleryGrid } from "@/components/photo-gallery-grid";
import { Heading } from "@/components/ui/heading";
import { getClients } from "@/content/get-clients";

export const metadata: Metadata = { title: "Photo Gallery - Nõstos Agency" };


export default async function Page() {
  const clients = await getClients();
  return (
    <ContentSection className="pt-header flex w-full flex-col items-center gap-28">
      <Heading className="pt-28">Photo Gallery</Heading>
      <PhotoGalleryGrid collaborators={clients} />
    </ContentSection>
  );
}

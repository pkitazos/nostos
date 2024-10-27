import { Metadata } from "next";
import Link from "next/link";

import { galleryCollaborators } from "../../../../content/gallery-collaborators";
import { findItem } from "apps/marketing/src/lib/utils/find-items";
import { slugify } from "apps/marketing/src/lib/utils/slugify";
import { PhotoGallery } from "./_components/photo-gallery";

// TODO: make metadata dynamic
export const metadata: Metadata = { title: "Gallery - Nõstos Agency" };
export const runtime = "edge";

export async function generateStaticParams() {
  return galleryCollaborators.map((post) => ({
    collaboratorId: slugify(post.name),
  }));
}

export default async function Page({
  params: { collaboratorId },
}: {
  params: { collaboratorId: string };
}) {
  const collaborator = findItem(collaboratorId, galleryCollaborators);

  if (!collaborator) return;

  return (
    <main className="pt-header flex flex-col items-center">
      <h1 className="mt-32">
        Client:{" "}
        <Link
          className="text-stone-400 underline"
          href={collaborator.siteURL}
          target="_blank"
        >
          {collaborator.name}
        </Link>
      </h1>
      <section className="w-full max-w-9xl px-10 pt-32">
        <PhotoGallery images={collaborator.images} />
      </section>
    </main>
  );
}

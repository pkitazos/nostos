"use client";
import { InstagramEmbed } from "react-social-media-embed";

export function EmbeddedReel({ url }: { url: string }) {
  return (
    <div className="flex justify-center">
      <InstagramEmbed url={url} width={328} />
    </div>
  );
}

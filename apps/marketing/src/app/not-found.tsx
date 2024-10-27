import { ImageSection } from "apps/marketing/src/components/image-section";
import { Button } from "apps/marketing/src/components/ui/button";
import { Heading } from "apps/marketing/src/components/ui/heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <ImageSection className="h-dvh flex-col items-center justify-center gap-10 bg-stone-300 pt-20">
      <Heading>Not Found</Heading>
      <p className="text-lg">Could not find requested page</p>
      <Link href="/">
        <Button size="thin">Return Home</Button>
      </Link>
    </ImageSection>
  );
}

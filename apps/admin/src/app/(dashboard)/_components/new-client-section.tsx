import { Button, buttonVariants } from "apps/admin/src/components/ui/button";
import Link from "next/link";

export function NewClientSection() {
  return (
    <div className="w-full flex justify-end">
      <Link className={buttonVariants()} href="/new-client">
        + New Client
      </Link>
    </div>
  );
}

import { FileUpload } from "apps/admin/src/components/file-upload";
import { PageWrapper } from "apps/admin/src/components/page-wrapper";

export const dynamic = "force-dynamic";

export default async function Page({
  params: { clientId },
}: {
  params: { clientId: string };
}) {
  return (
    <PageWrapper>
      <span>clientID: {clientId}</span>
      <p>TODO</p>
      <ul className="list-disc pl-6">
        <li>client name</li>
        <li>view currently uploaded images</li>
        <li>add new images</li>
        <li>remove images</li>
        <li>reorder images</li>
      </ul>
      <FileUpload />
    </PageWrapper>
  );
}

import { FileUpload } from "apps/admin/src/components/file-upload";
import { PageWrapper } from "apps/admin/src/components/page-wrapper";

export default async function Page() {
  return (
    <PageWrapper>
      <p>TODO</p>
      <ul className="list-disc pl-6">
        <li>new client name input</li>
        <li>add new client starter images</li>
        <li>remove images</li>
        <li>reorder images</li>
      </ul>
      <FileUpload />
    </PageWrapper>
  );
}

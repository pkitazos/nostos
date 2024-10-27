import { PageWrapper } from "apps/admin/src/components/page-wrapper";
import { db } from "apps/admin/src/db";
import { ClientsDataTable } from "./_components/clients-data-table";
import { NewClientSection } from "./_components/new-client-section";

export default async function Home() {
  const customers = await db.getCustomers();
  return (
    <PageWrapper>
      <p>TODO</p>
      <ul className="list-disc pl-6">
        <li>add logo to auth pages and header</li>
        <li>delete clients</li>
        <li>hide clients</li>
        <li>add client site url to client info type</li>
      </ul>
      <NewClientSection />
      <ClientsDataTable data={customers} />
    </PageWrapper>
  );
}

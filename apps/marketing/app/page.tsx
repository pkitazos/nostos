import { db } from "@nostos/db";

export const dynamic = "force-dynamic";
// export const revalidate = 60 // change to ISR once I figure it out

export default async function Home() {
  const customers = await db.selectFrom("customers").selectAll().execute();

  return (
    <div>
      <h1>Marketing - Customers</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h2>{customer.name}</h2>
          <p>{customer.site_url}</p>
        </div>
      ))}
    </div>
  );
}

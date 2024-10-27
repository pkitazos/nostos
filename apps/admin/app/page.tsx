import { db } from "@nostos/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const customers = await db.selectFrom("customers").selectAll().execute();

  return (
    <div>
      <h1>Admin - Manage Customers</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h2>{customer.name}</h2>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

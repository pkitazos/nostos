import { UserButton } from "@clerk/nextjs";

export async function Header() {
  return (
    <header className="w-full h-20 border flex items-center justify-between px-10">
      <h1 className="text-xl font-medium tracking-tight">Dashboard</h1>
      <UserButton />
    </header>
  );
}

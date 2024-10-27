export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2 bg-accent">
      <div className="col-start-2 flex w-full justify-center items-center bg-background border">
        {children}
      </div>
    </main>
  );
}

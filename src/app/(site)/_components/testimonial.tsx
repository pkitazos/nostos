export function Testimonial({
  children: quote,
  name,
}: {
  children: string;
  name: string;
}) {
  return (
    <div className="flex flex-col justify-start gap-2 text-lg font-light">
      <p className="font-inter">&quot;{quote}&quot;</p>
      <p className="font-bold"> - {name}</p>
    </div>
  );
}

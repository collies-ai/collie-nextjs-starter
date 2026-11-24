type Benefit = { readonly title: string; readonly text: string };

export function Benefits({ items }: { items: readonly Benefit[] }) {
  return (
    <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
      {items.map((b) => (
        <div key={b.title}>
          <dt className="font-medium">{b.title}</dt>
          <dd className="mt-1 text-muted">{b.text}</dd>
        </div>
      ))}
    </dl>
  );
}

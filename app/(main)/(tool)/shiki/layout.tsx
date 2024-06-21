export default function ShikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose dark:prose-invert">{children}</div>;
}

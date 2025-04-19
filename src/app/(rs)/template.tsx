export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="animate-appear">{children}</div>;
}

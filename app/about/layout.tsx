export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <small>&copy; Next is the best!</small>
    </>
  );
}

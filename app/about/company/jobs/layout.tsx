export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>We're hiring now!</p>
    </>
  );
}

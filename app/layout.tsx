export const metadata = {
  title: "Base Wallet Card",
  description: "Generate wallet profile cards on Base"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

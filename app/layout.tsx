import "./globals.css";

export const metadata = {
  title: "Tao Chen's Website",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

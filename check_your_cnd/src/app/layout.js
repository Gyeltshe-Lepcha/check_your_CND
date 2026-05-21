import "./globals.css";

export const metadata = {
  title: "HealthCheck NCD Risk",
  description:
    "A private, no-login educational assessment for non-communicable disease risk awareness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

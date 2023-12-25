import { Footer, Navbar } from "@/components";
import "./global.css";

export const metadata = {
  title: "Pinfolio",
  description:
    "Explore and exhibit exceptional developer projects—a platform to showcase innovation, creativity, and expertise within the developer community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

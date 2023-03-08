import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Banner text="Free Shipping and Exchanges. Easy Returns. " />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

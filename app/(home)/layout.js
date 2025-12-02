import { Space_Grotesk} from "next/font/google";
import "../globals.css";
import { dbConnect } from "@/lib/mongoConnect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const SpaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Space Grotesk

export const metadata = {
  title: "NewsSphere 24",
  description: "Your trusted source for breaking news in Finance, Technology, Health, Politics, and more.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en" className={`${SpaceGrotesk.variable}`}>
      <body>
        <Navbar sideMenu={true} />
         <main>
          {children}
         </main>
        <Footer />
      </body>
    </html>
  );
}

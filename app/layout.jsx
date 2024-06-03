import "./globals.css";
import { Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Head from "next/head";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Akash Kumar | Portfolio",
  description:
    "Akash Kumar is a FullStack Engineer with 2 years of experience.",
  imageUrl: "/akash-meta.png", // TODO change your icon image
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://wwww.anushrey.com" /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://wwww.anushrey.com" /> */}
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.imageUrl} />
      </Head>
      <html lang="en">
        <body
          className={`${montserrat.className} relative bg-zinc-950 text-gray-50 text-opacity-90`}
        >
          <div className=" bg-opacity-20 -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#E8CBC0]">
            <div className="bg-opacity-20 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left:[-5rem] bg-[#636FA4]"></div>
          </div>
          <SmoothScroll>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                {children}
                <Toaster position="top-right" />
                {/* <ThemeSwitch /> */}
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </SmoothScroll>
        </body>
      </html>
    </>
  );
}

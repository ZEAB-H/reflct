import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PropTypes from "prop-types";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reflct ",
  description: "A journaling App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0"></div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-orange-200 py-12 bg-opacity-10">
          <div className="text-center mx-auto px-4 text-shadow-gray-900">
            <p>
              Made with 💗 by{" "}
              <a
                href="https://dev-abel.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Abel
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

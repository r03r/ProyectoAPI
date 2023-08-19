import Navbar from "../components/Navbar";
import  './globals.css'

export const metadata = {
  title: "crash Next 13.js",
  description: " by Me.js",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body >
        <Navbar className={'flex'} />
        {children}
      </body>
    </html>
  );
}

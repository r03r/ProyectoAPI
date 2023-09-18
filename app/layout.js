import  './globals.css'
import Navbar from 'components/Navbar.jsx'


export const metadata = {
  title: "Desde Next 13.js",
  description: " by R03",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

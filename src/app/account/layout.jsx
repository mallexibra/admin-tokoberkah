import "@/app/global.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Akun Pengguna",
  description: "Generated by Akun Pengguna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar person={true} />
        {children}
      </body>
    </html>
  );
}

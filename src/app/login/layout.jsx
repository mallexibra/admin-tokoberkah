import "@/app/global.css";
export const metadata = {
  title: "Halaman Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

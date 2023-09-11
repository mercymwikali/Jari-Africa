import '../styles/globals.css';
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";
import { Layout } from '@/components';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: 'Jari-Africa',
  description: 'e-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className}>
      <Layout>
        {children}
      </Layout>
</body>
    </html>
  )
}

import Image from "next/image";
import Home from "./pages/home";

export const metadata = {
  title: 'X Framework from Exponential Operating System (X-OS) | XBD',
  description:
    'Discover the X Framework by Anuj for the Exponential Operating System (X-OS). Learn how intelligent enterprises achieve 15X growth through AI-driven scaling and strategic frameworks.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app',
  },
  openGraph: {
    title: 'X Framework from Exponential Operating System (X-OS) | XBD',
    description:
      'Discover the X Framework by Anuj for the Exponential Operating System (X-OS). Learn how intelligent enterprises achieve 15X growth through AI-driven scaling.',
    url: 'https://xbd.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X Framework from Exponential Operating System (X-OS) | XBD',
    description:
      'Discover the X Framework by Anuj for the Exponential Operating System (X-OS). Learn how intelligent enterprises achieve 15X growth.',
  },
};

export default function Main() {
  return (
    <div>
      <main className="relative">
      
      <Home />

    </main>
    </div>
  );
}

import FAQs from "@/components/Faq/Faq";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { getFaqPageData } from '@/lib/sanityQueries';

export const metadata = {
  title: 'XBD Book FAQs – Everything About the Exponential By Design ',
  description:
    'Find answers to common questions about Exponential By Design (XBD), the X Framework, X-OS concepts, and how the book helps transform your organisation with AI.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/faq',
  },
  openGraph: {
    title: 'XBD Book FAQs – Everything About the Exponential By Design ',
    description:
      'Find answers to common questions about Exponential By Design (XBD), the X Framework, X-OS concepts, and how the book helps transform your organisation with AI.',
    url: 'https://xbd.vercel.app/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | XBD FAQ',
    description:
      'Find answers to frequently asked questions about XBD programs and exponential growth strategies.',
  },
};

export default async function FaqPage() {
  const faqData = await getFaqPageData();

  return (
    <div className='relative'>
      <Navbar />

      <FAQs faqData={faqData} />

      <Footer/>
    </div>
  )
}
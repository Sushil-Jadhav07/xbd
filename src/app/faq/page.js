import FAQs from "@/components/Faq/Faq";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { getFaqPageData } from '@/lib/sanityQueries';

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
import FAQs from "@/components/Faq/Faq";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default async function FaqPage() {
 

  return (
    <div className='relative'>
      <Navbar />

      <FAQs />


      <Footer/>
    </div>
  )
}
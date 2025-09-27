import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import ContactPage from '@/components/Contact/ContactPage';

const Contact = () => {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

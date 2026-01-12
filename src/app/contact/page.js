import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import ContactPage from '@/components/Contact/ContactPage';

export const metadata = {
  title: 'Contact Us - Exponential By Design (XBD) Official Website',
  description:
    'Connect with the Exponential By Design (XBD) team for questions, strategy sessions, or to learn more about our exponential growth frameworks and consulting services.',
  robots: {
    follow: true,
  },
  alternates: {
    canonical: 'https://xbd.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us - Exponential By Design (XBD) Official Website',
    description:
      'Connect with the Exponential By Design (XBD) team for questions, strategy sessions, or to learn more about our exponential growth frameworks.',
    url: 'https://xbd.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Exponential By Design (XBD) Official Website',
    description:
      'Connect with the Exponential By Design (XBD) team for questions, strategy sessions, or consulting services.',
  },
};

const Contact = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

import React from 'react';
import Header from '../components/main/Header';
import About from '../components/main/About';
import Footer from '../components/main/Footer';

export default function Main() {
  return (
    <div className="flex flex-col bg-slate-100 h-screen w-screen p-4 gap-3">
        <Header />
        <About />
        <Footer />
      </div>
  )
}

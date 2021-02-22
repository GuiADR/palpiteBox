import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Template;
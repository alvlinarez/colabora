import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/components/layout/layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

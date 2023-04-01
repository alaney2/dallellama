import React from 'react';
import Link from 'next/link';

const Header = ({ onThemeToggle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <Link href="/" >Timeline </Link>
      <button onClick={scrollToTop}>Scroll to Top</button>
      <button onClick={onThemeToggle}>Toggle Theme</button>
      {/* Add your CSS here or use a CSS-in-JS solution */}
    </header>
  );
};

export default Header;

// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="pt-12 pb-2 text-center">
      {/* The main app title with a cool gradient */}
      <h1 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
        SnapShot
      </h1>
      <p className="mt-2 text-slate-500 font-medium">
        Unsplash powered image gallery
      </p>
    </header>
  );
}

export default Header;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ searchTerm, setSearchTerm, onSearch }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="bg-white shadow-md w-full">
  <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between  px-4 py-4  md:gap-6">
    {/* Logo Section */}
    <div className="flex items-center space-x-2 w-full md:w-auto">
      <img
        src="cook-book.png"
        className="w-12 h-12 object-contain"
        alt="Cook Book Logo"
      />
      <h1 className="text-xl font-bold">
        Cook<span className="text-orange-400">Now</span>
      </h1>
    </div>

    {/* Search Bar */}
    <div className="flex w-full md:w-1/2 items-center space-x-2">
      <input
        type="text"
        placeholder="Enter Recipe"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-2 border-black rounded-md h-10 w-full px-3 text-sm md:text-base"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-400 text-white rounded-md h-10 px-4 hover:bg-orange-500 text-sm whitespace-nowrap"
      >
        Search
      </button>
    </div>
    
  </div>
</header>

  );
};

export default Header;

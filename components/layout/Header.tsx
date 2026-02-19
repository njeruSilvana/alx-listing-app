import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section: Logo, Search, Auth */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            🏠 PropertyHub
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md w-full">
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Navigation: Types of Accommodation */}
        <nav className="border-t pt-4">
          <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Rooms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Mansion
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Countryside
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Beachfront
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Cabins
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Apartments
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
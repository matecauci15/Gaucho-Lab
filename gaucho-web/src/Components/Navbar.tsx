// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export const Navbar: React.FC = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);


//     return (
//         <div>
//       {/* Navbar */}
//       <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//                 GAUCHO LAB
//               </span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="flex items-center space-x-8">
//                 <a href="#" className= " text-white hover:text-blue-500 transition-colors">Home</a>
//                 <a href="#" className="text-white hover:text-blue-500 transition-colors">Services</a>
//                 <a href="#" className="text-white hover:text-blue-500 transition-colors">About</a>
//                 <a href="#" className="text-white hover:text-blue-500 transition-colors">Contact</a>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-300 hover:text-white"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Home</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Services</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>
//         </div>
// )}

import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent 
              hover:from-purple-600 hover:to-cyan-500 transition-all duration-500">
              GAUCHO LAB
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-transform duration-300 hover:rotate-180"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4 text-sm">About CashKaro</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4 text-sm">Useful Reads</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy & Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white">Anti-Spam Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4 text-sm">Special Pages</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">Refer and Earn</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Become our Partner</a></li>
            <li><a href="#" className="hover:text-white">Student Program</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4 text-sm">Connect With Us</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4 text-sm">Let's Get Social</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><LinkedIn /></a>
          </div>
          <h3 className="font-bold text-white mb-2 text-sm">Download App</h3>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <a href="#"><img src="https://placehold.co/135x40/000000/ffffff?text=Google+Play" alt="Google Play" className="h-10"/></a>
            <a href="#"><img src="https://placehold.co/135x40/000000/ffffff?text=App+Store" alt="App Store" className="h-10"/></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-700 text-xs text-gray-500">
        (C) Copyright 2023 CashKaro. All Rights Reserved.
      </div>
    </footer>
  );
};
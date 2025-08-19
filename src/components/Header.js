import React from 'react';
import { Menu, Search, HelpOutline, AccountCircle } from '@mui/icons-material';

export default function Header() {
  return (
    <header className="bg-white p-3 flex justify-between items-center shadow sticky top-0 z-50 w-full">
      <div className="flex items-center space-x-4">
        <Menu className="cursor-pointer text-gray-700" />
        <a href="/" className="flex items-center">
          <img src="/images/cashkaro_logo.png" alt="CashKaro Logo" className="h-8 w-auto" />
        </a>
      </div>
      <div className="hidden md:flex flex-grow max-w-xl items-center rounded-md p-2 mx-4 bg-gray-50">
        <Search className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search for any brand or product" 
          className="outline-none ml-2 w-full bg-transparent text-sm" 
        />
      </div>
      <div className="flex items-center space-x-3 md:space-x-5">
        <div className="hidden md:flex items-center">
          <span className="font-semibold text-gray-800">₹12,102.4</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <HelpOutline className="text-gray-600" />
          <span className="hidden lg:block ml-1 font-medium text-sm">Help</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <AccountCircle className="text-gray-600"/>
          <span className="hidden lg:block ml-1 font-medium text-sm">Profile</span>
        </div>
      </div>
    </header>
  );
}
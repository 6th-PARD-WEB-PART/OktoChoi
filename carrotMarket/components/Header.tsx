
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [location, setLocation] = useState('송도동');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link href="/" className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/aa1565715a7c63aa7d986d857e515b00/8f5b1992330ec73852c42f5b77bf90db.png" 
                alt="로고" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6">
              <Link href="/products" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">중고거래</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">부동산</Link>
              <Link href="/community" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">중고차</Link>
              <Link href="/local" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">알바</Link>
              <Link href="/business" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">동네업체</Link>
              <Link href="/fleamarket" className="text-gray-700 hover:text-orange-500 font-medium text-sm xl:text-base">동네생활</Link>
              <span className="text-gray-700 font-medium text-sm xl:text-base">모임</span>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className={`${showMenu ? 'ri-close-line' : 'ri-menu-line'} text-gray-700 text-xl`}></i>
            </button>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-700">
              <i className="ri-map-pin-line text-orange-500"></i>
              <span className="text-sm">{location}</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <button className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-orange-600 whitespace-nowrap text-sm sm:text-base">
              글쓰기
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="py-4 space-y-3">
              <Link href="/products" className="block text-gray-700 hover:text-orange-500 font-medium">중고거래</Link>
              <Link href="/jobs" className="block text-gray-700 hover:text-orange-500 font-medium">부동산</Link>
              <Link href="/community" className="block text-gray-700 hover:text-orange-500 font-medium">중고차</Link>
              <Link href="/local" className="block text-gray-700 hover:text-orange-500 font-medium">알바</Link>
              <Link href="/business" className="block text-gray-700 hover:text-orange-500 font-medium">동네업체</Link>
              <Link href="/fleamarket" className="block text-gray-700 hover:text-orange-500 font-medium">동네생활</Link>
              <span className="block text-gray-700 font-medium">모임</span>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-700">
                  <i className="ri-map-pin-line text-orange-500"></i>
                  <span className="text-sm">{location}</span>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

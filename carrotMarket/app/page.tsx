
'use client';

import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchStore } from '../lib/searchStore';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const { setSearchTerm } = useSearchStore();
  const router = useRouter();

  const handleSearch = () => {
    if (localSearchTerm.trim()) {
      setSearchTerm(localSearchTerm.trim());
      router.push('/products');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    router.push('/products');
  };

  const categories = [
    { name: '중고거래', icon: 'ri-shopping-bag-3-line', href: '/products' },
    { name: '알바', icon: 'ri-briefcase-line', href: '/jobs' },
    { name: '부동산', icon: 'ri-home-4-line', href: '/realestate' },
    { name: '중고차', icon: 'ri-car-line', href: '/cars' },
    { name: '동네업체', icon: 'ri-store-2-line', href: '/business' },
    { name: '동네생활', icon: 'ri-community-line', href: '/community' },
    { name: '모임', icon: 'ri-group-line', href: '/groups' }
  ];

  const popularAreas = [
    '송도동', '역삼동', '홍대동', '협실동', '배광동', '서교동', '우정동', '신림동',
    '광당동', '합정동', '회동동', '다선동', '미금동', '업구장동', '배곡동', '오정동'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            <i className="ri-map-pin-line text-orange-500 mr-2"></i>
            송도동에서 알바 찾고 계신가요?
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto mt-6 sm:mt-8 space-y-4 sm:space-y-0">
            <div className="flex items-center bg-gray-800 rounded-full px-4 py-3 sm:mr-4 w-full sm:w-auto justify-center sm:justify-start">
              <i className="ri-map-pin-line text-white mr-2"></i>
              <span className="text-white text-sm">송도동</span>
              <i className="ri-arrow-down-s-line text-white ml-2"></i>
            </div>
            
            <div className="flex-1 relative w-full">
              <input
                type="text"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="물건이름을 입력해주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
              />
              <button 
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 p-2 rounded-lg"
              >
                <i className="ri-search-line text-white"></i>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs sm:text-sm text-gray-600 px-4">
            <span className="whitespace-nowrap">인기 검색어:</span>
            {['에어팟', '에어팟3', '노트북', '원룸', '현대 중고차', '아침일감', '급식당', '배달'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => handleTagClick(tag)}
                className="text-orange-500 hover:underline whitespace-nowrap cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white p-4 sm:p-6 rounded-2xl text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <i className={`${category.icon} text-orange-500 text-lg sm:text-xl`}></i>
              </div>
              <span className="text-gray-700 font-medium text-xs sm:text-sm">{category.name}</span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3">
          {popularAreas.map((area) => (
            <button
              key={area}
              className="bg-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              {area}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

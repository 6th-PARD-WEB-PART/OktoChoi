
'use client';

import { useState, useEffect } from 'react';
import { useSearchStore } from '../lib/searchStore';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    if (localSearchTerm.trim()) {
      setSearchTerm(localSearchTerm.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    setLocalSearchTerm(tag);
  };
  
  const popularTags = [
    '에어팟', '아이폰', '삼성', '냉장고', '자전거', '노트북', '의자', '책상'
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative min-w-0 w-full sm:w-auto">
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
              <i className="ri-search-line text-white text-sm sm:text-base"></i>
            </button>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700 cursor-pointer">
            <i className="ri-map-pin-line text-orange-500"></i>
            <span className="text-sm sm:text-base">송도동</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 overflow-x-auto">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700 whitespace-nowrap cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

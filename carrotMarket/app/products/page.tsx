'use client';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import FilterSidebar from '../../components/FilterSidebar';
import ProductCard from '../../components/ProductCard';
import { useState } from 'react';
import { useSearchStore } from '../../lib/searchStore';
import Link from 'next/link';

const products = [
  {
    id: '1',
    title: '길벗고 들일 소맥기도 4마리 360도 어울이브라미',
    price: '20,000원',
    location: '송도동',
    timeAgo: '몇초 전',
    imageUrl:
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment&width=300&height=300&seq=1',
    chatCount: 2,
    likeCount: 5,
  },
  {
    id: '2',
    title: '아이폰 14 프로 128GB 퍼플 깨끗한 상태',
    price: '850,000원',
    location: '송도1동',
    timeAgo: '5분 전',
    imageUrl:
      'https://readdy.ai/api/search-image?query=purple%20iPhone%2014%20Pro%20smartphone&width=300&height=300&seq=2',
    chatCount: 8,
    likeCount: 12,
  },
];

export default function ProductsPage() {
  const [showFilter, setShowFilter] = useState(false);
  const { searchTerm } = useSearchStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-4 sm:gap-6">
          {/* 필터 */}
          <div
            className={`${showFilter ? 'block' : 'hidden'} lg:block absolute lg:relative top-0 left-0 w-full lg:w-auto`}
          >
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setShowFilter(false)}
            />
            <FilterSidebar />
          </div>

          {/* 상품 목록 */}
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              {searchTerm ? `"${searchTerm}" 검색 결과` : '전체 상품'}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => (
                <Link key={p.id} href={`/productDetail/${p.id}`}>
                  <ProductCard
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    location={p.location}
                    timeAgo={p.timeAgo}
                    imageUrl={p.imageUrl}
                    chatCount={p.chatCount}
                    likeCount={p.likeCount}
                    isLiked={false}
                    onToggleLike={() => {}}
                    onCardClick={() => {}}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

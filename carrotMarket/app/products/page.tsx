
'use client';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import FilterSidebar from '../../components/FilterSidebar';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import { useState } from 'react';
import { useSearchStore } from '../../lib/searchStore';

const products = [
  {
    id: '1',
    title: '길벗고 들일 소맥기도 4마리 360도 어울이브라미',
    price: '20,000원',
    location: '송도동',
    timeAgo: '몇초 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20with%20simple%20background%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=300&height=300&seq=1&orientation=squarish',
    chatCount: 2,
    likeCount: 5,
    description: '거의 완전새제품입니다 기스도없어요 입문용으로 좋아용',
    seller: {
      name: 'kksa',
      rating: '39.4°C 😃',
      location: '왕십리도선동'
    },
    images: [
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20with%20simple%20background%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=400&height=400&seq=1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20different%20angle%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=400&height=400&seq=1a&orientation=squarish'
    ]
  },
  {
    id: '2',
    title: '아이폰 14 프로 128GB 퍼플 깨끗한 상태',
    price: '850,000원',
    location: '송도1동',
    timeAgo: '5분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=purple%20iPhone%2014%20Pro%20smartphone%20in%20excellent%20condition%2C%20clean%20product%20photography%20with%20simple%20white%20background%2C%20professional%20lighting%2C%20modern%20technology%20device&width=300&height=300&seq=2&orientation=squarish',
    chatCount: 8,
    likeCount: 12
  },
  {
    id: '3',
    title: '삼성 냉장고 2도어 일반형 깨끗합니다',
    price: '250,000원',
    location: '연수동',
    timeAgo: '10분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=white%20Samsung%20two-door%20refrigerator%20in%20clean%20condition%2C%20home%20appliance%20product%20photography%2C%20simple%20background%2C%20professional%20lighting%2C%20kitchen%20appliance&width=300&height=300&seq=3&orientation=squarish',
    chatCount: 3,
    likeCount: 7
  },
  {
    id: '4',
    title: '맥북 에어 M1 13인치 실버 2021년형',
    price: '980,000원',
    location: '동춘동',
    timeAgo: '15분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=silver%20MacBook%20Air%20M1%20laptop%20computer%202021%20model%2C%20clean%20product%20photography%2C%20simple%20white%20background%2C%20professional%20tech%20product%20shot%2C%20modern%20laptop&width=300&height=300&seq=4&orientation=squarish',
    chatCount: 15,
    likeCount: 23
  },
  {
    id: '5',
    title: '자전거 로드바이크 트렉 26인치 성인용',
    price: '180,000원',
    location: '청학동',
    timeAgo: '20분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=red%20Trek%20road%20bike%20bicycle%2026%20inch%20for%20adults%2C%20clean%20product%20photography%2C%20simple%20background%2C%20professional%20sports%20equipment%20shot%2C%20cycling%20gear&width=300&height=300&seq=5&orientation=squarish',
    chatCount: 4,
    likeCount: 9
  },
  {
    id: '6',
    title: '다이슨 V11 무선청소기 정품 박스 포함',
    price: '320,000원',
    location: '송도2동',
    timeAgo: '25분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=Dyson%20V11%20cordless%20vacuum%20cleaner%20with%20original%20box%2C%20clean%20product%20photography%2C%20simple%20white%20background%2C%20professional%20home%20appliance%20shot%2C%20cleaning%20equipment&width=300&height=300&seq=6&orientation=squarish',
    chatCount: 11,
    likeCount: 18
  },
  {
    id: '7',
    title: '나이키 에어맥스 270 운동화 260mm',
    price: '95,000원',
    location: '송도동',
    timeAgo: '30분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20270%20sneakers%20size%20260mm%2C%20clean%20shoe%20product%20photography%2C%20simple%20white%20background%2C%20professional%20footwear%20shot%2C%20athletic%20shoes&width=300&height=300&seq=7&orientation=squarish',
    chatCount: 6,
    likeCount: 14
  },
  {
    id: '8',
    title: '아이패드 에어 4세대 64GB 와이파이 스카이블루',
    price: '450,000원',
    location: '연수동',
    timeAgo: '35분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=sky%20blue%20iPad%20Air%204th%20generation%2064GB%20WiFi%20model%2C%20clean%20tablet%20product%20photography%2C%20simple%20white%20background%2C%20professional%20tech%20device%20shot%2C%20modern%20tablet%20computer&width=300&height=300&seq=8&orientation=squarish',
    chatCount: 9,
    likeCount: 21
  },
  {
    id: '9',
    title: '소니 플레이스테이션5 디스크 에디션 새제품',
    price: '650,000원',
    location: '동춘동',
    timeAgo: '40분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=Sony%20PlayStation%205%20disc%20edition%20gaming%20console%20brand%20new%2C%20clean%20product%20photography%2C%20simple%20white%20background%2C%20professional%20gaming%20equipment%20shot%2C%20modern%20game%20console&width=300&height=300&seq=9&orientation=squarish',
    chatCount: 25,
    likeCount: 35
  },
  {
    id: '10',
    title: 'LG 통돌이 세탁기 15kg 대용량 깨끗함',
    price: '380,000원',
    location: '청학동',
    timeAgo: '45분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=LG%20top%20loading%20washing%20machine%2015kg%20large%20capacity%20in%20clean%20condition%2C%20home%20appliance%20product%20photography%2C%20simple%20background%2C%20professional%20laundry%20equipment%20shot&width=300&height=300&seq=10&orientation=squarish',
    chatCount: 2,
    likeCount: 8
  },
  {
    id: '11',
    title: '캐논 EOS R6 바디 + 렌즈 24-105mm',
    price: '1,200,000원',
    location: '송도1동',
    timeAgo: '50분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=Canon%20EOS%20R6%20camera%20body%20with%2024-105mm%20lens%2C%20professional%20photography%20equipment%2C%20clean%20product%20photography%2C%20simple%20white%20background%2C%20camera%20gear&width=300&height=300&seq=11&orientation=squarish',
    chatCount: 7,
    likeCount: 16
  },
  {
    id: '12',
    title: '이케아 책상 화이트 120x60 조립완료',
    price: '65,000원',
    location: '송도동',
    timeAgo: '55분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=white%20IKEA%20desk%20120x60cm%20already%20assembled%2C%20clean%20furniture%20product%20photography%2C%20simple%20background%2C%20professional%20home%20furniture%20shot%2C%20modern%20desk&width=300&height=300&seq=12&orientation=squarish',
    chatCount: 3,
    likeCount: 11
  }
];

export default function ProductsPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState<{[key: string]: boolean}>({});
  const { searchTerm } = useSearchStore();

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleToggleLike = (productId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex gap-4 sm:gap-6">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
            >
              <i className="ri-filter-line text-gray-600"></i>
            </button>
          </div>

          {/* Filter Sidebar */}
          <div className={`${showFilter ? 'block' : 'hidden'} lg:block absolute lg:relative top-0 left-0 w-full lg:w-auto z-40 lg:z-auto`}>
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowFilter(false)}></div>
            <div className="relative lg:static">
              <FilterSidebar />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                {searchTerm ? `"${searchTerm}" 검색 결과` : '전체 상품'}
              </h1>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  location={product.location}
                  timeAgo={product.timeAgo}
                  imageUrl={product.imageUrl}
                  chatCount={product.chatCount}
                  likeCount={product.likeCount}
                  isLiked={likedProducts[product.id] || false}
                  onToggleLike={(e) => handleToggleLike(product.id, e)}
                  onCardClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isLiked={likedProducts[selectedProduct.id] || false}
          onToggleLike={() => handleToggleLike(selectedProduct.id)}
        />
      )}
    </div>
  );
}

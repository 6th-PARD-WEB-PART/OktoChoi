
'use client';

import Header from '../../../components/Header';
import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: '1',
    title: '길벗고 들일 소맥기도 4마리 360도 어울이브라미',
    price: '20,000원',
    location: '송도동',
    timeAgo: '몇초 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20with%20simple%20background%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=400&height=400&seq=1&orientation=squarish',
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
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20different%20angle%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=400&height=400&seq=1a&orientation=squarish',
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment%20detail%20view%2C%20product%20photography%20style%2C%20clean%20white%20background%2C%20well-lit%20professional%20product%20shot&width=400&height=400&seq=1b&orientation=squarish'
    ]
  },
  {
    id: '2',
    title: '아이폰 14 프로 128GB 퍼플 깨끗한 상태',
    price: '850,000원',
    location: '송도1동',
    timeAgo: '5분 전',
    imageUrl: 'https://readdy.ai/api/search-image?query=purple%20iPhone%2014%20Pro%20smartphone%20in%20excellent%20condition%2C%20clean%20product%20photography%20with%20simple%20white%20background%2C%20professional%20lighting%2C%20modern%20technology%20device&width=400&height=400&seq=2&orientation=squarish',
    chatCount: 8,
    likeCount: 12,
    description: '아이폰 14 프로 128GB 퍼플색상입니다. 매우 깨끗한 상태로 보관했습니다.',
    seller: {
      name: '아이폰매니아',
      rating: '36.5°C 😊',
      location: '송도1동'
    },
    images: [
      'https://readdy.ai/api/search-image?query=purple%20iPhone%2014%20Pro%20smartphone%20in%20excellent%20condition%2C%20clean%20product%20photography%20with%20simple%20white%20background%2C%20professional%20lighting%2C%20modern%20technology%20device&width=400&height=400&seq=2&orientation=squarish'
    ]
  }
];

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 이미지 섹션 */}
            <div className="p-6">
              <div className="aspect-square mb-4">
                <img
                  src={product.images ? product.images[currentImageIndex] : product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        currentImageIndex === index ? 'border-orange-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 상품 정보 섹션 */}
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <div className="text-3xl font-bold text-gray-900 mb-4">{product.price}</div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{product.location}</span>
                  <span>•</span>
                  <span>{product.timeAgo}</span>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <i className="ri-chat-3-line w-4 h-4 flex items-center justify-center"></i>
                    <span>채팅 {product.chatCount}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
                    <span>관심 {product.likeCount}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                    <span>조회 317</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* 판매자 정보 */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-gray-500 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{product.seller.name}</div>
                    <div className="text-sm text-gray-500">{product.seller.location}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm font-medium text-green-600">{product.seller.rating}</span>
                  </div>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-shrink-0 p-3 rounded-lg border border-gray-300 hover:bg-gray-50 ${
                    isLiked ? 'text-red-500 bg-red-50 border-red-200' : 'text-gray-600'
                  }`}
                >
                  <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-xl`}></i>
                </button>
                <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 whitespace-nowrap">
                  당근 채팅하기
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link
            href="/products"
            className="inline-flex items-center text-orange-500 hover:text-orange-600"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

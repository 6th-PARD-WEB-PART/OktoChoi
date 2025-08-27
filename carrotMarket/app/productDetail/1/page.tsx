'use client';

import Header from '../../../components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetail1() {
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    title: '길벗고 들일 소맥기도 4마리 360도 어울이브라미',
    price: '20,000원',
    location: '송도동',
    timeAgo: '몇초 전',
    description: '거의 완전새제품입니다 기스도없어요 입문용으로 좋아용',
    chatCount: 2,
    likeCount: 5,
    seller: { name: 'kksa', rating: '39.4°C 😃', location: '왕십리도선동' },
    imageUrl:
      'https://readdy.ai/api/search-image?query=vintage%20green%20electronic%20device%20cleaning%20equipment&width=400&height=400&seq=1',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg overflow-hidden p-6">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full rounded-lg mb-6"
          />

          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className="text-3xl font-bold mb-4">{product.price}</div>
          <div className="flex text-sm text-gray-500 space-x-2 mb-4">
            <span>{product.location}</span>
            <span>•</span>
            <span>{product.timeAgo}</span>
          </div>
          <p className="mb-6">{product.description}</p>

          <div className="border-t pt-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-gray-500 text-xl"></i>
              </div>
              <div>
                <div className="font-medium">{product.seller.name}</div>
                <div className="text-sm text-gray-500">
                  {product.seller.location}
                </div>
              </div>
              <div className="ml-auto text-green-600 text-sm font-medium">
                {product.seller.rating}
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-lg border ${
                isLiked
                  ? 'text-red-500 bg-red-50 border-red-200'
                  : 'text-gray-600 border-gray-300'
              }`}
            >
              <i
                className={`${
                  isLiked ? 'ri-heart-fill' : 'ri-heart-line'
                } text-xl`}
              ></i>
            </button>
            <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg">
              당근 채팅하기
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/products"
            className="text-orange-500 hover:text-orange-600 inline-flex items-center"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

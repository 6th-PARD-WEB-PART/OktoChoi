
'use client';

import { useState } from 'react';

interface ProductModalProps {
  product: {
    id: string;
    title: string;
    price: string;
    location: string;
    timeAgo: string;
    imageUrl: string;
    chatCount: number;
    likeCount: number;
    description?: string;
    seller?: {
      name: string;
      rating: string;
      location: string;
    };
    images?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: () => void;
}

export default function ProductModal({ 
  product, 
  isOpen, 
  onClose, 
  isLiked, 
  onToggleLike 
}: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const description = product.description || '거의 완전새제품입니다 기스도없어요 입문용으로 좋아용';
  const seller = product.seller || {
    name: 'kksa',
    rating: '39.4°C 😃',
    location: '왕십리도선동'
  };
  const images = product.images || [product.imageUrl];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">상품 상세</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* 이미지 섹션 */}
              <div>
                <div className="aspect-square mb-4">
                  <img
                    src={images[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
                
                {images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {images.map((image, index) => (
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
              <div>
                <div className="mb-6">
                  <h1 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h1>
                  <div className="text-2xl font-bold text-gray-900 mb-4">{product.price}</div>
                  
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
                    {description}
                  </p>
                </div>

                {/* 판매자 정보 */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-gray-500"></i>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{seller.name}</div>
                      <div className="text-sm text-gray-500">{seller.location}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-sm font-medium text-green-600">{seller.rating}</span>
                    </div>
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="flex space-x-3">
                  <button
                    onClick={onToggleLike}
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
        </div>
      </div>
    </div>
  );
}

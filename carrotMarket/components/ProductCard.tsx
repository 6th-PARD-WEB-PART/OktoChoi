'use client';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  imageUrl: string;
  chatCount: number;
  likeCount: number;
  isLiked: boolean;
  onToggleLike: (e: React.MouseEvent) => void;
  onCardClick: () => void;
}

export default function ProductCard({
  id,
  title,
  price,
  location,
  timeAgo,
  imageUrl,
  chatCount,
  likeCount,
  isLiked,
  onToggleLike,
  onCardClick,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* 카드 전체를 바깥에서 <Link>로 감싸는 전제 */}
      <div className="cursor-pointer" onClick={onCardClick}>
        <div className="aspect-square relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2 text-sm sm:text-base leading-tight">
            {title}
          </h3>

          <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            {price}
          </div>

          <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
            {location} • {timeAgo}
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <i className="ri-chat-3-line w-4 h-4 flex items-center justify-center"></i>
              <span>{chatCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
              <span>{likeCount}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleLike}
              className={`p-2 rounded-lg transition-colors ${
                isLiked
                  ? 'text-red-500 bg-red-50 hover:bg-red-100'
                  : 'text-gray-400 hover:text-red-500 hover:bg-gray-50'
              }`}
            >
              <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-lg`}></i>
            </button>

            {/* 내부 Link 제거: 겉의 <Link>가 네비게이션 담당 */}
            <span className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">
              자세히
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


'use client';

import { useState } from 'react';

export default function FilterSidebar() {
  const [showPriceOnly, setShowPriceOnly] = useState(false);

  const districts = [
    '송도동', '송도1동', '송도2동', '연수동', '동춘동', '청학동'
  ];

  return (
    <div className="w-full lg:w-64 bg-white p-4 space-y-6 lg:border-0 border border-gray-200 rounded-lg lg:rounded-none">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">필터</h3>
        <button className="text-orange-500 text-sm">초기화</button>
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showPriceOnly}
            onChange={(e) => setShowPriceOnly(e.target.checked)}
            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span className="ml-2 text-sm text-gray-700">거래 가능만 보기</span>
        </label>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">위치</h4>
        <div className="text-sm text-gray-600 mb-2">인천광역시 연수구</div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {districts.map((district) => (
            <label key={district} className="flex items-center">
              <input
                type="radio"
                name="location"
                value={district}
                defaultChecked={district === '송도동'}
                className="text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{district}</span>
            </label>
          ))}
        </div>
        <button className="text-orange-500 text-sm mt-2">더보기</button>
      </div>
    </div>
  );
}

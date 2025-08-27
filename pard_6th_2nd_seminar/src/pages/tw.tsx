// pages/tw.tsx
import Link from "next/link";

export default function TCPage() {
  return (
    <div className="min-h-screen grid place-items-center bg-black">
      <div className="w-80 md:w-96 rounded-2xl p-8 text-white bg-gradient-to-b from-emerald-600 to-teal-500 shadow-2xl">
        <h1 className="text-2xl font-extrabold mb-4">자기소개 (Tailwind)</h1>
        <p className="text-lg leading-8"><b className="font-bold mr-2">이름 :</b> 최옥토</p>
        <p className="text-lg leading-8"><b className="font-bold mr-2">나이 :</b> 21살</p>
        <p className="text-lg leading-8"><b className="font-bold mr-2">취미 :</b> 기타</p>
        <p className="text-lg leading-8"><b className="font-bold mr-2">전공 :</b> 전산심화</p>
        <Link href="/" className="inline-block mt-4 underline font-semibold">← 홈으로</Link>
      </div>
    </div>
  );
}

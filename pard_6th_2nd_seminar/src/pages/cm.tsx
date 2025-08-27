// pages/cm.tsx
import Link from "next/link";
import styles from "@/styles/cm.module.css";

export default function CMPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h1 className={styles.title}>자기소개 (CSS Module)</h1>
        <p className={styles.row}><b>이름 :</b> 최옥토</p>
        <p className={styles.row}><b>나이 :</b> 21살</p>
        <p className={styles.row}><b>취미 :</b> 기타</p>
        <p className={styles.row}><b>전공 :</b> 전산심화</p>
        <Link href="/" className={styles.back}>← 홈으로</Link>
      </div>
    </div>
  );
}

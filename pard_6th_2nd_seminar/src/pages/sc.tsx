// pages/sc.tsx
import styled from "styled-components";
import Link from "next/link";

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0b0b0b;
`;

const Card = styled.div`
  width: 360px;
  padding: 2rem;
  border-radius: 1rem;
  color: #fff;
  background: linear-gradient(180deg, #1e40af, #0ea5e9);
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Row = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  b { font-weight: 700; margin-right: .5rem; }
`;

const Back = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export default function SCPage() {
  return (
    <Wrap>
      <Card>
        <Title>자기소개 (styled-components)</Title>
        <Row><b>이름 :</b> 최옥토</Row>
        <Row><b>나이 :</b> 21살</Row>
        <Row><b>취미 :</b> 기타</Row>
        <Row><b>전공 :</b> 전산심화</Row>
        <Link href="/" legacyBehavior><Back>← 홈으로</Back></Link>
      </Card>
    </Wrap>
  );
}

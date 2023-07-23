import Link from "next/link";
import React from "react";

const NaveBarPage = () => {
  return (
    <main className="navbarMain">
      <Link href="/" className="logo">
        <h1 className="sub">SUB</h1>
        <h1 className="way">WAY</h1>
      </Link>
      <nav className="nav">
        <ul className="mainMenu">
          <li>
            <Link href="/menu/sandwich">메뉴소개</Link>
          </li>
          <li>
            <Link href="#">이용방법</Link>
          </li>
          <li>
            <Link href="#">새소식</Link>
          </li>
          <li>
            <Link href="#">써브웨이</Link>
          </li>
          <li>
            <Link href="#">가맹점</Link>
          </li>
          <li>
            <Link href="#">온라인 주문</Link>
          </li>
        </ul>
        <ul className="subMenu">
          <li>
            <Link href="/menu/sandwich">샌드위치</Link>
            <Link href="/">랩 · 기타</Link>
            <Link href="/">샐러드</Link>
            <Link href="/">아침메뉴</Link>
            <Link href="/">스마일 썹</Link>
            <Link href="/">단체메뉴</Link>
          </li>
          <li>
            <Link href="/">써브웨이 이용방법</Link>
            <Link href="/">단체메뉴 이용방법</Link>
            <Link href="/">신선한 재료 소개</Link>
            <Link href="/">App 이용방법</Link>
          </li>
          <li>
            <Link href="/">이벤트 · 프로모션</Link>
            <Link href="/">뉴스 · 공지사항</Link>
            <Link href="/">광고영상</Link>
          </li>
          <li>
            <Link href="/">써브웨이 역사</Link>
            <Link href="/">써브웨이 약속</Link>
            <Link href="/">샌드위치 아티스트 지원</Link>
            <Link href="/">매장찾기</Link>
          </li>
          <li>
            <Link href="/">써브웨이 프랜차이즈</Link>
            <Link href="/">가맹관련 FAQ</Link>
            <Link href="/">가맹신청 · 문의</Link>
            <Link href="/">지사안내</Link>
            <Link href="/">사업설명회</Link>
          </li>
          <li>
            <Link href="/">FAST-SUB</Link>
            <Link href="/">HOME-SUB</Link>
            <Link href="/">단체주문</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NaveBarPage;

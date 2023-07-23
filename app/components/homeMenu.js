import Image from "next/image";
import Link from "next/link";
import React from "react";
import menu_1 from "../../public/img/sandwich-img/abocado-chicken.png";
import menu_2 from "../../public/img/sandwich-img/Egg-Mayo.png";
import menu_3 from "../../public/img/sandwich-img/Italian_B.M.T.png";
import menu_4 from "public/img/sandwich-img/Roasted-Chicken.png";
import { SlMagnifierAdd } from "react-icons/sl";

const HomeMenu = () => {
  return (
    <main className="homeMenu">
      <h2>Subway's Menu</h2>
      <div className="menuBox">
        <ul className="menuUl">
          <li>
            <Link href="menu/sandwich">
              <Image src={menu_1} alt="아보카도치킨" />
              <strong>치킨 베이컨 아보카도</strong>
              <p>
                담백하게 닭가슴살로 만든 치킨 슬라이스와 베이컨,
                <br />
                부드러운 아보카도의 만남
              </p>
              <div className="iconBox">
                <SlMagnifierAdd className="icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="menu/sandwich">
              <Image src={menu_2} alt="에그마요" />
              <strong>에그마요</strong>
              <p>
                부드러운 달걀과 고소한 마요네즈가 만나
                <br />더 부드러운 스테디셀러
              </p>
              <div className="iconBox">
                <SlMagnifierAdd className="icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="menu/sandwich">
              <Image src={menu_3} alt="비엠티" />
              <strong>이탈리안 비엠티</strong>
              <p>
                페퍼로니, 살라미 그리고 햄이 만들어내는 최상의
                <br />
                조화! 전세계가 사랑하는 써브웨이의 베스트셀러!
              </p>
              <div className="iconBox">
                <SlMagnifierAdd className="icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="menu/sandwich">
              <Image src={menu_4} alt="로스트치킨" />
              <strong>로스트 치킨</strong>
              <p>
                오븐에 구워 담백한 저칼로리 닭가슴살의
                <br />
                건강한 풍미
              </p>
              <div className="iconBox">
                <SlMagnifierAdd className="icon" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default HomeMenu;

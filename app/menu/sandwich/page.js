import Image from "next/image";
import React from "react";
import visual_sand from "public/img/img_visual_sandwich.jpg";
import { SlMagnifierAdd } from "react-icons/sl";

const SandwichPage = () => {
  //
  const listData = [
    {
      name: "치킨 베이컨 아보카도",
      eng: "Chicken Bacon Avocado",
      kcal: 355,
      desc: "담백하게 닭가슴살로 만든 치킨 슬라이스와 베이컨, 부드러운 아보카도의 만남",
      img: {
        src: "/_next/static/media/abocado-chicken.1940e0d8.png",
        height: 800,
        width: 1140,
      },
    },
    {
      name: "에그마요",
      eng: "Egg Mayo",
      kcal: 416,
      desc: "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
      img: {
        src: "/_next/static/media/Egg-Mayo.79e7d493.png",
        height: 800,
        width: 1140,
      },
    },
    {
      name: "이탈리안 비엠티",
      eng: "Italian B.M.T.™",
      kcal: 388,
      desc: "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러! Biggest Meatiest Tastiest, its'B.M.T.",
      img: {
        src: "/_next/static/media/Italian_B.M.T.e86772b6.png",
        height: 800,
        width: 1140,
      },
    },
    {
      name: "로스트 치킨",
      eng: "Roasted Chicken",
      kcal: 300,
      desc: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
      img: {
        src: "/_next/static/media/Roasted-Chicken.fdc49bf1.png",
        height: 800,
        width: 1140,
      },
    },
    {
      name: "New 쉬림프",
      eng: "Shrimp",
      kcal: 241,
      desc: "Bigger is Better, 더 커지고 맛있어진 써브웨이 New 쉬림프를 만나보세요.",
      img: {
        src: "/_next/static/media/shrimp.37a0ac35.png",
        height: 800,
        width: 1140,
      },
    },
    {
      name: "써브웨이 클럽",
      eng: "Subway Club™",
      kcal: 299,
      desc: "고소한 베이컨, 담백한 치킨 슬라이스에 햄까지 더해진 완벽한 앙상블",
      img: {
        src: "/_next/static/media/Subway-Club.e4d38381.png",
        height: 800,
        width: 1140,
      },
    },
  ];

  return (
    <main className="sandwichPage">
      <div style={{ height: "220px" }}></div>
      <article className="image_wrap">
        <Image src={visual_sand} width />
        <div className="img_text">
          <h2 style={{ fontSize: "4.5em" }}>SandWich</h2>
          <p>
            전세계 넘버원 브랜드 Subway!
            <br />
            50년 전통의 세계 최고의 샌드위치를 맛보세요!
          </p>
        </div>
        <div className="tabBox">
          <ul className="tabList">
            <li>All</li>
            <li>클래식</li>
            <li>프레쉬&라이트</li>
            <li>프리미엄</li>
            <li>신제품</li>
            <li>추가 선택</li>
          </ul>
        </div>
      </article>

      {/*Menu List*/}
      <article className="grid_wrap">
        <ul className="container">
          {listData.map((menu) => (
            <li className="item">
              <Image src={menu.img} className="img" />
              <div className="listText">
                <h2 style={{ margin: "0" }}>{menu.name}</h2>
                <p style={{ margin: "0 0 15px 0" }}>{menu.eng}</p>
                <b>{menu.kcal} kcal</b>
              </div>
              <div className="hiddenText">
                <h2 style={{ margin: "0" }}>{menu.name}</h2>
                <p style={{ margin: "0 0 15px 0" }}>{menu.eng}</p>
                <p style={{ fontSize: "14px", color: "bisque" }}>{menu.desc}</p>
                <div className="ListIconBox">
                  <SlMagnifierAdd className="ListIcon" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};
export default SandwichPage;

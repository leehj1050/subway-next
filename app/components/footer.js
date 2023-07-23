import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const FooterPage = () => {
  return (
    <main className="footerPage">
      <div>
        <ul className="infoContainer">
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>써브카드</li>
          <li>점주관리자</li>
          <li>Subway Listens</li>
        </ul>
      </div>
      <div className="footerLine"></div>
      <div>
        <ul className="addressContainer">
          <li>
            <p>
              김해시 분성로 486 포세이돈아파트 | 대표:HYEJIN LEE(이혜진) |
              전화:010-8244-2206 | 사업자등록번호:012-34-56789
            </p>
            <p>
              SUBWAY®is a Registered Trademark of Subway IP LLC.ⓒ2021 Subway IP
              LLC.All Rights Reserved.
            </p>
          </li>
          <li className="snsContainer">
            <ul className="snsIcons">
              <li>
                <BsInstagram style={{ marginTop: "8px" }} />
              </li>
              <li>
                <BsFacebook style={{ marginTop: "8px" }} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default FooterPage;

import Link from "next/link";
import React from "react";

const WhatsNew = () => {
  return (
    <main className="whatsNew">
      <div className="new_div1">
        <h2>What's New</h2>
        <p>
          써브웨이의 다양한 소식을
          <br />
          빠르게 전달해드립니다.
        </p>
      </div>
      <div className="new_div2">
        <ul>
          <li>
            <Link href="/">써브웨이와 함께하는 tvn '이번 생도 잘 부탁해'</Link>
          </li>
          <li>
            <Link href="/">써브웨이와 함께하는 tvn '뿅뿅 지구 오락실2'</Link>
          </li>
          <li>
            <Link href="/">써브웨이와 함께하는 채널A '하트시그널4'</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default WhatsNew;

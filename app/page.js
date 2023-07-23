import HomeMenu from "./components/homeMenu";
import SlidePage from "./components/slide";
import WhatsNew from "./components/whatsNew";

export default function Home() {
  return (
    <main className="homePage">
      <div style={{ height: "220px" }}></div>
      <SlidePage />
      <HomeMenu />
      <WhatsNew />
    </main>
  );
}

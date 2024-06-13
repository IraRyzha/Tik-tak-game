import { Header } from "../components/header";
import Game from "../components/game-new/game";

export default function HomePage() {
  return (
    <HomePageLayout>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 pb-6 mx-auto w-max">{children}</main>
    </div>
  );
}

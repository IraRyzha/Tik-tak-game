import { Header } from "../components/header";
import Game from "../components/game-new/game";
import UiTextField from "../components/uikit/ui-text-field";

export default function HomePage() {
  return (
    <HomePageLayout>
      {/* <Game /> */}
      <UiTextField
        label="testLabel"
        helperText="This is a help message."
        errorText="This is a error message."
        placeholder="testPlaceholder"
        required
      />
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

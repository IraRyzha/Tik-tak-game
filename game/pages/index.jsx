import { Header } from "../components/header";
import Game from "../components/game-new/game";
import UiTextField from "../components/uikit/fields/ui-text-field";
import UiSelectField from "../components/uikit/fields/ui-select-field";

export default function HomePage() {
  return (
    <HomePageLayout>
      {/* <Game /> */}
      {/* <UiTextField
        label="testLabel"
        helperText="This is a help message."
        errorText="This is a error message."
        placeholder="testPlaceholder"
        required
      /> */}
      <UiSelectField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="Helper text"
        // errorText="Error text"
        options={[
          { label: "Первый label", value: 1 },
          { label: "Второй label", value: 2 },
        ]}
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

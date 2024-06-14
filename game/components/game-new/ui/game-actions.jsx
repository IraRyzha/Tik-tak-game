import UiButton from "../../uikit/ui-button";

export function GameActions() {
  return (
    <>
      <UiButton size="md" variant="primary">
        Draw
      </UiButton>
      <UiButton size="md" variant="outline">
        Give up
      </UiButton>
    </>
  );
}

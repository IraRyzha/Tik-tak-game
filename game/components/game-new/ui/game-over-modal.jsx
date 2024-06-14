import UiButton from "../../uikit/ui-button";
import UiModal from "../../uikit/ui-modal";

export default function GameOverModal({ winnerName, players }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => {
        console.log("close");
      }}
    >
      <UiModal.Header>Game over</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-between mt-3">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Go back
        </UiButton>
        <UiButton size="md" variant="primary">
          Play again
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}

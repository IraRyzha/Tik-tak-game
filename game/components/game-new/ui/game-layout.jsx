export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="bg-white rounded-2xl shadow-md px-8 py-4 mt-5 grid grid-cols-2 gap-3 justify-between">
        {playersList}
      </div>
    </div>
  );
}

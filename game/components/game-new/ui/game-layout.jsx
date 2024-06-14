export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="border-2 pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="bg-white rounded-2xl shadow-md px-8 py-4 mt-5 grid grid-cols-2 gap-3 justify-between">
        {playersList}
      </div>
      <div className="bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 mt-6">
        <div className="flex items-center gap-3">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_31px)] grid-rows-[repeat(19,_31px)] pl-px pt-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}

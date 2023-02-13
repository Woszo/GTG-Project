import "./style.css";
import Panel from "./components/Panel";
import games from "./games";
import "bootstrap/dist/css/bootstrap.min.css";

function createPanel(game) {
  return (
    <div className="pt1">
      <Panel img={game.img} name={game.name} />
    </div>
  );
}

export default function App() {
  const SuggestedGames = games();

  return <div className="gamesGrid bg-dark"> {SuggestedGames.map(createPanel)}</div>;
}

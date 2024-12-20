import { hydrate, prerender as ssr } from "preact-iso";
import "./css/main.css";
import "./css/graph.css";
import continentMedals from "./data/continent_medals.json";

type Continent = {
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

const Medal = ({ type, count }: { type: "gold" | "silver" | "bronze"; count: number }) => {
  return <li className={"continent__medal " + type}>{count}</li>;
};

const ContinentSection = (continent: Continent & { index: number; max: number }) => {
  const style = {
    "--index": continent.index,
    "--color": `var(--color-${continent.index + 1})`,
    "--ratio": continent.total / continent.max,
  };

  return (
    <article className="continent" style={style}>
      <header>
        <h2>
          {continent.name}: <b>{continent.total}</b>
        </h2>
        <ul className="continent__medals">
          <Medal type="gold" count={continent.gold} />
          <Medal type="silver" count={continent.silver} />
          <Medal type="bronze" count={continent.bronze} />
        </ul>
      </header>
      <div className="ring" />
    </article>
  );
};

export function App() {
  const totalMedalsCount = continentMedals.map((c) => c.total);
  const maxMedalsCount = Math.max(...totalMedalsCount);
  return (
    <div className="graph">
      {continentMedals.map((continent, index) => (
        <ContinentSection key={continent.name} {...continent} index={index} max={maxMedalsCount} />
      ))}
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}

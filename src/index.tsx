import { hydrate, prerender as ssr } from "preact-iso";
import "./css/main.css";
import continentMedals from "./data/continent_medals.json";

type Continent = {
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

const ContinentSection = (continent: Continent & { index: number }) => {
  const style = {
    "--color": `var(--color-${continent.index + 1})`,
  };

  return (
    <section className="continent" style={style}>
      <header>
        <h2>
          {continent.name}: <b>{continent.total}</b>
        </h2>
      </header>
      <p>
        <span className="gold">{continent.gold}</span> Gold
        <span className="silver">{continent.silver}</span> Silver
        <span className="bronze">{continent.bronze}</span> Bronze
      </p>
    </section>
  );
};

export function App() {
  return (
    <div className="container">
      {continentMedals.map((continent, index) => (
        <ContinentSection key={continent.name} {...continent} index={index} />
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

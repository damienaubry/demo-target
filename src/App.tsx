import features from "./features.json";

type Feature = { emoji: string; title: string; description: string };

// Vivid palette — each tile a different bold color so a new card visibly pops in.
const COLORS = [
  "#ff5d73",
  "#13b4a3",
  "#ffb020",
  "#6c5ce7",
  "#ff7eb6",
  "#2bb673",
  "#00b8d9",
  "#f76808",
];

export default function App() {
  const list = features as Feature[];
  return (
    <main>
      <nav>
        <span className="logo">✺ Lumen</span>
        <span className="navcta">Get started</span>
      </nav>

      <header className="hero">
        <div className="count" key={list.length}>
          {list.length}
        </div>
        <div>
          <h1>reasons people love Lumen.</h1>
          <p className="sub">…and the list keeps growing — by voice.</p>
        </div>
      </header>

      <section className="grid">
        {list.map((f, i) => (
          <article
            className="tile"
            key={i}
            style={{
              background: COLORS[i % COLORS.length],
              animationDelay: `${i * 90}ms`,
            }}
          >
            <div className="emoji">{f.emoji}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </section>

      <footer>Made with ♥ by the Lumen team</footer>
    </main>
  );
}

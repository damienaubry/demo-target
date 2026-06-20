import features from "./features.json";

type Feature = { emoji: string; title: string; description: string };

export default function App() {
  const list = features as Feature[];
  return (
    <main>
      <header>
        <p className="kicker">ACME</p>
        <h1>Everything you need to ship.</h1>
        <p className="sub">
          {list.length} features and counting — this page is edited by voice.
        </p>
      </header>
      <section className="grid">
        {list.map((f, i) => (
          <article className="card" key={i}>
            <div className="emoji">{f.emoji}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </article>
        ))}
      </section>
      <footer>Shipped hands-free with VoxBuild · voice → PR → prod</footer>
    </main>
  );
}

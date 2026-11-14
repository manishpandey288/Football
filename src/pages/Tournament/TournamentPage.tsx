export function TournamentPage() {
  return (
    <div>
      <h1>Tournament Information</h1>
      <div style={{ marginTop: '2rem' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2>North Bengal Futsal Cup</h2>
          <p>A premier futsal tournament featuring the best teams from across North Bengal and neighboring regions.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Tournament Format</h2>
          <ul>
            <li>Round-robin group stage</li>
            <li>6 teams competing</li>
            <li>Each team plays every other team once</li>
            <li>3 points for a win, 1 point for a draw, 0 for a loss</li>
          </ul>
        </section>

        <section>
          <h2>Tournament Schedule</h2>
          <p>Tournament matches are being held throughout January 2024.</p>
          <p>Check the <a href="/matches">Matches</a> page for the complete schedule and results.</p>
        </section>
      </div>
    </div>
  );
}

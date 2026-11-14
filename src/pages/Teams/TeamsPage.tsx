import { demoTeams } from '../../data/demo';
import type { Team } from '../../types';

export function TeamsPage() {
  return (
    <div>
      <h1>Teams</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem',
      }}>
        {demoTeams.map((team: Team) => (
          <div key={team.id} style={{
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow)',
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{team.name}</h3>
            <p style={{ margin: '0.25rem 0', color: 'var(--text)' }}>📍 {team.city}</p>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                <strong>Record:</strong> {team.wins}W - {team.draws}D - {team.losses}L
              </p>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                <strong>Goals:</strong> {team.goalsFor} For / {team.goalsAgainst} Against
              </p>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                <strong>Points:</strong> <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{team.points}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

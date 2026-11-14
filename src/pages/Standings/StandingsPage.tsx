import { demoTeams } from '../../data/demo';
import type { Team } from '../../types';

export function StandingsPage() {
  const sortedTeams = [...demoTeams].sort((a, b) => b.points - a.points);

  return (
    <div>
      <h1>Tournament Standings</h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1.5rem',
        }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Position</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Team</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>P</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>W</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>D</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>L</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>GF</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>GA</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team: Team, index: number) => (
              <tr key={team.id} style={{
                borderBottom: '1px solid var(--border)',
                backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--accent-bg)',
              }}>
                <td style={{ padding: '1rem' }}>{index + 1}</td>
                <td style={{ padding: '1rem', fontWeight: '500' }}>{team.name}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.wins + team.draws + team.losses}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.wins}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.draws}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.losses}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsFor}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsAgainst}</td>
                <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--accent)' }}>
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

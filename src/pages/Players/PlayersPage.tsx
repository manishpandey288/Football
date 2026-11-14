import { demoPlayers, demoTeams } from '../../data/demo';
import type { Player } from '../../types';

function getTeamName(teamId: string): string {
  return demoTeams.find(t => t.id === teamId)?.name || 'Unknown Team';
}

export function PlayersPage() {
  const sortedPlayers = [...demoPlayers].sort((a, b) => b.goals - a.goals);

  return (
    <div>
      <h1>Players</h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1.5rem',
        }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Team</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Position</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Jersey #</th>
              <th style={{ padding: '1rem', textAlign: 'center' }}>Goals</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player: Player, index: number) => (
              <tr key={player.id} style={{
                borderBottom: '1px solid var(--border)',
                backgroundColor: index % 2 === 0 ? 'transparent' : 'var(--accent-bg)',
              }}>
                <td style={{ padding: '1rem', fontWeight: '500' }}>{player.name}</td>
                <td style={{ padding: '1rem' }}>{getTeamName(player.teamId)}</td>
                <td style={{ padding: '1rem' }}>{player.position}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>{player.jerseyNumber}</td>
                <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--accent)' }}>
                  {player.goals}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

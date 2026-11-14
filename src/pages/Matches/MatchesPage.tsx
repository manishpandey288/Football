import { useState } from 'react';
import { demoMatches, demoTeams } from '../../data/demo';
import './MatchesPage.css';

export function MatchesPage() {
  const [filter, setFilter] = useState<'all' | 'live' | 'scheduled' | 'finished'>('all');

  const getTeamData = (teamId: string) => {
    return demoTeams.find((t) => t.id === teamId);
  };

  const filteredMatches = demoMatches.filter((match) => {
    if (filter === 'all') return true;
    return match.status === filter;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'live':
        return 'status-badge status-badge--live';
      case 'scheduled':
        return 'status-badge status-badge--scheduled';
      case 'finished':
        return 'status-badge status-badge--finished';
      default:
        return 'status-badge';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'live':
        return 'LIVE';
      case 'scheduled':
        return 'UPCOMING';
      case 'finished':
        return 'FINISHED';
      default:
        return status.toUpperCase();
    }
  };

  const liveCount = demoMatches.filter((m) => m.status === 'live').length;
  const upcomingCount = demoMatches.filter((m) => m.status === 'scheduled').length;
  const finishedCount = demoMatches.filter((m) => m.status === 'finished').length;

  return (
    <div className="page-wrapper matches-page">
      {/* Header Section */}
      <div className="matches-header">
        <div className="container">
          <div className="header-content">
            <div>
              <h1>Matches</h1>
              <p className="text-secondary">North Bengal Futsal Cup 2026</p>
            </div>
            <div className="match-stats">
              <div className="stat-item">
                <div className="stat-number">{liveCount}</div>
                <div className="stat-label">Live</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{upcomingCount}</div>
                <div className="stat-label">Upcoming</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{finishedCount}</div>
                <div className="stat-label">Finished</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container">
        <div className="matches-filter">
          <button
            className={`filter-chip ${filter === 'all' ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Matches
          </button>
          <button
            className={`filter-chip ${filter === 'live' ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter('live')}
          >
            Live
          </button>
          <button
            className={`filter-chip ${filter === 'scheduled' ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter('scheduled')}
          >
            Upcoming
          </button>
          <button
            className={`filter-chip ${filter === 'finished' ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter('finished')}
          >
            Finished
          </button>
        </div>
      </div>

      {/* Matches List Section */}
      <div className="container">
        <div className="matches-list">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => {
              const team1 = getTeamData(match.team1Id);
              const team2 = getTeamData(match.team2Id);

              return (
                <div key={match.id} className="match-card">
                  <div className="match-card-header">
                    <span className={getStatusBadgeClass(match.status)}>
                      {getStatusLabel(match.status)}
                      {match.status === 'live' && <span className="pulse-dot"></span>}
                    </span>
                    <span className="match-venue">{match.venue}</span>
                  </div>

                  <div className="match-teams">
                    {/* Team 1 */}
                    <div className="team-section">
                      <div className="team-info">
                        <div
                          className="team-avatar"
                          style={{ backgroundColor: team1?.avatarColor || '#8e929a' }}
                        >
                          {team1?.avatar || team1?.name?.charAt(0) || '?'}
                        </div>
                        <div className="team-details">
                          <div className="team-name">{team1?.name || 'Team 1'}</div>
                          <div className="team-city">{team1?.city || ''}</div>
                        </div>
                      </div>
                      <div className="team-score">
                        {(match.status === 'finished' || match.status === 'live') && match.team1Score !== null ? (
                          <div className="score-display">{match.team1Score}</div>
                        ) : (
                          <div className="score-time">{match.time}</div>
                        )}
                      </div>
                    </div>

                    {/* VS Divider */}
                    <div className="match-divider">
                      {match.status === 'live' && match.period && (
                        <div className="live-time">{match.period}</div>
                      )}
                      <div className="vs-text">VS</div>
                    </div>

                    {/* Team 2 */}
                    <div className="team-section team-section--reverse">
                      <div className="team-score">
                        {(match.status === 'finished' || match.status === 'live') && match.team2Score !== null ? (
                          <div className="score-display">{match.team2Score}</div>
                        ) : (
                          <div className="score-time">{match.time}</div>
                        )}
                      </div>
                      <div className="team-info team-info--reverse">
                        <div className="team-details team-details--reverse">
                          <div className="team-name">{team2?.name || 'Team 2'}</div>
                          <div className="team-city">{team2?.city || ''}</div>
                        </div>
                        <div
                          className="team-avatar"
                          style={{ backgroundColor: team2?.avatarColor || '#8e929a' }}
                        >
                          {team2?.avatar || team2?.name?.charAt(0) || '?'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Match Footer */}
                  <div className="match-card-footer">
                    <span className="match-date">
                      {new Date(match.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <button className="match-action-btn">View Details</button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-matches">
              <p>No matches found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { demoTeams, demoMatches, demoPlayers } from '../../data/demo';
import './HomePage.css';

const HomePage: React.FC = () => {
  // Get live match, upcoming matches, and standings
  const liveMatch = demoMatches.find(m => m.status === 'live');
  const upcomingMatches = demoMatches.filter(m => m.status === 'scheduled').slice(0, 3);
  const standingsTeams = demoTeams.slice(0, 6);
  const topTeams = demoTeams.slice(0, 4);
  const topPlayers = demoPlayers.slice(0, 3);

  const getTeamById = (id: string) => demoTeams.find(t => t.id === id);

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <div className="navbar-logo-icon">🏆</div>
          <div className="navbar-logo-text">
            NBFC <span className="navbar-logo-text-accent">2026</span>
          </div>
        </a>
        <ul className="navbar-menu">
          <li>
            <a href="/" className="active">Home</a>
          </li>
          <li>
            <a href="/matches">Matches</a>
          </li>
          <li>
            <a href="/standings">Standings</a>
          </li>
          <li>
            <a href="/teams">Teams</a>
          </li>
          <li>
            <a href="/players">Players</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-search" title="Search">🔍</button>
          <button className="navbar-signin">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-text">✨ Latest</span>
          </div>
          <h1 className="hero-title">
            North Bengal <span className="hero-title-accent">Futsal</span> Cup
          </h1>
          <p className="hero-subtitle">
            Experience the fastest-growing futsal tournament in North Bengal. Watch elite teams compete in high-speed action matches.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Watch Live</button>
            <button className="btn btn-secondary">View Schedule →</button>
          </div>
        </div>
      </section>

      {/* Live Match Section */}
      {liveMatch && (
        <section className="section live-match-section">
          <div className="section-header">
            <div className="section-title-group">
              <span className="section-label">Live Now</span>
              <h2 className="section-title">Featured Match</h2>
            </div>
            <a href="/matches" className="section-link">
              View All <span>→</span>
            </a>
          </div>

          <div className="live-match-card">
            <div className="live-match-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="live-badge">
                  <span className="live-badge-dot"></span>
                  LIVE
                </div>
                <span className="live-time">45:32</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                <span className="live-venue-icon">📍</span>
                <span className="live-venue">{liveMatch.venue}</span>
              </div>
            </div>

            <div className="live-match-teams">
              <div className="team-card team-card-left">
                <div
                  className="team-avatar"
                  style={{ backgroundColor: getTeamById(liveMatch.team1Id)?.avatarColor || '#ccff00' }}
                >
                  {getTeamById(liveMatch.team1Id)?.avatar}
                </div>
                <div className="team-name">{getTeamById(liveMatch.team1Id)?.name}</div>
              </div>

              <div className="score-display">
                <div className="score-number">{liveMatch.team1Score}</div>
                <div className="score-separator">:</div>
                <div className="score-number">{liveMatch.team2Score}</div>
              </div>

              <div className="team-card team-card-right">
                <div className="team-name">{getTeamById(liveMatch.team2Id)?.name}</div>
                <div
                  className="team-avatar"
                  style={{ backgroundColor: getTeamById(liveMatch.team2Id)?.avatarColor || '#00a2ff' }}
                >
                  {getTeamById(liveMatch.team2Id)?.avatar}
                </div>
              </div>
            </div>

            <div className="live-match-footer">
              <div>
                <div className="live-event">
                  <span className="live-event-bold">GOAL!</span> Rahul Das scores in the 34th minute
                </div>
              </div>
              <div className="live-match-info">{liveMatch.period}</div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Matches Section */}
      <section className="section">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-label">Coming Up</span>
            <h2 className="section-title">Upcoming Matches</h2>
          </div>
          <a href="/matches" className="section-link">
            View All <span>→</span>
          </a>
        </div>

        <div className="match-cards">
          {upcomingMatches.map(match => (
            <div key={match.id} className="match-card">
              <div className="match-date">
                <div className="match-date-info">
                  <span className="match-date-main">{new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span className="match-date-separator">•</span>
                  <span className="match-date-time">{match.time}</span>
                </div>
                <span className="match-date-icon">📅</span>
              </div>

              <div className="match-teams-list">
                <div className="match-team">
                  <div
                    className="team-avatar"
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: getTeamById(match.team1Id)?.avatarColor,
                    }}
                  >
                    {getTeamById(match.team1Id)?.avatar}
                  </div>
                  <span style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                    {getTeamById(match.team1Id)?.name}
                  </span>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--text)', fontSize: '12px' }}>VS</div>
                <div className="match-team">
                  <div
                    className="team-avatar"
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: getTeamById(match.team2Id)?.avatarColor,
                    }}
                  >
                    {getTeamById(match.team2Id)?.avatar}
                  </div>
                  <span style={{ color: 'var(--text-h)', fontWeight: '500' }}>
                    {getTeamById(match.team2Id)?.name}
                  </span>
                </div>
              </div>

              <div className="match-venue">
                <span className="match-venue-icon">📍</span>
                <span>{match.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standings Section */}
      <section className="section live-match-section">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-label">Tournament</span>
            <h2 className="section-title">Group Standings</h2>
          </div>
          <a href="/standings" className="section-link">
            Full Table <span>→</span>
          </a>
        </div>

        <table className="standings-table">
          <thead>
            <tr className="standings-header">
              <th className="standings-header-cell" style={{ textAlign: 'left', width: '50%' }}>Team</th>
              <th className="standings-header-cell" style={{ textAlign: 'center' }}>P</th>
              <th className="standings-header-cell" style={{ textAlign: 'center' }}>W</th>
              <th className="standings-header-cell" style={{ textAlign: 'center' }}>D</th>
              <th className="standings-header-cell" style={{ textAlign: 'center' }}>L</th>
              <th className="standings-header-cell" style={{ textAlign: 'right', paddingRight: '20px' }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {standingsTeams.map((team, index) => (
              <tr key={team.id} className="standings-row">
                <td className="standings-cell">
                  <div className="standings-position">
                    <div className="position-bar"></div>
                    <span className="position-number">{index + 1}</span>
                    <div className="standings-team">
                      <div
                        className="standings-team-avatar"
                        style={{ backgroundColor: team.avatarColor }}
                      ></div>
                      <span className="standings-team-name">{team.name}</span>
                    </div>
                  </div>
                </td>
                <td className="standings-cell" style={{ textAlign: 'center' }}>
                  {team.wins + team.draws + team.losses}
                </td>
                <td className="standings-cell" style={{ textAlign: 'center' }}>{team.wins}</td>
                <td className="standings-cell" style={{ textAlign: 'center' }}>{team.draws}</td>
                <td className="standings-cell" style={{ textAlign: 'center' }}>{team.losses}</td>
                <td className="standings-cell" style={{ textAlign: 'right', paddingRight: '20px', fontWeight: '700' }}>
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Featured Teams Section */}
      <section className="section">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-label">Participating Teams</span>
            <h2 className="section-title">Featured Teams</h2>
          </div>
          <a href="/teams" className="section-link">
            All Teams <span>→</span>
          </a>
        </div>

        <div className="teams-grid">
          {topTeams.map(team => (
            <div key={team.id} className="team-card-featured">
              <div className="team-avatar-large" style={{ backgroundColor: team.avatarColor }}>
                {team.avatar}
              </div>
              <div className="team-info">
                <div className="team-title">{team.name}</div>
                <div className="team-location">{team.city}</div>
                <div className="team-tagline">{team.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Players Section */}
      <section className="section live-match-section">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-label">Tournament Stars</span>
            <h2 className="section-title">Top Players</h2>
          </div>
          <a href="/players" className="section-link">
            All Players <span>→</span>
          </a>
        </div>

        <div className="players-grid">
          {topPlayers.map(player => (
            <div key={player.id} className="player-card">
              <div
                className="player-avatar-img"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: getTeamById(player.teamId)?.avatarColor,
                  color: 'white',
                  fontWeight: '900',
                  fontSize: '28px',
                }}
              >
                {player.name.charAt(0)}
              </div>
              <div className="player-info">
                <div className="player-name">{player.name}</div>
                <div className="player-role">
                  {player.position} • {getTeamById(player.teamId)?.name}
                </div>
                <div className="player-stats">
                  <strong>{player.goals}</strong> goals • <strong>{player.assists || 0}</strong> assists
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tournament Statistics */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Teams</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Matches</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Venues</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">47</div>
            <div className="stat-label">Goals</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Make History?</h2>
          <p className="cta-subtitle">
            Become part of the fastest-growing futsal tournament in North Bengal. Get live updates, exclusive content, and more.
          </p>
          <div className="cta-button">
            <button className="btn btn-primary">Register Your Interest</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <div className="footer-logo-icon">🏆</div>
              <div className="footer-logo-text">NBFC 2026</div>
            </a>
            <p className="footer-description">
              The premier futsal championship for North Bengal. Experience fast-paced, thrilling matches with the region's best teams.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <a href="/matches" className="footer-section-link">Matches</a>
            <a href="/standings" className="footer-section-link">Standings</a>
            <a href="/teams" className="footer-section-link">Teams</a>
            <a href="/players" className="footer-section-link">Players</a>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <div className="footer-contact">
              <div>Email: info@nbfc2026.com</div>
              <div>Phone: +91-XXXX-XXXX</div>
              <div style={{ marginTop: '12px' }}>Follow us on social media</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 North Bengal Futsal Cup. All rights reserved.</span>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

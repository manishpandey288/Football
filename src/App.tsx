import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/Home/HomePage';
import { MatchesPage } from './pages/Matches/MatchesPage';
import { StandingsPage } from './pages/Standings/StandingsPage';
import { TeamsPage } from './pages/Teams/TeamsPage';
import { PlayersPage } from './pages/Players/PlayersPage';
import { TournamentPage } from './pages/Tournament/TournamentPage';
import { AdminPage } from './pages/Admin/AdminPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/tournament" element={<TournamentPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
export interface Team {
  id: string;
  name: string;
  city: string;
  logo?: string;
  wins: number;
  losses: number;
  draws: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  tagline?: string;
  avatar?: string;
  avatarColor?: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  jerseyNumber: number;
  goals: number;
  assists?: number;
}

export interface Match {
  id: string;
  team1Id: string;
  team2Id: string;
  team1Score: number | null;
  team2Score: number | null;
  date: string;
  time: string;
  venue: string;
  status: 'scheduled' | 'live' | 'finished';
  period?: string;
}

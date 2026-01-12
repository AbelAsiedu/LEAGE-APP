export interface Team {
  id: string;
  name: string;
  logo: string;
  color: string;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  ranking: number;
}

export interface Player {
  id: string;
  name: string;
  photo: string;
  teamId: string;
  position: string;
  number: number;
  goals: number;
  assists: number;
  appearances: number;
  rating: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'scheduled' | 'finished';
  date: string;
  time: string;
  venue: string;
  round: string;
  liveMinute?: number;
  events?: MatchEvent[];
}

export interface MatchEvent {
  id: string;
  type: 'goal' | 'yellow_card' | 'red_card' | 'substitution';
  minute: number;
  playerId: string;
  playerName: string;
  teamId: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: 'breaking' | 'match' | 'transfer' | 'interview';
  timestamp: string;
  isBreaking?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  category: 'highlights' | 'interview' | 'replay' | 'analysis';
  uploadDate: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'match' | 'tournament' | 'special';
  teams?: string[];
  venue?: string;
}

import { Team, Player, Match, NewsItem, Comment, Video, Event } from '../types/sports';

export const teams: Team[] = [
  {
    id: 't1',
    name: 'Thunder Hawks',
    logo: '🦅',
    color: '#3B82F6',
    wins: 18,
    losses: 5,
    draws: 2,
    points: 56,
    ranking: 1
  },
  {
    id: 't2',
    name: 'Lightning Strikers',
    logo: '⚡',
    color: '#FBBF24',
    wins: 16,
    losses: 6,
    draws: 3,
    points: 51,
    ranking: 2
  },
  {
    id: 't3',
    name: 'Phoenix United',
    logo: '🔥',
    color: '#EF4444',
    wins: 15,
    losses: 7,
    draws: 3,
    points: 48,
    ranking: 3
  },
  {
    id: 't4',
    name: 'Ocean Warriors',
    logo: '🌊',
    color: '#06B6D4',
    wins: 14,
    losses: 8,
    draws: 3,
    points: 45,
    ranking: 4
  },
  {
    id: 't5',
    name: 'Storm Titans',
    logo: '⛈️',
    color: '#8B5CF6',
    wins: 12,
    losses: 10,
    draws: 3,
    points: 39,
    ranking: 5
  },
  {
    id: 't6',
    name: 'Victory Eagles',
    logo: '🏆',
    color: '#10B981',
    wins: 10,
    losses: 12,
    draws: 3,
    points: 33,
    ranking: 6
  }
];

export const players: Player[] = [
  {
    id: 'p1',
    name: 'Marcus Silva',
    photo: '👤',
    teamId: 't1',
    position: 'Forward',
    number: 10,
    goals: 24,
    assists: 12,
    appearances: 25,
    rating: 8.9
  },
  {
    id: 'p2',
    name: 'James Rodriguez',
    photo: '👤',
    teamId: 't1',
    position: 'Midfielder',
    number: 8,
    goals: 8,
    assists: 15,
    appearances: 24,
    rating: 8.2
  },
  {
    id: 'p3',
    name: 'David Martinez',
    photo: '👤',
    teamId: 't2',
    position: 'Forward',
    number: 9,
    goals: 22,
    assists: 7,
    appearances: 25,
    rating: 8.7
  },
  {
    id: 'p4',
    name: 'Alex Chen',
    photo: '👤',
    teamId: 't2',
    position: 'Defender',
    number: 4,
    goals: 3,
    assists: 5,
    appearances: 25,
    rating: 8.1
  },
  {
    id: 'p5',
    name: 'Carlos Hernandez',
    photo: '👤',
    teamId: 't3',
    position: 'Forward',
    number: 11,
    goals: 19,
    assists: 9,
    appearances: 23,
    rating: 8.5
  },
  {
    id: 'p6',
    name: 'Ryan Thompson',
    photo: '👤',
    teamId: 't4',
    position: 'Goalkeeper',
    number: 1,
    goals: 0,
    assists: 0,
    appearances: 25,
    rating: 8.3
  }
];

export const matches: Match[] = [
  {
    id: 'm1',
    homeTeam: teams[0],
    awayTeam: teams[1],
    homeScore: 2,
    awayScore: 1,
    status: 'live',
    date: '2026-01-11',
    time: '20:00',
    venue: 'Thunder Stadium',
    round: 'Round 26',
    liveMinute: 78,
    events: [
      {
        id: 'e1',
        type: 'goal',
        minute: 23,
        playerId: 'p1',
        playerName: 'Marcus Silva',
        teamId: 't1',
        description: 'Goal by Marcus Silva'
      },
      {
        id: 'e2',
        type: 'goal',
        minute: 45,
        playerId: 'p3',
        playerName: 'David Martinez',
        teamId: 't2',
        description: 'Goal by David Martinez'
      },
      {
        id: 'e3',
        type: 'goal',
        minute: 67,
        playerId: 'p2',
        playerName: 'James Rodriguez',
        teamId: 't1',
        description: 'Goal by James Rodriguez'
      }
    ]
  },
  {
    id: 'm2',
    homeTeam: teams[2],
    awayTeam: teams[3],
    homeScore: 1,
    awayScore: 1,
    status: 'live',
    date: '2026-01-11',
    time: '18:00',
    venue: 'Phoenix Arena',
    round: 'Round 26',
    liveMinute: 82
  },
  {
    id: 'm3',
    homeTeam: teams[4],
    awayTeam: teams[5],
    homeScore: 0,
    awayScore: 0,
    status: 'scheduled',
    date: '2026-01-11',
    time: '22:00',
    venue: 'Storm Stadium',
    round: 'Round 26'
  },
  {
    id: 'm4',
    homeTeam: teams[0],
    awayTeam: teams[2],
    homeScore: 3,
    awayScore: 2,
    status: 'finished',
    date: '2026-01-08',
    time: '20:00',
    venue: 'Thunder Stadium',
    round: 'Round 25'
  },
  {
    id: 'm5',
    homeTeam: teams[1],
    awayTeam: teams[4],
    homeScore: 2,
    awayScore: 0,
    status: 'finished',
    date: '2026-01-08',
    time: '18:00',
    venue: 'Lightning Arena',
    round: 'Round 25'
  },
  {
    id: 'm6',
    homeTeam: teams[0],
    awayTeam: teams[3],
    homeScore: 0,
    awayScore: 0,
    status: 'scheduled',
    date: '2026-01-15',
    time: '20:00',
    venue: 'Thunder Stadium',
    round: 'Round 27'
  },
  {
    id: 'm7',
    homeTeam: teams[2],
    awayTeam: teams[5],
    homeScore: 0,
    awayScore: 0,
    status: 'scheduled',
    date: '2026-01-15',
    time: '19:00',
    venue: 'Phoenix Arena',
    round: 'Round 27'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Thunder Hawks Dominate in Thrilling Derby Victory!',
    summary: 'Marcus Silva scores stunning goal as Thunder Hawks take commanding lead in championship race.',
    image: '⚽',
    category: 'breaking',
    timestamp: '2 minutes ago',
    isBreaking: true
  },
  {
    id: 'n2',
    title: 'David Martinez Reaches 100 Goals Milestone',
    summary: 'Lightning Strikers star becomes youngest player to reach century mark in league history.',
    image: '🎯',
    category: 'match',
    timestamp: '15 minutes ago'
  },
  {
    id: 'n3',
    title: 'BREAKING: Star Player Transfer Confirmed',
    summary: 'International midfielder signs record-breaking deal with Phoenix United.',
    image: '📰',
    category: 'transfer',
    timestamp: '1 hour ago',
    isBreaking: true
  },
  {
    id: 'n4',
    title: 'Coach Interview: "We\'re Ready for Championship Push"',
    summary: 'Thunder Hawks manager discusses team strategy heading into crucial matches.',
    image: '🎤',
    category: 'interview',
    timestamp: '3 hours ago'
  },
  {
    id: 'n5',
    title: 'Phoenix United vs Ocean Warriors: Match Preview',
    summary: 'Everything you need to know about tonight\'s crucial encounter.',
    image: '📊',
    category: 'match',
    timestamp: '5 hours ago'
  }
];

export const comments: Comment[] = [
  {
    id: 'c1',
    userId: 'u1',
    userName: 'Sportsfan2026',
    userAvatar: '👨',
    content: 'What an incredible match! Thunder Hawks are absolutely dominating this season! 🔥',
    timestamp: '5 minutes ago',
    likes: 124
  },
  {
    id: 'c2',
    userId: 'u2',
    userName: 'EagleFan',
    userAvatar: '👩',
    content: 'Marcus Silva is playing like a legend! That goal was pure class 👏',
    timestamp: '8 minutes ago',
    likes: 89,
    replies: [
      {
        id: 'c2-1',
        userId: 'u3',
        userName: 'FootballGeek',
        userAvatar: '🧑',
        content: 'Agreed! Best player in the league right now',
        timestamp: '6 minutes ago',
        likes: 34
      }
    ]
  },
  {
    id: 'c3',
    userId: 'u4',
    userName: 'StrikersSupporter',
    userAvatar: '👨',
    content: 'Lightning Strikers can still catch up. We have the quality! ⚡',
    timestamp: '12 minutes ago',
    likes: 67
  },
  {
    id: 'c4',
    userId: 'u5',
    userName: 'LeagueAnalyst',
    userAvatar: '👩',
    content: 'This is shaping up to be one of the best seasons ever! Every match is intense 🏆',
    timestamp: '20 minutes ago',
    likes: 156
  }
];

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Thunder Hawks vs Lightning Strikers - Full Match Highlights',
    thumbnail: '🎬',
    duration: '8:45',
    views: 245000,
    category: 'highlights',
    uploadDate: '2 hours ago'
  },
  {
    id: 'v2',
    title: 'Marcus Silva Amazing Goal - All Angles',
    thumbnail: '⚽',
    duration: '2:30',
    views: 189000,
    category: 'highlights',
    uploadDate: '3 hours ago'
  },
  {
    id: 'v3',
    title: 'Post-Match Interview with Coach',
    thumbnail: '🎤',
    duration: '5:12',
    views: 78000,
    category: 'interview',
    uploadDate: '4 hours ago'
  },
  {
    id: 'v4',
    title: 'Top 10 Goals of the Week',
    thumbnail: '🔟',
    duration: '6:20',
    views: 312000,
    category: 'highlights',
    uploadDate: '1 day ago'
  },
  {
    id: 'v5',
    title: 'Tactical Analysis: Thunder Hawks Formation',
    thumbnail: '📊',
    duration: '12:45',
    views: 95000,
    category: 'analysis',
    uploadDate: '2 days ago'
  },
  {
    id: 'v6',
    title: 'Full Match Replay: Round 25',
    thumbnail: '🎥',
    duration: '95:00',
    views: 156000,
    category: 'replay',
    uploadDate: '3 days ago'
  }
];

export const events: Event[] = [
  {
    id: 'ev1',
    title: 'Thunder Hawks vs Ocean Warriors',
    date: '2026-01-15T20:00:00',
    type: 'match',
    teams: ['Thunder Hawks', 'Ocean Warriors'],
    venue: 'Thunder Stadium'
  },
  {
    id: 'ev2',
    title: 'Phoenix United vs Victory Eagles',
    date: '2026-01-15T19:00:00',
    type: 'match',
    teams: ['Phoenix United', 'Victory Eagles'],
    venue: 'Phoenix Arena'
  },
  {
    id: 'ev3',
    title: 'Lightning Strikers vs Storm Titans',
    date: '2026-01-16T20:00:00',
    type: 'match',
    teams: ['Lightning Strikers', 'Storm Titans'],
    venue: 'Lightning Arena'
  },
  {
    id: 'ev4',
    title: 'Championship Semi-Finals Draw',
    date: '2026-01-20T18:00:00',
    type: 'special',
    venue: 'League Headquarters'
  },
  {
    id: 'ev5',
    title: 'All-Star Weekend',
    date: '2026-01-25T15:00:00',
    type: 'tournament',
    venue: 'National Stadium'
  }
];

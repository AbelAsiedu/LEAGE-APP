# Sports League Application - Documentation

## Overview
A modern, responsive sports league application UI designed to deliver real-time sports content and fan engagement. Built with React, TypeScript, Tailwind CSS, and React Router.

## Design System
- **Color Scheme**: Dark background (#030712) with vibrant accent colors
  - Blue (#3B82F6) - Primary actions and links
  - Green (#10B981) - Success and wins
  - Red (#EF4444) - Live indicators and losses
  - Yellow (#FBBF24) - Highlights and warnings
  - Purple (#8B5CF6) - Special features
  - Team-specific colors for branding

- **Typography**: Bold, energetic fonts with clear hierarchy
- **Layout**: Card-based design with subtle shadows and rounded corners
- **Responsive**: Mobile-first with bottom navigation for mobile, top navigation for desktop

## Core Features & Pages

### 1. Home / Live Updates Feed (`/`)
- Real-time scores and match updates
- Breaking news section with animated badges
- Live matches with pulsing indicators
- Upcoming matches preview
- Latest news feed

### 2. Live Games Page (`/live` & `/live/:matchId`)
- Live match streaming interface placeholder
- Real-time score updates
- Match statistics with visual bars
- Match events timeline (goals, cards, substitutions)
- Starting lineups
- Multiple live matches support

### 3. Fan Interaction Page (`/fan-zone`)
- Comment posting interface
- Fan discussions and replies
- Like/reaction system
- Trending topics with hashtags
- Live polls
- Fan of the week feature

### 4. Events & Calendar Page (`/events`)
- Interactive monthly calendar view
- List view of all upcoming matches
- Event details on date selection
- Special events section
- Multiple viewing modes (calendar/list)

### 5. Multimedia Page (`/media`)
- Video library with categories:
  - Highlights
  - Full Replays
  - Interviews
  - Analysis
- Featured video section
- Video cards with thumbnails and metadata
- View counts and durations

### 6. Teams Page (`/teams`)
- League standings table with rankings
- Team cards with stats (wins, draws, losses, points)
- Team performance indicators
- Recent form display
- League statistics summary

### 7. Players Page (`/players`)
- Player cards with photos and stats
- Top scorers leaderboard
- Top assist providers leaderboard
- Filter by position (Forward, Midfielder, Defender, Goalkeeper)
- Player ratings
- Comprehensive statistics

## Reusable Components

### Navigation
- **TopNav**: Desktop navigation with league branding
- **BottomNav**: Mobile bottom tab navigation (6 tabs)

### Cards
- **MatchCard**: Display match info with live indicators
- **NewsCard**: Breaking news and updates
- **TeamCard**: Team information and statistics
- **PlayerCard**: Player profiles and stats
- **VideoCard**: Video thumbnails with metadata

### Interactive
- **CommentItem**: Nested comments with replies
- **LiveIndicator**: Pulsing red dot with "LIVE" text

## Technical Stack

### Core Technologies
- React 18.3.1
- TypeScript
- React Router DOM 7.12.0
- Tailwind CSS 4.1.12
- Vite 6.3.5

### UI Libraries
- Radix UI components (dialogs, tabs, dropdowns, etc.)
- Lucide React (icons)
- date-fns (date formatting)
- Recharts (for future analytics features)

### Key Features
- Fully typed with TypeScript
- Responsive design (mobile-first)
- Dark theme optimized for sports content
- Mock data for demonstration
- Client-side routing
- Accessible UI components

## File Structure

```
/src/app/
├── components/
│   ├── sports/
│   │   ├── BottomNav.tsx
│   │   ├── TopNav.tsx
│   │   ├── LiveIndicator.tsx
│   │   ├── MatchCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── CommentItem.tsx
│   │   └── VideoCard.tsx
│   └── ui/ (Radix UI components)
├── data/
│   └── sportsData.ts
├── pages/
│   └── sports/
│       ├── HomePage.tsx
│       ├── LiveGamesPage.tsx
│       ├── FanInteractionPage.tsx
│       ├── EventsPage.tsx
│       ├── MultimediaPage.tsx
│       ├── TeamsPage.tsx
│       └── PlayersPage.tsx
├── types/
│   └── sports.ts
└── App.tsx

/src/styles/
├── fonts.css
├── tailwind.css
├── theme.css
├── sports.css
└── index.css
```

## Mock Data

The application includes comprehensive mock data:
- 6 Teams with complete statistics
- 6+ Players with goals, assists, and ratings
- 7 Matches (live, scheduled, and finished)
- 5 News items (including breaking news)
- 4+ Fan comments with nested replies
- 6 Videos across different categories
- 5+ Calendar events

## Routing Structure

```
/               - Home page with live updates
/live           - Live games feed
/live/:matchId  - Individual live match view
/fan-zone       - Fan interaction and discussions
/events         - Events calendar and schedule
/media          - Multimedia content
/teams          - Teams and standings
/teams/:teamId  - Individual team view (uses teams page)
/players        - Players and statistics
```

## Design Highlights

1. **Live Indicators**: Pulsing red dot animation for live matches
2. **Color-Coded Stats**: Green for wins, red for losses, gray for draws
3. **Interactive Cards**: Hover effects and click handlers
4. **Responsive Navigation**: Desktop top nav, mobile bottom tabs
5. **Breaking News Badges**: Animated badges for important updates
6. **Team Branding**: Each team has unique colors reflected in UI
7. **Dark Mode**: Optimized dark theme throughout

## Future Enhancements

Ready for integration with:
- Real-time WebSocket connections for live updates
- Backend API for data persistence
- User authentication and profiles
- Push notifications
- Video streaming integration
- Social sharing features
- Advanced analytics and charts
- Match predictions and betting
- Player comparison tools

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios optimized for dark theme
- Screen reader friendly components

## Performance

- Lazy loading ready for route-based code splitting
- Optimized re-renders with React best practices
- Efficient date handling with date-fns
- Minimal bundle size with tree-shaking

---

Built with ❤️ for sports fans worldwide

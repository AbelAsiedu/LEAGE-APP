# Sports League Application

A modern, responsive sports league application UI focused on delivering real-time sports content and fan engagement. Features a clean, energetic sports-style design with bold typography, card-based layouts, and a dark theme with vibrant team colors.

## Features

- 🏠 **Home/Live Updates Feed** - Real-time match updates and breaking news
- 🎮 **Live Games Page** - Follow ongoing matches with live scores
- 💬 **Fan Interaction Page** - Engage with other fans through comments and discussions
- 📅 **Events & Calendar** - Stay updated on upcoming matches and events
- 🎥 **Multimedia Page** - Watch highlights, interviews, and game recaps
- 👥 **Teams Page** - View team standings, stats, and rosters
- ⚽ **Players Page** - Browse player profiles and statistics

## Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Vite** for fast development and building

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation:

```bash
node --version
npm --version
```

### Installation & Running

1. **Navigate to the project directory**

   ```bash
   cd sports-league-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all required packages including React, React Router, Tailwind CSS, and other dependencies.

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   The terminal will display:
   ```
   VITE v6.3.5  ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

   Open your browser and navigate to: **http://localhost:5173**

### That's it! 🎉

Your Sports League Application should now be running locally.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Application Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── sports/         # Sports-specific components
│   │   └── ui/             # General UI components
│   ├── pages/
│   │   └── sports/         # Sports app pages
│   ├── data/
│   │   └── sportsData.ts   # Mock data for sports content
│   └── App.tsx             # Main app component with routing
├── styles/                  # CSS and theme files
└── ...
```

## Navigation

Once the app is running, you can navigate between pages using:

- **Top Navigation Bar** (desktop) - Logo and main menu
- **Bottom Navigation Bar** (mobile) - Quick access to key sections

### Available Routes:

- `/` - Home (Live Updates Feed)
- `/live` - Live Games
- `/fan-zone` - Fan Interaction
- `/events` - Events & Calendar
- `/media` - Multimedia
- `/teams` - Teams & Standings
- `/players` - Players Directory

## Customization

### Changing Theme Colors

Edit `/src/styles/theme.css` to customize:
- Background colors
- Accent colors
- Team colors
- Typography

### Adding Real Data

Replace mock data in `/src/app/data/sportsData.ts` with real API calls to your backend service.

## Troubleshooting

### Port Already in Use

If port 5173 is already taken, Vite will automatically use the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

### Build Errors

If you encounter errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### TypeScript Errors

Check for TypeScript issues:

```bash
npx tsc --noEmit
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1920px and up)

## Performance

- Fast page loads with Vite's hot module replacement (HMR)
- Optimized bundle size with code splitting
- Lazy loading for better performance
- Smooth animations and transitions

## Future Enhancements

- [ ] Connect to real backend API
- [ ] Add real-time WebSocket updates
- [ ] User authentication and profiles
- [ ] Push notifications for live games
- [ ] Social media integration
- [ ] Fantasy league features
- [ ] Ticket purchasing

## License

This project is for demonstration purposes.

## Support

For issues or questions, please check the existing documentation or create an issue in the project repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

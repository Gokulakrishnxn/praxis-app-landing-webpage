# Praxis App Landing Page

A modern, responsive landing page for the Praxis app built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with beautiful UI components
- **Responsive**: Fully responsive design that works on all devices
- **Waitlist System**: Integrated waitlist signup with Supabase backend
- **Reviews Section**: Dynamic reviews display with carousel functionality
- **Dark/Light Mode**: Toggle between dark and light themes
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Package Manager**: pnpm
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
praxisapplanding/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── reviews-section.tsx
│   ├── theme-provider.tsx
│   └── waitlist-form.tsx
├── lib/                  # Utility libraries
│   ├── supabase/         # Supabase configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── scripts/              # Database scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gokulakrishnxn/praxis-app-landing-webpage.git
   cd praxis-app-landing-webpage
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Set up Supabase database**
   Run the SQL scripts in the `scripts/` directory:
   - `001_create_waitlist_table.sql`
   - `002_create_reviews_table.sql`

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors and Themes
The project uses CSS variables for theming. You can customize colors in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Add more custom colors here */
}
```

### Components
All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 📱 Features Breakdown

### Waitlist System
- Email collection with validation
- Supabase integration for data storage
- Success/error handling
- Rate limiting protection

### Reviews Section
- Dynamic carousel display
- Responsive design
- Smooth animations
- Easy to update content

### Theme Toggle
- Dark/light mode switching
- Persistent theme preference
- Smooth transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `.next`
4. Add environment variables

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Create `.github/workflows/deploy.yml` for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Supabase](https://supabase.com/) - Backend as a service

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for Praxis App**

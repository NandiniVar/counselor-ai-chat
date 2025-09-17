# AI Career Counselor

A beautiful, modern AI-powered career counseling chat application built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **AI Chat Interface**: Beautiful, responsive chat interface for career counseling conversations
- **Modern Design**: Professional dark theme with AI-inspired gradients and animations
- **Mobile-First**: Fully responsive design that works seamlessly on all devices
- **Real-time Chat**: Smooth chat experience with typing indicators and message history
- **Professional UI**: Custom shadcn/ui components with elegant design system

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **UI Components**: shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)

## 📱 Screenshots

The application features:
- Clean, professional landing page with feature highlights
- Modern chat interface with AI and user message bubbles
- Responsive design for mobile and desktop
- Loading states and smooth animations

## 🎨 Design System

The app uses a sophisticated design system with:
- **Colors**: Professional dark theme with purple/blue AI-inspired gradients
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and spring animations
- **Components**: Reusable UI components with proper variants

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-career-counselor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🔧 Backend Integration

This is currently a frontend-only application with simulated AI responses. To add real AI functionality:

### Option 1: Supabase Integration (Recommended)

For production deployment with real AI functionality:

1. **Connect to Supabase**: Use Lovable's native Supabase integration for:
   - User authentication
   - Message persistence in PostgreSQL
   - Edge functions for AI API calls
   - File storage capabilities

2. **AI Integration**: Add OpenAI API integration through Supabase Edge Functions

3. **Database Schema**:
```sql
-- Users table (handled by Supabase Auth)

-- Chat sessions
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES chat_sessions(id),
  content TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'ai')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### Option 2: Custom Backend

If you prefer a custom backend:

1. Set up your preferred backend (Node.js, Python, etc.)
2. Create API endpoints for:
   - Chat sessions CRUD
   - Message storage and retrieval
   - AI integration (OpenAI, Claude, etc.)
3. Update the frontend to connect to your API endpoints

## 🌐 Deployment

### Frontend Deployment

The app can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Full-Stack Deployment

For a complete solution with backend:

1. **Frontend**: Deploy to Vercel/Netlify
2. **Backend**: Use Supabase or deploy your custom backend to:
   - **Vercel Functions**
   - **AWS Lambda**
   - **Railway**
   - **Heroku**

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── ChatHeader.tsx  # Chat page header
│   ├── ChatMessage.tsx # Individual message component
│   └── ChatInput.tsx   # Message input component
├── pages/              # Application pages
│   ├── Index.tsx       # Landing page
│   ├── Chat.tsx        # Main chat interface
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── index.css           # Global styles and design system
└── main.tsx           # Application entry point
```

## 🎯 Next Steps for Production

1. **Connect Backend**: Integrate with Supabase or your preferred backend
2. **Add Authentication**: Implement user login/signup
3. **AI Integration**: Connect to OpenAI, Claude, or other AI APIs
4. **Analytics**: Add usage tracking and analytics
5. **Testing**: Add unit and integration tests
6. **CI/CD**: Set up automated deployment pipeline

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Lovable**
# RoofShelter - Modern Roofing Solutions

A Next.js MERN stack application for roofing services, converted from the Suntop HTML template.

## Feature

- **Next.js 14** with App Router
- **MongoDB** database with Mongoose
- **Express.js** API server
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design**
- **Contact Form** with email notifications
- **Service Management**

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- TypeScript

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Copy `.env.example` to `.env.local` and update with your values:
```bash
cp .env.example .env.local
```
- MongoDB connection string
- Email configuration
- JWT secret

4. Start MongoDB service

5. Run the development server:
```bash
# Start integrated Next.js app (Frontend + Backend)
npm run dev
```

**Access:** http://localhost:3000

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
RoofShelter/
├── src/
│   ├── app/            # Next.js 14 App Router
│   │   ├── api/        # API routes
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   ├── lib/           # Database models & utilities
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── public/            # Static assets
└── .env.example       # Environment variables template
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/services` - Get services list
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration

## Deployment

Build the application:
```bash
npm run build
```

Start production server:
```bash
npm start
```
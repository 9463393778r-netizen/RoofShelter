# RoofShelter - Modern Roofing Solutions

A Next.js MERN stack application for roofing services, converted from the Suntop HTML template.

## Features

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
Copy `.env.local` and update with your values:
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
├── app/                 # Next.js app directory
├── components/          # React components
├── server/             # Express.js backend
│   ├── models/         # MongoDB models
│   └── routes/         # API routes
├── public/             # Static assets
└── lib/                # Utility functions
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
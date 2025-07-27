# Pest Control Backend

## Setup

1. Install dependencies:
   ```bash
   cd backend/backend
   npm install express mongoose cors dotenv json2csv jsonwebtoken nodemailer
   ```

2. Copy `.env.example` to `.env` and fill in your MongoDB Atlas URI and secrets.

3. Start server:
   ```bash
   node server.js
   ```

## API Endpoints
- `POST /api/bookings` — Create booking
- `GET /api/bookings` — List bookings
- `PUT /api/bookings/:id/complete` — Mark booking completed
- `DELETE /api/bookings/:id` — Delete booking
- `GET /api/bookings/export` — Export bookings to CSV
- `POST /api/admin/login` — Admin login
- `GET /api/admin/bookings` — Admin bookings (JWT required)

## Deployment
- Host on Render.com (free tier)
- Set environment variables in Render dashboard

# Pest Control Website (Chennai)

## Features
- Modern, minimal UI (green/white/gray)
- Fully responsive (mobile/desktop)
- SEO optimized (meta, title, H1)
- WhatsApp chat widget
- Booking form (MongoDB)
- Admin panel (login, manage/export bookings)
- Nodemailer email confirmation (optional)
- Favicon & logo
- SEO footer (address, phone)

## Setup

### Frontend
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start dev server:
   ```bash
   npm start
   ```
3. Deploy to Vercel (connect repo, follow prompts)

### Backend
1. Install dependencies:
   ```bash
   cd backend/backend
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in MongoDB Atlas URI, JWT secret, email config.
3. Start server:
   ```bash
   node server.js
   ```
4. Deploy to Render (connect repo, set env vars)

### MongoDB
- Use [MongoDB Atlas](https://www.mongodb.com/atlas) for free cloud database
- Paste connection string in `.env`

## Customization
- Update images in `frontend/public/` (ant.jpg, termite.jpg, cockroach.jpg, hero.jpg, logo.svg, favicon.ico)
- Change WhatsApp number in `WhatsAppWidget.js`
- Update address/phone in `Footer.js` and `Contact.js`

## Admin Login
- Username: `admin`
- Password: `pestchennai2025`

## Booking API
- POST `/api/bookings` (see backend README)

## License
MIT

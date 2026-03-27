
# Josh Ward Portfolio (Production Ready - Netlify)

## 🚀 Local Dev

npm install
npm run dev

## 🔐 Environment Variable

Create `.env`:
ADMIN_PASSWORD=yourpassword

## 🌐 Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Set:
   - Build command: npm run build
   - Publish directory: dist
4. Add environment variable:
   ADMIN_PASSWORD

## ⚠️ Notes
- Uses Netlify Functions (serverless backend)
- Data is in-memory (replace with MongoDB for persistence)
- AI Practitioner cert is emphasized in UI

## 🔥 Next Upgrade
- Replace in-memory storage with MongoDB Atlas
- Add JWT auth
- Add project showcase section

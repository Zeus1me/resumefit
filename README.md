# ResumeFit — AI-Powered Resume Tailoring

Paste a job posting → get a tailored 1-page resume instantly.

Built with **Vite + React** and **Claude API** via **Netlify Functions** (keeps your API key secret).

---

## Deploy to Netlify (5 minutes)

### Step 1: Push to GitHub

```bash
cd resumefit
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/resumefit.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your **resumefit** GitHub repo
4. Build settings should auto-detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**

### Step 3: Add your Anthropic API Key

1. In Netlify, go to **Site settings** → **Environment variables**
2. Add a new variable:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))
3. **Redeploy** the site (Deploys → Trigger deploy → Deploy site)

### Done!

Your site is live at `https://your-site-name.netlify.app`

---

## Run Locally

```bash
npm install
npm run dev
```

For local development with the API, install the Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

This runs the serverless function locally. You'll need a `.env` file:

```
ANTHROPIC_API_KEY=sk-ant-...
```

---

## How It Works

- Your master resume data (skills, experience, projects) is stored in the React app
- When you paste a job posting, it's sent to a Netlify serverless function
- The function calls Claude API with your resume data + the job posting
- Claude returns a tailored selection: custom overview, reordered skills, best-fit bullets and projects
- The app renders a print-ready resume preview
- Use "Print / PDF" to save, or "Copy Text" to paste elsewhere

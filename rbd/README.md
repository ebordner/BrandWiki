# Revenue by Design — Brand Wiki

A living brand intelligence system for Revenue by Design.
*Profit is a design decision.*

---

## How this system works

The wiki is a directory of markdown files maintained by an AI agent (Claude Code or Claude.ai). You source the material; the agent synthesizes, cross-references, and maintains everything.

**You never write the wiki yourself.** You drop in source material and the agent populates it. The wiki compounds over time — every call transcript, testimonial, and note makes it richer.

---

## Setup (Claude Code — recommended)

1. Open Claude Code on your desktop
2. Select this folder as your working directory
3. Drop `CLAUDE.md` into the project — this is the agent's rulebook
4. The agent reads `index.md`, `CLAUDE.md`, and `log.md` at the start of every session

**Tip: Enable "Bypass Permissions"** in Claude Code settings so the agent can work autonomously without requiring approval on every file write. (Settings → toggle Bypass Permissions.)

**Tip: Use Plan Mode first** when starting a new session or ingesting a large source. Plan Mode lets the agent explain what it's going to do before it does it — useful for reviewing large ingests before committing.

---

## How to feed the wiki

### Option A: Drop files directly into the Claude Code chat (easiest)
You don't need to manually move files into the `sources/` folders. Just drag the file into the Claude Code chat window and say "ingest this." The agent will classify it, extract intelligence, update wiki articles, and file the source automatically.

### Option B: Drop files into `sources/` subfolders, then trigger ingest
Put files in the appropriate subfolder:
- `sources/calls/` — call transcripts (Fathom, Grain, etc.)
- `sources/testimonials/` — client testimonials
- `sources/content/` — published content
- `sources/research/` — market research, competitor analysis
- `sources/notes/` — founder notes, brain dumps, Evernote exports

Then tell the agent: **"Ingest sources/calls/[filename]"**

---

## Ongoing source pipeline (recommended)

**Fathom AI** (free) or any call recording software with transcripts is the primary ongoing input. Once you're recording calls with Fathom:

1. Every sales call → download transcript → ingest → objection patterns, ICP language, proof points update automatically
2. Every coaching/delivery call → download transcript → ingest → voice guide, framework documentation, ICP deep profiles improve
3. Every testimonial received → paste or upload → ingest → proof stack updates

The wiki gets richer with every call you take. You don't need to do anything except drop in the transcript and say ingest.

---

## Common commands

| What you want | What to say |
|---|---|
| Ingest a new source | "Ingest [filename or drop file into chat]" |
| Ask a brand question | "What does our ICP say about AI compression?" |
| Generate sales copy | "Write a sales page for the $5K Revenue Architecture Audit using the wiki" |
| Generate a LinkedIn post | "Write a LinkedIn post on the 'revenue events vs revenue architecture' theme in my voice" |
| Generate email copy | "Draft a cold outreach email to a VC GP using the wiki" |
| Health check the wiki | "Run a lint pass on the wiki" |
| Update the brand summary | "Regenerate brand-context.md" |
| Start from scratch (no files) | "Interview me to build out the wiki" |

---

## Using with Claude.ai (without Claude Code)

**Projects:** Paste the contents of `CLAUDE.md` into your project instructions. Upload key wiki articles as project files. The agent will read them and respond with full brand context.

**Any AI tool:** Paste `exports/brand-context.md` into any conversation for instant brand context without uploading files.

---

## Directory structure

```
CLAUDE.md                         ← agent schema and rules (read first every session)
index.md                          ← wiki catalog (one row per article)
log.md                            ← activity log (append-only)
README.md                         ← this file

wiki/
  identity/
    positioning.md                ← core market position, tagline, category of one
    origin-story.md               ← founder backstory, Panoramic WiFi narrative
    founder-profile.md            ← Elissa K. Bordner bio and credentials
    values.md                     ← 7 core beliefs, decision filters
    strategic-pivot.md            ← documented pivot from enterprise to fund-level
    manifesto.md                  ← The Top 5% Manifesto — brand doctrine

  audience/
    icp-primary.md                ← two ICPs: founders + GPs (overview)
    icp-founder-deep.md           ← fly-on-the-wall founder, buying triggers
    icp-gp-deep.md                ← fly-on-the-wall GP, buying triggers
    objection-patterns.md         ← NEEDS SALES CALL TRANSCRIPTS

  offers/
    offer-architecture.md         ← core 6-tier stack with funnel flows
    offer-architecture-expanded.md ← full pricing: $15K, $75K–$150K, $20K/yr, AI OS

  voice/
    voice-guide.md                ← tone, signature phrases, banned phrases

  proof/
    proof-stack.md                ← Panoramic WiFi, $1B career, book, CB Insights

  market/
    competitive-landscape.md      ← silo competitors, Lean Startup counter-positioning

  strategy/
    content-strategy.md           ← LinkedIn + IG, 5 pillars, funnel architecture
    salesumentary-brief.md        ← 12 psychological gates, narrative architecture
    salesumentary-expanded.md     ← storyboard, VSL outline, 4-state buyer model
    approved-copy.md              ← $27 sales page, email sequence, 12 ad assets
    hooks-and-copy.md             ← 40 hooks, 5 CTAs, 23 scroll-stopping lines

  frameworks/
    profitable-method.md          ← complete PROFITABLE acrostic + MVP+R™

sources/
  calls/                          ← call transcripts (Fathom exports go here)
  testimonials/
  content/
  research/
  notes/

exports/
  brand-context.md                ← paste-anywhere brand summary (regenerate periodically)
```

---

## Priority sources to ingest next

The wiki is rich in strategy and ICP depth but has one significant gap:

1. **Sales call transcripts** — the `objection-patterns.md` article is the only placeholder left. It only fills from real sales conversations. Start recording calls with Fathom and drop the first transcript in.
2. **Client testimonials** — the proof stack needs named/anonymized case studies
3. **Published LinkedIn content** — ingesting your actual posts will sharpen the voice guide with real examples

---

## Deploying as a live website (optional but recommended)

The wiki works perfectly as a local folder system. But if you want a browsable website — shareable with team members, clients, or Jeremy — the full stack is: **Claude Code → GitHub → Netlify**.

### The architecture

```
Claude Code (local)
  → pushes changes to GitHub (version control + source of truth)
    → Netlify auto-deploys (live website, updates automatically)
```

Any time Claude Code ingests a new source or updates wiki articles, one command pushes everything live. Your brand wiki becomes a URL.

---

### Step 1: Push to GitHub

**First time setup:**
1. Install GitHub CLI if you haven't (`brew install gh` on Mac, or download from cli.github.com)
2. In Claude Code, say: **"Push and commit everything to a private GitHub repo"**
3. Claude Code will create the repo, commit all files, and push via GitHub CLI
4. Give Claude Code GitHub access when prompted

**Every time after an ingest or update:**
Just say: **"Push this to GitHub"** — Claude Code commits and pushes all changes automatically.

GitHub is the source of truth your agents point to. Every AI tool, every future integration, reads from here.

---

### Step 2: Build the front end (Wikipedia-style website)

Once pushed to GitHub, ask Claude Code:

> "Can you design this codebase into a simple Wikipedia-style website so I can browse all the wiki articles?"

Claude Code will build a clean front end that reads from the markdown files. You can ask it to look however you want — Wikipedia style, app style, whatever. Preview it locally at `localhost` first, then when happy, push to GitHub again.

---

### Step 3: Deploy on Netlify (free)

1. Go to **netlify.com** and log in with GitHub
2. Click **Add new project → Import from Git repository**
3. Find your brand wiki repo
4. Click **Deploy**

That's it. Netlify auto-deploys from GitHub. Every push Claude Code makes → GitHub updates → Netlify rebuilds → live website updates. Automatically.

Other free options: **Cloudflare Pages** works the same way.

---

### What the live website is for

- **GitHub** = the source of truth your AI agents read from
- **Live website** = the human-readable view for you, team members, clients

As you ingest more sources and the wiki grows, more articles appear on the website automatically. You don't manage the site — Claude Code does.

**Scheduled lint:** Eventually, you can set up a scheduled lint that runs automatically, catches stale articles, and keeps the wiki honest without manual intervention.

---

### Summary prompt sequence

| What to say | When |
|---|---|
| "Push and commit to a private GitHub repo" | First time setup |
| "Push this to GitHub" | After every ingest or update |
| "Design this as a Wikipedia-style website" | When ready for a front end |
| "Push this design to GitHub" | After front end is built |
| Then connect GitHub repo to Netlify | One-time setup in Netlify dashboard |

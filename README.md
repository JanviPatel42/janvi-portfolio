# Janvi Vaghasiya: Portfolio (Next.js)

## Run locally
Needs Node.js 18.18 or newer (Node 20 LTS recommended).

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start   # production check

## Small edits you can do yourself
| What | Where |
|---|---|
| Add / delete / reorder projects | `data/projects.js` (instructions at the top of the file) |
| Project images | `public/images/<slug>/` (then reference as `/images/<slug>/01.jpg`) |
| Email, phone, LinkedIn link | `data/site.js` |
| Hero text and buttons | `components/home/Hero.js` |
| About text | `components/home/About.js` |
| Skills list | `components/home/Skills.js` |
| Process steps | `components/home/Process.js` |
| AI section text | `components/home/Ai.js` |
| Tools list | `components/home/Tools.js` |
| Colors | top of `app/globals.css` (`--acc` = mint, `--acc2` = peach) |
| Page title / SEO description | `app/layout.js` |

Pages: `/` home, `/projects` all projects, `/projects/<slug>` one project.

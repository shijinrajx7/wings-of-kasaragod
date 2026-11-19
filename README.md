# Wings of Kasaragod

A static educational nature experience built with HTML5, CSS3 and vanilla JavaScript. No account or backend is required.

## Run locally

With Python 3 installed, run this from the project directory:

```sh
python3 -m http.server 3000
```

Open `http://localhost:3000`. The site can also run through any static-file server. Leaflet map tiles and the two editorial fonts load from free third-party services; the main content, styles and image files are local.

## Project contents

`index.html`, `style.css` and `script.js` are the site source. `assets/` contains the locally reused photographs; `assets/CREDITS.md` lists creators, source pages and licences. `research-notes.md` and `bird-site-research.md` preserve source decisions, study scope and caveats. The project-local UI/UX Pro Max skill is under `.agents/skills/ui-ux-pro-max/`; the reviewed site design direction is in `design-system/wings-of-kasaragod/MASTER.md`.

The bird explorer currently contains 22 sourced species profiles and a language selector for English, Malayalam, Kannada and Tulu. Local-language names are shown only where the project has a reference; otherwise the English name remains visible with an explanatory note.

The visual system is documented in `design-system/wings-of-kasaragod/MASTER.md`. The `.agents/skills/ui-ux-pro-max/` skill is bundled with its search scripts and datasets so future UI changes can use it as a project-local design skill. The cinematic depth pass uses CSS 3D transforms, pointer parallax, scroll-linked hero movement and reduced-motion fallbacks without adding a heavy WebGL dependency.

The interactive map uses OpenStreetMap data and includes the required attribution. Pin coordinates identify the linked OSM objects or mapped locality anchors; they are not wetland or habitat boundaries. The named Chemmattamvayal search link is not assigned an unverified coordinate.

## Evidence

The site labels historical study totals and claims from tourism pages with their source context. A species' general range is not treated as proof of a Kasaragod record. Image captions link to the original Commons file pages; please retain the creator and licence attribution when reusing the project photographs.

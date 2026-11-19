# Wings of Kasaragod — Build Plan

## Product and implementation

Create a polished, responsive, single-page educational nature experience that fulfils the attached Class IX brief. Keep the requested plain HTML5, CSS3 and vanilla JavaScript structure, with no required backend, account, paid service, or build framework. Use semantic HTML, reusable CSS custom properties and data-driven JavaScript for the interactive content. Use a free OpenStreetMap/Leaflet map enhancement where it can be supported with checked place data; retain the location index and source links if map tiles fail.

Install the official `nextlevelbuilder/ui-ux-pro-max-skill` repository into the project as a local, project-scoped universal agent skill, rather than changing global machine setup. It is now installed at `.agents/skills/ui-ux-pro-max/`. Run its design-system generator and focused searches before implementing. The generator returned an unrelated Swiss black-and-pink design system on two attempts; do not apply that palette. Focused searches found compatible **Cinematic Storytelling**, **Nature Distilled**, **Editorial Grid / Magazine**, and **Magazine Style** typography. Use those as restrained guidance while keeping the user's exact visual brief authoritative. Record the reviewed project-specific source of truth at `design-system/wings-of-kasaragod/MASTER.md`.

## Design

Use a premium cinematic nature documentary blended with an editorial travel magazine. Warm ivory and natural beige form reading surfaces; deep forest, emerald and midnight greens create the brand atmosphere; earthy brown and restrained sunlight-gold accents provide variation. Use Libre Bodoni for display headings and Public Sans for body copy and interface controls, based on the matching UI/UX Pro Max magazine-serif/sans pairing. Build asymmetrical, image-led spreads with generous whitespace, readable contrast and restrained glass details. Give each chapter a distinct layout rather than repeating a grid of identical cards.

Use subtle wing/flight-line cues, chapter numbers and fine contour-like lines. Motion is brief and optional: no forced intro delay, no audio before explicit interaction, no dependency on animation for content, full `prefers-reduced-motion` support and visible keyboard focus. This applies the skill's cinematic/editorial and accessibility recommendations without importing the unrelated system-generator palette.

## Page structure and functionality

The experience opens on an immediately usable cinematic Kasaragod scene with title, taglines, Begin Journey, Skip Intro and a muted-by-default sound toggle. A floating responsive navigation leads to Home, Destinations, Birds, Migration, Habitats, Kerala, Gallery and Conservation. Include an image-led Kasaragod hero; all 12 requested local destinations; a bird explorer with sourced and qualified profiles, scientific-name search, habitat/resident-migrant filters, alphabetical sort, favourites and keyboard-accessible details; a “Can you identify this bird?” reveal; accurate migration storytelling; eight habitat chapters; and a clearly separate Kerala-wide chapter for all eight requested places. Give dedicated features to Valiyaparamba, Kidoor, Chemmattamvayal, Kumbla and Udinoor, label historical survey findings with their dates and scope, and avoid invented totals.

Provide a free interactive location explorer for Bekal Fort, Valiyaparamba, Ranipuram, Chandragiri, Kumbla, Kidoor, Chemmattamvayal and Kappil Beach. Use sourced OSM place coordinates only. If a location's exact marker is unsupported, retain the name as a searchable map/source link instead of making up coordinates. Add a category-filtered photo gallery with keyboard-operable lightbox, verified nature facts, conservation actions, final sunset chapter and an Explore Again action. Include Sources & References next to the educational facts.

## Project structure

```text
index.html                         Semantic single-page experience and section landmarks
style.css                          Design tokens, responsive layouts, motion and accessibility states
script.js                          Navigation, bird dataset/search, filters, profiles, quiz, map and gallery
assets/                            Licensed local photographs plus attribution/source metadata
.agents/skills/ui-ux-pro-max/       Project-local UI/UX Pro Max skill installed from its public repository
design-system/wings-of-kasaragod/  Reviewed project design-system source of truth
research-notes.md                   Search and evidence decisions with source URLs
plan.md                             Approved implementation and design decisions
TODO.md                             Outcome-based requirements
```

## Evidence and scope decisions

The five named special birding locations are being checked against original scientific or credible official material before their survey claims are included. Other local bird occurrence claims appear only where supported by regional records or a clearly identified survey; a species’ general Indian range is not proof of a Kasaragod sighting. Survey counts retain source context. Destination, bird and map data link to evidence. Unsupported details are qualified or omitted. Reused Commons photographs are retained with attribution, source-page and licence metadata; photos are not presented as site-specific unless their source identifies that place.

## Build and handoff

After approval, create the outcome-based `TODO.md`, install and consult the project-local skill, generate and review the design system, configure HTML/CSS/JavaScript diagnostics, then implement the static site. The TODO is now in place and diagnostics have been registered for JavaScript, HTML and CSS. Declare the site's root route before starting the dev server. Once meaningful content exists, start the configured Preview and check responsive layouts, source/credit links, map data, keyboard interactions, reduced motion, browser errors and each interactive feature. Fix concrete failures before saving the completed project version. Publishing remains separate and is not part of this plan.

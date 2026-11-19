# Wings of Kasaragod — Design System Master

This is the reviewed, project-specific source of truth. UI/UX Pro Max’s general `--design-system` result returned an unrelated Swiss black-and-pink dashboard palette on two queries. That unmatched output was rejected. The visual system below follows the user’s explicit creative direction, informed by compatible UI/UX Pro Max searches: Cinematic Storytelling, Nature Distilled, Editorial Grid / Magazine and Magazine Style typography.

## Brand and movement

**Positioning:** A school-friendly, premium digital field guide to Kasaragod’s landscapes, birds and habitats, with Kerala-wide nature clearly separated. **Personality:** cinematic, grounded, curious.

Use a nature-documentary × travel-magazine aesthetic: image-led chapter openings, asymmetric editorial spreads, confident serif headlines, calm explanatory prose and carefully documented facts. Avoid generic templates, repeated card grids, excessive gradients, decorative noise and information hidden behind effects. Keep the interface welcoming to Class IX readers without patronizing language.

## Palette

CSS custom properties are the implementation source of truth.

| Role | Value | Use |
|---|---|---|
| Midnight green | `#0A241D` | Dark hero/footer surfaces, overlay text |
| Deep forest | `#10382D` | Primary brand, buttons, dark sections |
| Forest | `#1A4B3B` | Secondary green surfaces and links |
| Emerald | `#2F785A` | Selective emphasis, active states |
| Ivory | `#F5F1E7` | Main page ground |
| Warm paper | `#EAE1D1` | Alternate editorial surfaces |
| Sand | `#D5C3A6` | Quiet borders and caption grounds |
| Earth | `#6B5140` | Secondary natural accent |
| Sun gold | `#C6A15B` | Small decorative accents only; never small body text |
| Ink | `#17251F` | Primary reading text on light surfaces |
| Muted ink | `#506258` | Secondary copy, kept readable |
| Line | `#D7D2C6` | Dividers, form and card edges |
| White | `#FFFFFF` | Text on sufficiently deep forest surfaces |

Use one surface family per section rather than applying gradients everywhere. Keep text and controls legible over photos with a restrained dark scrim and verify contrast after composition. Gold is ornamental, not a text color. Buttons use deep forest with white/ivory labels or outlined forest on ivory.

## Typography

The UI/UX Pro Max **Magazine Style** result matches the request: **Libre Bodoni** for display/editorial headings and **Public Sans** for body copy, navigation and controls. Load with a system fallback if the font service is unavailable. Keep large headings relatively short; use readable line lengths for educational paragraphs and a small uppercase sans-serif treatment for chapter labels and metadata.

## Layout and signature elements

Build a magazine-like narrative rather than a centered grid of cards. Alternate full-bleed landscape chapters, split image/text spreads, offset galleries, narrow reading columns, map/table-of-contents panels and open destination indexes. Give each major section a different composition. On mobile, convert these compositions to a clear one-column reading order without losing context.

Use three restrained motifs: a small wing/flight-line wordmark; fine gold route/contour lines to connect chapters; and small chapter numbers with geographic labels. These motifs support orientation and should not compete with photographs or copy.

## Components and interaction

Buttons and links have generous hit areas, clear text labels, a coherent hover state and a strong visible keyboard focus outline. Search inputs and filter controls receive explicit labels and selected state. Cards that open details announce that action rather than appearing as static decoration. The bird profile uses a semantic dialog with focus entry, Escape close, focus restoration and a keyboard-operable close control. The gallery lightbox supports Escape and arrow keys with a visible position label. Favourites and filters announce state; do not rely on color alone.

The map is optional interactive enhancement on top of a useful location index. Markers use checked coordinates and link to OpenStreetMap; if map tiles or JavaScript do not load, retain the destination list and source links. Never draw speculative route lines.

## Motion and performance

Use the skill’s low-motion dial as a constraint: short opacity and 8–12px position reveals, gentle hover transitions and no elaborate timeline engine. Implement reveals with progressive enhancement so all text remains visible without JavaScript. Do not delay the opening or force audio. Sound begins only after an explicit toggle. The `prefers-reduced-motion: reduce` mode removes nonessential transitions, parallax and automatic movement. Reduce image payloads, use responsive display sizes, `loading="lazy"` below the fold and `decoding="async"`. Use `IntersectionObserver` where helpful; no GSAP dependency is needed.

## Accessibility and responsive behavior

Use semantic landmarks/headings, descriptive image alt text, skip link, labels and live-result status where needed. All interactions work by keyboard. Preserve visible focus and do not cover focused elements with sticky controls. Check body text contrast (at least 4.5:1), no-JavaScript visibility, reflow without horizontal scrolling, small 375px width, tablet and wide desktop. Provide an operable mobile navigation and large enough targets.

## Content and image integrity

A photo may identify a place only when its Commons source does. If it depicts a different but related place, label it as representative and say which location is shown. Include author, source-file link and licence for each reused Commons photo, including CC BY-SA attribution. Do not use general species range as proof of Kasaragod sightings. Keep scientific and tourism claims linked to sources in the relevant sections and in Sources & References.

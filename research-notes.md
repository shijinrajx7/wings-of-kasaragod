# Research notes — Wings of Kasaragod

## UI/UX Pro Max

The public repository is [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill). Its official README describes a project-scoped universal-skill installer (`npx ui-ux-pro-max-cli init --ai universal`) and a local Python search script. The project-local skill is installed at `.agents/skills/ui-ux-pro-max/` and was reviewed before use.

The installed design-system search returned **Minimalism & Swiss Style** with black/white and a bright pink accent twice, which conflicts with the user's explicit nature palette and editorial-serifed direction. That palette/type system was not used. Matching focused searches found Cinematic Storytelling for scroll-driven chapters, Nature Distilled for earthy materials and warmth, Editorial Grid / Magazine for asymmetry and photography, and the Magazine Style pairing of Libre Bodoni display headings with Public Sans UI/body copy. A keyboard-focus search recommended visible focus rings and ensuring sticky controls do not obscure focused elements. Compatible recommendations were adapted to the brief and recorded in `design-system/wings-of-kasaragod/MASTER.md`.

Sources: [UI/UX Pro Max repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [skill instructions](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md).

## Reusable imagery

The project includes 26 locally stored, display-size Wikimedia Commons JPEGs. `assets/CREDITS.md` records the originating file page, named creator and exact reuse licence for each. The previously unresolved Madhur Temple image was replaced with `File:Madhurtemple.jpg`, credited to ARUNKUMAR P.R under CC BY-SA 3.0. The bird encyclopedia now uses identified photographs of the named species rather than wetland or unrelated-bird stand-ins. Bird photographs are explicitly separated from Kasaragod occurrence evidence; local observations are cited to studies or district reports instead.

The Madhur Temple file page was opened and checked for its description, author and CC BY-SA 3.0 terms. Commons image metadata was checked for the added bird assets before copying and resizing them. Representative coastal photos used for Kappil, Kumbla and other entries remain labelled with their actual place names; no image is represented as a different site photograph.

## Bird migration explanation

The general migration paragraph now follows the Cornell Lab of Ornithology's [migration overview](https://www.allaboutbirds.org/news/the-basics-how-why-and-where-of-bird-migration/), which discusses food, breeding sites, daylight, variable routes and timing. It does not treat cold weather as a single universal cause or assign an unverified route to Kasaragod. The separate [UNEP–AEWA wetland note](https://www.unep-aewa.org/news/world-wetlands-day-2010-caring-wetlands-answer-climate-change) supports the general role of wetlands as migratory waterbird stopover sites; local seasonal claims remain tied to the Chemmattamvayal study.

## Map coordinates

An OpenStreetMap Nominatim lookup was performed on 2026-11-19 for the eight requested places. Returned OSM anchor coordinates, not natural-area boundaries, are: Bekal Fort `12.3922238, 75.0327651` ([way 670422415](https://www.openstreetmap.org/way/670422415)); Valiyaparamba locality `12.1443140, 75.1447930` ([node 634467738](https://www.openstreetmap.org/node/634467738)); Ranipuram locality `12.4164072, 75.3639767` ([node 650128663](https://www.openstreetmap.org/node/650128663)); Chandragiri Fort `12.4699068, 75.0032875` ([way 799197980](https://www.openstreetmap.org/way/799197980)); Kumbla locality `12.5989856, 74.9464131` ([relation 12498562](https://www.openstreetmap.org/relation/12498562)); Kidoor locality `12.6238609, 74.9776394` ([node 13805747338](https://www.openstreetmap.org/node/13805747338)); Kappil Beach `12.4258699, 75.0112564` ([node 12596559185](https://www.openstreetmap.org/node/12596559185)). Chemmattamvayal Wetlands had no matching Nominatim record, so its name is linked in an OSM search rather than assigned an unverified pin. OSM is attributed on the map.

## Scientific bird-site research

The site preserves independent findings for Valiyaparamba Backwaters, Kidoor, Chemmattamvayal Wetlands, Kumbla Estuary and Udinoor Polders in `bird-site-research.md`. Survey totals retain their original dates and scope. Tourism-page estimates are labelled as such, Kidoor's 156 remains a 2016–2018 study-area result, Chemmattamvayal's 145/42 finding includes the abstract category-total caveat, and the Udinoor 173 claim remains attributed to a 2025 report because its underlying eBird checklist was inaccessible.

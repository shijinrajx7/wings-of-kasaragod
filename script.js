/* Wings of Kasaragod — static, evidence-led educational field guide. */
'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const link = (url, label, extra = '') => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" ${extra}>${esc(label)}</a>`;
  const commons = 'https://commons.wikimedia.org/wiki/File:';

  const photos = {
    bekalPanorama: {src:'assets/bekal-panorama.jpg', title:'Sea and coast beside Bekal Fort', author:'Vinayaraj', license:'CC BY-SA 3.0', url:commons+'SeaFromBakel.jpg', alt:'Wide view of sea and coast by Bekal Fort, Kasaragod'},
    bekalFort: {src:'assets/bekal-fort.jpg', title:'Bekal Fort', author:'Prathvi Acharya', license:'CC BY-SA 4.0', url:commons+'Bekal_Fort_Kerala_2026.jpg', alt:'Laterite ramparts and grounds of Bekal Fort'},
    valiyaBridge: {src:'assets/valiyaparamba-bridge.jpg', title:'Valiyaparamba Madakkal suspension bridge', author:'Alertedlevel2', license:'CC BY 3.0', url:commons+'Valiyaparamba_Madakkal_suspension_bridge.JPG', alt:'Suspension bridge over the Valiyaparamba backwaters'},
    valiyaBeach: {src:'assets/valiyaparamba-beach.jpg', title:'Valiyaparamba Beach', author:'Alertedlevel2', license:'CC BY 3.0', url:commons+'Valiyaparamba_beach.JPG', alt:'Valiyaparamba beach and coastline'},
    ranipuram: {src:'assets/ranipuram-22.jpg', title:'Ranipuram hill station', author:'Rajeshodayanchal', license:'CC BY-SA 4.0', url:commons+'Ranipuram-hill-station-kasaragod-22.jpg', alt:'Green hills at Ranipuram in Kasaragod district'},
    chandragiri: {src:'assets/chandragiri-fort.jpg', title:'Chandragiri Fort after renovation', author:'Hafeezkv', license:'CC BY-SA 4.0', url:commons+'Chandragiri_Fort,_Kerala.jpg', alt:'Chandragiri Fort in Kasaragod'},
    ananthapura: {src:'assets/ananthapura-temple.jpg', title:'Ananthapura temple, Kasaragod', author:'Vinayaraj', license:'CC BY-SA 3.0', url:commons+'Ananthapura_temple_Kasaragod.jpg', alt:'Temple structures reflected in the lake at Ananthapura'},
    silentValley: {src:'assets/silent-valley-waterfall.jpg', title:'Karuvara waterfall in the Silent Valley buffer zone', author:'നിരക്ഷരൻ', license:'CC BY-SA 3.0', url:commons+'Karuvara_water_fall_-_silent_valley.jpg', alt:'Waterfall in the Silent Valley buffer zone, Palakkad'},
    eravikulam: {src:'assets/eravikulam-waterfall.jpg', title:'Waterfall in Eravikulam National Park', author:'Ravi Dwivedi', license:'CC BY-SA 4.0', url:commons+'Eravikulam-national-park-munnar-india.jpg', alt:'Waterfall in Eravikulam National Park, Munnar'},
    periyar: {src:'assets/periyar-forest.jpg', title:'Forest in Periyar Tiger Reserve', author:'Ashwindoc1', license:'CC BY-SA (see source page)', url:commons+'Images_of_periyar_tiger_reserve_%2C_kerala_india_04.jpg', alt:'Forest landscape inside Periyar Tiger Reserve'},
    kumarakom: {src:'assets/kumarakom-bird-sanctuary.jpg', title:'Kumarakom Bird Sanctuary', author:'P. K. Niyogi', license:'Public domain', url:commons+'Kerala_Kumarakom_Bird_Sanctuary.jpg', alt:'Landscape at Kumarakom Bird Sanctuary'},
    wayanad: {src:'assets/wayanad-wildlife.jpg', title:'Wayanad wildlife sanctuary', author:'ram', license:'CC BY-SA 4.0', url:commons+'Wayanad_wildlife_sanctuary_image.jpg', alt:'Wildlife landscape in Wayanad Wildlife Sanctuary'},
    thattekad: {src:'assets/thattekad-hornbill.jpg', title:'Malabar Grey Hornbill at Thattekad', author:'Lip Kee Yap', license:'CC BY-SA 2.0', url:commons+'Ocyceros_griseus_-India-8a.jpg', alt:'Malabar Grey Hornbill photographed at Thattekad, Kerala'},
    ibis: {src:'assets/black-headed-ibis.jpg', title:'Black-headed Ibis in India', author:'J. M. Garg', license:'CC BY 3.0', url:commons+'Black-headed_Ibis_%28Threskiornis_melanocephalus%29_W_IMG_1431.jpg', alt:'Black-headed Ibis standing in a wet field'},
    kingfisher: {src:'assets/white-throated-kingfisher.jpg', title:'White-throated Kingfisher in flight', author:'Bhadraslg', license:'CC BY-SA 4.0', url:commons+'White-throated_kingfisher_%28flying%29.jpg', alt:'White-throated Kingfisher flying above a green landscape'},
    pondHeron: {src:'assets/indian-pond-heron.jpg', title:'Indian Pond Heron', author:'J. M. Garg', license:'CC BY-SA 3.0', url:commons+'Indian_Pond_Heron_I_IMG_8076.jpg', alt:'Indian Pond Heron perched on a branch'},
    madhur: {src:'assets/madhur-temple-commons.jpg', title:'Madhur Temple, Kasaragod', author:'ARUNKUMAR P.R', license:'CC BY-SA 3.0', url:commons+'Madhurtemple.jpg', alt:'The layered timber roof and entrance of Madhur Temple in Kasaragod'},
    spottedDove: {src:'assets/spotted-dove.jpg', title:'Spotted Dove in Vadodara', author:'Mahmadanesh', license:'CC BY 4.0', url:commons+'Spotted_dove_at_vadodara.jpg', alt:'Spotted Dove perched on a pole'},
    garganey: {src:'assets/garganey.jpg', title:'Male Garganey', author:'Charles J. Sharp', license:'CC BY-SA 4.0', url:commons+'Garganey_%28Spatula_querquedula%29_male.jpg', alt:'Male Garganey in flight'},
    thickKnee: {src:'assets/great-thick-knee.jpg', title:'Great Thick-knee', author:'Charles J. Sharp', license:'CC BY-SA 4.0', url:commons+'Great_thick-knee_%28Esacus_recurvirostris%29.jpg', alt:'Great Thick-knee on open ground'},
    lesserPlover: {src:'assets/lesser-sand-plover.jpg', title:'Lesser Sand Plover', author:'Vedant Raju Kasambe', license:'CC BY-SA 4.0', url:commons+'Lesser_Sand_Plover_Charadrius_mongolus_by_Vedant_Kasambe_01.jpg', alt:'Lesser Sand Plover on a shoreline'},
    greenPigeon: {src:'assets/orange-breasted-green-pigeon.jpg', title:'Orange-breasted Green Pigeon', author:'Dr. Raju Kasambe', license:'CC BY-SA 4.0', url:commons+'Orange-breasted_Pigeon_Treron_bicinctus_by_Dr._Raju_Kasambe_DSCN3708_%285%29.jpg', alt:'Orange-breasted Green Pigeon perched among leaves'},
    orientalDarter: {src:'assets/oriental-darter.jpg', title:'Oriental Darter with fish, photographed in Nepal', author:'Mildeep', license:'CC BY-SA 4.0', url:commons+'Oriental_Darter_with_fish%2C_Nepal.jpg', alt:'Oriental Darter holding a fish'},
    gadwall: {src:'assets/gadwall.jpg', title:'Female Gadwall', author:'Rhododendrites', license:'CC BY-SA 4.0', url:commons+'Gadwall_female_flapping_%2891072%29.jpg', alt:'Female Gadwall in flight'},
    commonTeal: {src:'assets/common-teal.jpg', title:'Common Teal', author:'Prasan Shrestha', license:'CC BY-SA 4.0', url:commons+'Common_teal_drinking_water.jpg', alt:'Common Teal drinking at a wetland'},
    indianNightjar: {src:'assets/indian-nightjar.jpg', title:'Indian Nightjar', author:'Dr. Raju Kasambe', license:'CC BY-SA 4.0', url:commons+'Indian_Nightjar_Caprimulgus_asiaticus_by_Raju_Kasambe_DSCN2887_%281%29_01.jpg', alt:'Indian Nightjar resting on the ground'}
  };
  const credit = photo => `${esc(photo.author)} / Wikimedia Commons · ${esc(photo.license)} · ${link(photo.url, 'source file')}`;

  const sources = [
    {group:'places', title:'Kasaragod District — Bekal Fort', note:'Official district description and location.', url:'https://kasargod.nic.in/en/tourist-place/bekal-fort/'},
    {group:'places', title:'Kerala Tourism — Bekal Fort', note:'History and visitor description.', url:'https://www.keralatourism.org/destination/bekal-fort/303/'},
    {group:'places', title:'Kasaragod District — Valiyaparamba', note:'Island, fishing, mussel cultivation and local visitor context.', url:'https://kasargod.nic.in/en/tourist-place/valiyaparamba/'},
    {group:'places', title:'Kerala Tourism — Valiyaparamba', note:'Backwater geography and tourism page; its approximate bird figure has no survey method.', url:'https://www.keralatourism.org/destination/valiyaparamba-kasaragod/161/'},
    {group:'places', title:'Kasaragod District — Ranipuram Hill Station', note:'Location, former name and visitor information.', url:'https://kasargod.nic.in/en/tourist-place/ranipuram-hill-station/'},
    {group:'places', title:'Kerala Tourism — Ranipuram proposed wildlife sanctuary', note:'Landscape description; sanctuary status is explicitly proposed, not established.', url:'https://www.keralatourism.org/bekal/ranipuram-proposed-wildlife-sanctuary.php'},
    {group:'places', title:'Kasaragod District — places of interest', note:'Official district descriptions including Chandragiri, Ananthapura, Madhur and other local places.', url:'https://kasargod.nic.in/en/places-of-interest/'},
    {group:'places', title:'Kerala Tourism — Chandragiri Fort', note:'Fort history and visitor context.', url:'https://www.keralatourism.org/destination/chandragiri-fort-kasaragod/165/'},
    {group:'places', title:'Kerala Tourism — Ananthapura Lake Temple', note:'Temple location, architecture and historical description.', url:'https://www.keralatourism.org/destination/ananthapura-lake-temple-kasaragod/159/'},
    {group:'places', title:'National Culture Fund — protected monuments', note:'Bekal Fort appears in the ASI protected-monument list.', url:'https://ncf.nic.in/about-us/protected-monuments'},
    {group:'places', title:'Zoological Survey of India, Occasional Paper No. 246', note:'Kumbla–Shiriya estuary habitat account, mangroves and intertidal mudflats.', url:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf'},
    {group:'places', title:'Kerala Tourism — destinations and places', note:'Official state tourism index for place-name context.', url:'https://www.keralatourism.org/destination/'},
    {group:'places', title:'Kerala Tourism — destinations in Kasaragod', note:'Official district tourism listings; not used as evidence of bird counts.', url:'https://www.keralatourism.org/bekal/'},
    {group:'places', title:'Kerala Tourism — Silent Valley National Park', note:'Official park profile.', url:'https://www.keralatourism.org/destination/silent-valley-national-park/257/'},
    {group:'places', title:'Kerala Tourism — Periyar Tiger Reserve', note:'Official reserve profile.', url:'https://www.keralatourism.org/destination/periyar-tiger-reserve/192/'},
    {group:'places', title:'Kerala Tourism — Thattekad Bird Sanctuary', note:'Official sanctuary profile.', url:'https://www.keralatourism.org/destination/thattekad-bird-sanctuary/40/'},
    {group:'places', title:'Kerala Tourism — Kumarakom Bird Sanctuary', note:'Official sanctuary profile.', url:'https://www.keralatourism.org/destination/kumarakom-bird-sanctuary/21/'},
    {group:'places', title:'Kerala Tourism — Kadalundi Bird Sanctuary', note:'Official destination profile; community-reserve naming is kept distinct.', url:'https://www.keralatourism.org/destination/kadalundi-bird-sanctuary/193/'},
    {group:'places', title:'Kerala Tourism — Wayanad Wildlife Sanctuary', note:'Official sanctuary profile.', url:'https://www.keralatourism.org/destination/wayanad-wildlife-sanctuary/283/'},
    {group:'places', title:'Kerala Tourism — Eravikulam National Park', note:'Official park profile.', url:'https://www.keralatourism.org/destination/eravikulam-national-park/178/'},
    {group:'places', title:'OpenStreetMap — Kasaragod anchors', note:'Mapped objects/localities; map pins are not habitat boundaries.', url:'https://www.openstreetmap.org/'},
    {group:'studies', title:'Rodrigues, Krishna, Kidoor & Pradeep — Avian Diversity of Kidoor', note:'Area-count study conducted from September 2016 to December 2018; 156 species within its study area.', url:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala'},
    {group:'studies', title:'Mohan, Anjitha & Rodrigues — Chemmattamvayal wetland birds', note:'Journal of Threatened Taxa, study period December 2014–March 2018; 145 species, including 42 classified as winter migrants. Abstract categories do not sum to 145.', url:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246'},
    {group:'studies', title:'Zoological Survey of India — Kumbla–Shiriya estuary', note:'Intertidal mudflats and mangroves; qualitative habitat account, not a site-wide bird total or protection designation.', url:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf'},
    {group:'studies', title:'Kasaragod district bird checklist', note:'District-level checklist based on eBird and published literature through 29 May 2020; not a site-level abundance estimate.', url:'https://www.researchgate.net/publication/342961116_A_Checklist_of_the_Birds_of_Kasaragod_District_Kerala_India'},
    {group:'studies', title:'Kasaragod bird checklist additions through February 2023', note:'Includes a documented Great Thick-knee at Kumbla–Shiriya Estuary in 2020–21.', url:'https://www.researchgate.net/publication/374510390_Checklist_of_the_birds_of_Kasaragod_district_additions_till_February_2023'},
    {group:'studies', title:'Onmanorama — Gadwall reported at Udinoor', note:'7 December 2025 report attributes a total of 173 species to eBird; the underlying checklist could not be independently accessed.', url:'https://www.onmanorama.com/news/kerala/2025/12/07/gadwall-duck-kanhangad--asaragod-avian-diversity.html'},
    {group:'studies', title:'Kerala Tourism — Valiyaparamba bird estimate', note:'Approximate “about 90” claim is repeated as a tourism-page statement; no survey date, method or checklist is provided.', url:'https://www.keralatourism.org/bekal/valiyaparamba-backwaters.php'},
    {group:'studies', title:'Cornell Lab — The Basics of Bird Migration', note:'General explanation of food, breeding habitat, daylight, route variation and migration timing; not evidence of a local Kasaragod route.', url:'https://www.allaboutbirds.org/news/the-basics-how-why-and-where-of-bird-migration/'},
    {group:'studies', title:'Convention on Wetlands — wetlands and biodiversity', note:'General educational background on wetland ecosystems and their conservation.', url:'https://www.ramsar.org/about/our-mission'},
    {group:'studies', title:'UNEP–AEWA — wetlands as migratory stopover sites', note:'General explanation of why migratory waterbirds use wetlands to feed and rest; it does not establish a Kasaragod route.', url:'https://www.unep-aewa.org/news/world-wetlands-day-2010-caring-wetlands-answer-climate-change'},
    {group:'studies', title:'Koodu Magazine — Malayalam bird names', note:'Regional Malayalam names used only where a matching common-name entry is supported; generic names are labelled as generic.', url:'https://koodumagazine.com/featured-stories/2020/06/%E0%B4%95%E0%B4%BF%E0%B4%B3%E0%B4%BF%E0%B4%AF%E0%B5%87-%E0%B4%95%E0%B4%BF%E0%B4%B3%E0%B4%BF%E0%B4%AF%E0%B5%87/'},
    {group:'studies', title:'Kerala school resource — Malayalam bird vocabulary', note:'Common Malayalam bird words, including kingfisher and peafowl terms.', url:'https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/VOL1/STD4/ParisarapadanamMalayalam/ParisarapadanamMalayalam.pdf'},
    {group:'studies', title:'Easy Tulu — bird vocabulary', note:'General Tulu bird words; broad group names are not presented as unique species names.', url:'https://www.easytulu.com/p/birds.html'},
    {group:'studies', title:'Kannada bird-name vocabulary', note:'Common Kannada bird words used as broad regional names where a species-specific form was not verified.', url:'https://knowaboutkannadalanguage.blogspot.com/2019/01/some-common-bird-names-in-kannada-and.html'}
  ];

  const destinations = [
    {id:'bekal-fort-and-beach', name:'Bekal Fort & Beach', type:'COASTAL LANDMARK', location:'Bekal, Pallikera village, Hosdurg Taluk, Kasaragod district.', image:photos.bekalFort, imageNote:'Photograph depicts Bekal Fort.', intro:'A major laterite fort beside the Arabian Sea. The district administration identifies it as the largest fort in Kerala; Kerala Tourism dates it to the mid-17th century and links its construction to Shivappa Nayaka.', significance:'Its walls and keyhole-like plan tell a story of coastal defence and the region’s layered history. Bekal Fort is included in the ASI protected-monument list.', visitor:'Explore the ramparts and sea-facing viewpoints; beach access and facilities can change, so check local guidance.', wildlife:'No named bird species or site-wide bird count is claimed here. The coastal setting is not itself a protected bird sanctuary.', fact:'The protected-monument list names “Bekal Fort, Pallikere, Kasargod.”', source:'https://www.keralatourism.org/destination/bekal-fort/303/', imageSource:photos.bekalFort.url},
    {id:'valiyaparamba-backwaters', name:'Valiyaparamba Backwaters', type:'ISLAND & WATERWAYS', location:'Kasaragod district, about 10 km south of Nileshwaram according to Kerala Tourism.', image:photos.valiyaBridge, imageNote:'Photograph depicts the Valiyaparamba Madakkal bridge.', intro:'A long backwater stretch fed by rivers including the Tejaswini, with islands, fishing activity and mussel cultivation shaping the landscape.', significance:'The district administration describes Valiyaparamba as an island separated from the mainland by backwaters. Kerala Tourism calls it the third-largest backwater stretch in the state.', visitor:'Boat cruises are described by Kerala Tourism; local operators and access conditions should be checked before a visit.', wildlife:'The district page mentions a variety of sea birds but names no species. The “about 90” bird figure on a tourism page has no survey method or date.', fact:'The roughly 90-species statement is an approximate tourism-page claim, not a verified survey total.', source:'https://kasargod.nic.in/en/tourist-place/valiyaparamba/', imageSource:photos.valiyaBridge.url},
    {id:'ranipuram-hills', name:'Ranipuram Hills', type:'HIGHLAND WALK', location:'Kasaragod district, about 48 km east of Kanhangad; district administration gives an elevation of 780 m.', image:photos.ranipuram, imageNote:'Photograph depicts the Ranipuram hill station.', intro:'A highland destination once known as Madathumala. The official district page identifies trekking as a visitor activity; Kerala Tourism describes grassland and Shola forest landscapes.', significance:'Ranipuram’s grassland–forest mosaic makes it a notable highland landscape. A Golden-headed Cisticola was reported there in 2017 and described in a 2018 note as a first district record at that time.', visitor:'A hill walk offers a different view of Kasaragod’s inland landscape. Follow local trail and weather guidance.', wildlife:'The Cisticola record is a dated observation, not a claim of a current population. Kerala Tourism labels the wildlife sanctuary proposal as proposed; this page does not call Ranipuram an established sanctuary.', fact:'A 2018 published note reported the Golden-headed Cisticola at Ranipuram on 10 September 2017.', source:'https://kasargod.nic.in/en/tourist-place/ranipuram-hill-station/', imageSource:photos.ranipuram.url},
    {id:'chandragiri-fort', name:'Chandragiri Fort', type:'RIVERFRONT HISTORY', location:'About 3 km south of Kasaragod town, above the southern bank of the Chandragiri River.', image:photos.chandragiri, imageNote:'Photograph depicts Chandragiri Fort.', intro:'A 17th-century fort built, according to the district history, by Sivappa Nayak of Bednore. The fort overlooks the river near its meeting with the Arabian Sea.', significance:'The elevated square fort connects local history with the river–coast geography of north Kerala.', visitor:'Kerala Tourism highlights the broad sea view and sunset outlook; confirm current access and any local tour availability.', wildlife:'No verified bird species specific to the fort grounds are claimed in this field note.', fact:'The district account describes a large square structure above the river’s southern bank.', source:'https://www.keralatourism.org/destination/chandragiri-fort-kasaragod/165/', imageSource:photos.chandragiri.url},
    {id:'ananthapura-lake-temple', name:'Ananthapura Lake Temple', type:'TEMPLE ON A LAKE', location:'Ananthapura near Kumbla, Kasaragod district.', image:photos.ananthapura, imageNote:'Photograph depicts Ananthapura Temple.', intro:'A Hindu shrine set in the middle of a lake. Kerala Tourism dates its construction to the 9th century; the district describes it as a place of religious importance.', significance:'Kerala Tourism calls it Kerala’s only temple located in the middle of a lake. Local origin stories are presented as tradition, not established history.', visitor:'A place of worship and architecture. Visitors should respect temple customs and opening guidance.', wildlife:'Kerala Tourism reported the temple’s crocodile Babia died in 2022. That historical account is not evidence that a crocodile is currently present.', fact:'The temple’s lake setting makes it unusual among Kerala’s shrines.', source:'https://www.keralatourism.org/destination/ananthapura-lake-temple-kasaragod/159/', imageSource:photos.ananthapura.url},
    {id:'kappil-beach', name:'Kappil Beach', type:'COASTAL LANDSCAPE', location:'Kasaragod district; the mapped anchor identifies Kappil Beach, not the full shoreline.', image:photos.valiyaBeach, imageNote:'Representative Kasaragod coast image: the photograph shows Valiyaparamba Beach, not Kappil.', intro:'A coastal destination named in the district’s tourism circuit, where the Arabian Sea meets the shore. This card uses an accurately labelled regional coast photograph rather than passing another beach off as Kappil.', significance:'Kappil adds a beach landscape to Kasaragod’s varied coast. No specific wildlife designation or local species claim is inferred from its name.', visitor:'A place for a shoreline walk and coastal views. Take care around waves, tides and fragile beach vegetation.', wildlife:'No site-specific bird record is claimed here.', fact:'The photograph shown is Valiyaparamba Beach; it is regional context, not a Kappil photograph.', source:'https://kasargod.nic.in/en/places-of-interest/', imageSource:photos.valiyaBeach.url},
    {id:'kumbla-estuary', name:'Kumbla Estuary', type:'MANGROVES & MUDflats', location:'Kumbla–Shiriya river confluence near Kozhipady Kadappuram, Kasaragod district.', image:photos.valiyaBeach, imageNote:'Regional coastal context: this image depicts Valiyaparamba Beach, not Kumbla.', intro:'At the Kumbla–Shiriya confluence, a Zoological Survey of India account describes intertidal mudflats and mangrove habitat. The photo is clearly marked as regional context.', significance:'The ZSI account names several mangrove plants and describes low-tide mudflats as shorebird foraging ground. It gives no standardized site-wide species total or formal protection designation.', visitor:'This is a sensitive estuarine setting. Observe from appropriate access points and avoid disturbing mudflat and mangrove life.', wildlife:'The ZSI account names shorebirds, while a separate checklist update documents one Great Thick-knee at the estuary in 2020–21. Neither source supports an abundance claim.', fact:'The ZSI account lists Avicennia, Rhizophora and other mangrove plants at this confluence.', source:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf', imageSource:photos.valiyaBeach.url},
    {id:'possadi-gumpe', name:'Possadi Gumpe', type:'HILLSIDE VIEWPOINT', location:'Kasaragod district, near Manjeshwaram according to the state tourism listing.', image:photos.ranipuram, imageNote:'Representative highland photo: the source image depicts Ranipuram, not Possadi Gumpe.', intro:'A hilltop outing in the northern part of Kasaragod district. The photograph is from Ranipuram and is labelled as a regional highland illustration, not a site image.', significance:'Possadi Gumpe broadens the district story beyond beaches and backwaters. This page does not add unsupported elevation, facilities or wildlife claims.', visitor:'Use current district tourism guidance for route and access conditions before planning a trip.', wildlife:'No named local species record is claimed here.', fact:'The image shown is Ranipuram in Kasaragod, not Possadi Gumpe.', source:'https://www.keralatourism.org/bekal/', imageSource:photos.ranipuram.url},
    {id:'nileshwaram', name:'Nileshwaram', type:'COASTAL TOWN', location:'Kasaragod district; Kerala Tourism places Valiyaparamba Backwaters about 10 km to its south.', image:photos.valiyaBridge, imageNote:'Regional backwater photograph: this bridge is at Valiyaparamba, not in Nileshwaram town.', intro:'A coastal town that helps orient a journey through north Kasaragod. Nearby Valiyaparamba’s backwaters and islands show the wider water-rich setting of the district.', significance:'Nileshwaram is a useful gateway point for exploring the district’s northern coast and backwater landscapes.', visitor:'Use current local information for transport and access; the photo here is regional landscape context.', wildlife:'The image is Valiyaparamba and is not evidence of a species occurrence in Nileshwaram.', fact:'Valiyaparamba’s official tourism page locates the backwaters roughly 10 km south of Nileshwaram.', source:'https://www.keralatourism.org/destination/valiyaparamba-kasaragod/161/', imageSource:photos.valiyaBridge.url},
    {id:'manjeshwaram', name:'Manjeshwaram', type:'NORTHERN COAST', location:'Northern Kasaragod district near the Karnataka border.', image:photos.bekalPanorama, imageNote:'Representative Kasaragod coastline: the source photograph depicts the Bekal coast.', intro:'A northern district destination that places Kasaragod’s coast in a wider cultural and geographic setting. The image shown is the Bekal coast, not Manjeshwaram.', significance:'Its position near the state boundary underlines the district’s connections across the north Malabar coast.', visitor:'Check current local visitor guidance; this educational entry avoids unsupported facility and wildlife claims.', wildlife:'No species record is assigned from the representative photograph.', fact:'The photo is a Kasaragod coastal landscape, not a Manjeshwaram site photograph.', source:'https://kasargod.nic.in/en/places-of-interest/', imageSource:photos.bekalPanorama.url},
    {id:'madhur-temple', name:'Madhur Temple', type:'RIVER & ARCHITECTURE', location:'Madhur, about 8 km north-east of Kasaragod town according to the district listing.', image:photos.madhur, imageNote:'Photograph depicts Madhur Temple; detailed author/source-page credit is recorded as pending in the photo credits file.', intro:'A historic temple beside the Madhuvahini River. The district page describes its architecture, including towers, gables and copper-plate roofing.', significance:'The temple is dedicated to Shiva, with Anantheswara as presiding deity and importance also given to Maha Ganapathi in the district description. Origin stories are religious tradition.', visitor:'Visitors should follow temple dress, photography and worship customs.', wildlife:'No site-specific bird record is claimed.', fact:'The district description places the temple in a landscape of hills, paddy fields, gardens and the Madhuvahini River.', source:'https://kasargod.nic.in/en/places-of-interest/', imageSource:photos.madhur.url},
    {id:'kidoor', name:'Kidoor', type:'LATERITIC MIDLANDS', location:'Kidoor village, Kasaragod district; the published study gives an approximate study-area location near 12.63°N, 74.98°E.', image:photos.kingfisher, imageNote:'Illustrative White-throated Kingfisher photograph; not photographed at the Kidoor study site.', intro:'A village landscape of lateritic plains, paddy fields, tree cover, plantations and wetlands. A 2016–2018 study used area counts and reported 156 species in its defined study area.', significance:'The study provides a dated, place-specific record of birds across several connected habitats. It is not a present-day district total.', visitor:'The profile is an educational study note, not a promoted birding facility. Respect private land and local access.', wildlife:'The study names Orange-breasted Green Pigeon, Lesser Sand Plover and Indian Nightjar among its records; the displayed kingfisher image is a species illustration from elsewhere.', fact:'The 156-species figure belongs to the study area and observation period September 2016–December 2018.', source:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala', imageSource:photos.kingfisher.url}
  ];

  const languageSources = {
    ml: [
      {label:'Koodu Magazine — Malayalam bird names',url:'https://koodumagazine.com/featured-stories/2020/06/%E0%B4%95%E0%B4%BF%E0%B4%B3%E0%B4%BF%E0%B4%AF%E0%B5%87-%E0%B4%95%E0%B4%BF%E0%B4%B3%E0%B4%BF%E0%B4%AF%E0%B5%87/'},
      {label:'Kerala school resource — common bird names',url:'https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/VOL1/STD4/ParisarapadanamMalayalam/ParisarapadanamMalayalam.pdf'}
    ],
    kn: [{label:'Kannada bird-name vocabulary reference',url:'https://knowaboutkannadalanguage.blogspot.com/2019/01/some-common-bird-names-in-kannada-and.html'}],
    tcy: [
      {label:'Easy Tulu — birds vocabulary',url:'https://www.easytulu.com/p/birds.html'},
      {label:'Bale Tulu Kalpuga — bird names comparison',url:'https://yogish.com/blog/common-tulu-words/bird-names-in-tulu'}
    ]
  };
  const birdLanguageLabel = {en:'English',ml:'Malayalam',kn:'Kannada',tcy:'Tulu'};
  const localName = (bird, language) => bird.names?.[language] || bird.common;
  const localNameNote = (bird, language) => bird.names?.[language]
    ? (bird.nameNotes?.[language] || 'Regional common name; usage can vary by community.')
    : `No verified ${birdLanguageLabel[language]} species-name entry is listed here; the English name is retained.`;

  const birds = [
    {id:'white-throated-kingfisher', common:'White-throated Kingfisher', scientific:'Halcyon smyrnensis', names:{ml:'മീൻകൊത്തി ചാത്തൻ',kn:'ಮಿಂಚುಳ್ಳಿ ಹಕ್ಕಿ',tcy:'ಮೀಂಚುಳ್ಳಿ'}, habitat:['Wetlands','Rivers & estuaries','Coasts','Open country'], food:'Often watches from a perch before taking fish or other prey. Its diet can include insects, frogs, lizards and small animals as well as fish.', fact:'It is often seen far from water; the bright blue wings and chestnut body make it easy to recognise.', status:'Resident / year-round', statusKey:'resident', local:'Recorded in the 2014–2018 Chemmattamvayal wetland study. This confirms a historical study-area record, not a current sighting.', image:photos.kingfisher, evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://commons.wikimedia.org/wiki/File:White-throated_kingfisher_(flying).jpg'},
    {id:'indian-pond-heron', common:'Indian Pond Heron', scientific:'Ardeola grayii', names:{ml:'കൊക്ക്',kn:'ಕೊಕ್ಕರೆ',tcy:'ಕೊಕ್ಕರೆ'},nameNotes:{ml:'General Malayalam name for a heron; not a unique species name.',kn:'General Kannada name for a heron; not a unique species name.',tcy:'General Tulu name for a heron; not a unique species name.'}, habitat:['Wetlands','Rivers & estuaries','Fields'], food:'Feeds around shallow water and wet fields, taking small fish and other small aquatic animals.', fact:'When still, its brown-streaked colours blend into dry vegetation; in flight, the pale wings are much more visible.', status:'Resident / year-round', statusKey:'resident', local:'Recorded in the 2014–2018 Chemmattamvayal study. The photograph was made in Kolkata, not Kasaragod.', image:photos.pondHeron, evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://commons.wikimedia.org/wiki/File:Indian_Pond_Heron_I_IMG_8076.jpg'},
    {id:'spotted-dove', common:'Spotted Dove', scientific:'Spilopelia chinensis', names:{ml:'പ്രാവ്',kn:'ಪಾರಿವಾಳ',tcy:'ಪುದ'},nameNotes:{ml:'General Malayalam word for pigeon/dove.',kn:'General Kannada word for pigeon/dove.',tcy:'General Tulu word for pigeon/dove.'}, habitat:['Open country','Gardens','Woodland edges'], food:'Mostly gathers seeds and grains from the ground; it may also take small fruits.', fact:'A dark, white-spotted collar at the back of the neck is a useful identification mark.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Recorded in the 2014–2018 Chemmattamvayal wetland study; occurrence is historical and site-specific to that survey.', image:photos.pondHeron, imageNote:'Species photo unavailable in this project; the card uses a labelled wetland-bird photograph for context.', evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://www.birdlife.org/'},
    {id:'black-headed-ibis', common:'Black-headed Ibis', scientific:'Threskiornis melanocephalus', names:{ml:'കൊക്ക്'},nameNotes:{ml:'General Malayalam name for a long-legged wading bird; not a unique ibis name.'}, habitat:['Wetlands','Fields','Marshes'], food:'Uses shallow water, marshes and fields to probe for small aquatic animals and invertebrates.', fact:'Its white body contrasts with a bare dark head and a long, curved bill.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Recorded in the 2014–2018 Chemmattamvayal study. The photograph was taken in India but is not a Kasaragod sighting.', image:photos.ibis, evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://commons.wikimedia.org/wiki/File:Black-headed_Ibis_(Threskiornis_melanocephalus)_W_IMG_1431.jpg'},
    {id:'oriental-darter', common:'Oriental Darter', scientific:'Anhinga melanogaster', habitat:['Freshwater wetlands','Lakes','Slow rivers'], food:'A fish-eating waterbird that swims low in the water and spears fish with its sharp bill.', fact:'After swimming, it often rests with wings spread to dry its feathers.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Recorded in the 2014–2018 Chemmattamvayal study. This is a historical record, not evidence of current abundance.', image:photos.pondHeron, imageNote:'Species photo unavailable in this project; the card uses a labelled wetland-bird photograph for context.', evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://www.birdlife.org/'},
    {id:'garganey', common:'Garganey', scientific:'Spatula querquedula', names:{ml:'താറാവ്',kn:'ಬಾತುಕೋಳಿ',tcy:'ಬಾತ್'},nameNotes:{ml:'General word for duck; a specific Garganey name was not verified.',kn:'General word for duck; a specific Garganey name was not verified.',tcy:'General word for duck; a specific Garganey name was not verified.'}, habitat:['Wetlands','Flooded fields','Shallow lakes'], food:'Feeds in shallow water by dabbling and straining small food items from the surface.', fact:'The Chemmattamvayal paper lists it among the study-area birds and classifies the species within its winter-migrant records.', status:'Winter migrant in the Chemmattamvayal study', statusKey:'migrant', local:'Named in the 2014–2018 Chemmattamvayal checklist; the paper classifies 42 of its recorded species as winter migrants but its abstract subgroup totals do not sum to 145.', image:photos.kumarakom, imageNote:'Wetland setting photo, not a Garganey photograph.', evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://www.birdlife.org/'},
    {id:'common-teal', common:'Common Teal', scientific:'Anas crecca', names:{ml:'താറാവ്',kn:'ಬಾತುಕೋಳಿ',tcy:'ಬಾತ್'},nameNotes:{ml:'General word for duck; a specific Common Teal name was not verified.',kn:'General word for duck; a specific Common Teal name was not verified.',tcy:'General word for duck; a specific Common Teal name was not verified.'}, habitat:['Wetlands','Shallow lakes','Paddies'], food:'Dabbles in shallow water and filters small plant and animal matter near the surface.', fact:'The Chemmattamvayal survey lists Common Teal among birds classified as winter migrants.', status:'Winter migrant in the Chemmattamvayal study', statusKey:'migrant', local:'Listed in the 2014–2018 Chemmattamvayal study; do not infer a particular arrival date or route from this record.', image:photos.kumarakom, imageNote:'Wetland setting photo, not a Common Teal photograph.', evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', general:'https://www.birdlife.org/'},
    {id:'orange-breasted-green-pigeon', common:'Orange-breasted Green Pigeon', scientific:'Treron bicinctus', habitat:['Woodland','Forest edge','Tree-rich farms'], food:'Feeds mainly on fruits, especially figs and other soft fruits gathered from trees.', fact:'The Kidoor study specifically includes this species in its recorded list.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Named in the Kidoor village bird study, based on observations from September 2016 to December 2018.', image:photos.wayanad, imageNote:'Forest landscape illustration; not a photograph of this pigeon.', evidence:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala', general:'https://www.birdlife.org/'},
    {id:'lesser-sand-plover', common:'Lesser Sand Plover', scientific:'Charadrius mongolus', habitat:['Sandy shores','Mudflats','Coastal wetlands'], food:'Feeds on small invertebrates found on mudflats and sandy shores.', fact:'It is named among the Kidoor study records and in the ZSI account of shorebirds using Kumbla’s mudflats.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Reported in the Kidoor study; the ZSI account also lists it among shorebirds at the Kumbla–Shiriya estuary. These are dated/local records, not abundance estimates.', image:photos.valiyaBeach, imageNote:'Coast photo showing Valiyaparamba Beach; not a Lesser Sand Plover.', evidence:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala', general:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf'},
    {id:'indian-nightjar', common:'Indian Nightjar', scientific:'Caprimulgus asiaticus', habitat:['Scrub','Open country','Woodland edges'], food:'Catches flying insects at dusk and after dark.', fact:'The Kidoor study lists it among the birds recorded in the village study area.', status:'Local record; seasonal status not specified', statusKey:'recorded', local:'Named in the Kidoor study; this entry retains the study-period context rather than suggesting a current encounter.', image:photos.ranipuram, imageNote:'Kasaragod hill landscape illustration; not a nightjar photograph.', evidence:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala', general:'https://www.birdlife.org/'},
    {id:'great-thick-knee', common:'Great Thick-knee', scientific:'Esacus recurvirostris', habitat:['Riverbanks','Estuary mudflats','Open shores'], food:'Feeds on small animals in open shore and river-edge habitats.', fact:'A checklist update reports one photographed individual at Kumbla–Shiriya Estuary on 27 December 2020 and another observation during the Asian Waterbird Census on 2 January 2021.', status:'Specific documented local record', statusKey:'recorded', local:'A single documented individual was reported at Kumbla–Shiriya in 2020–21. This is not a population estimate.', image:photos.valiyaBeach, imageNote:'Coast photo showing Valiyaparamba Beach; not a Great Thick-knee.', evidence:'https://www.researchgate.net/publication/374510390_Checklist_of_the_birds_of_Kasaragod_district_additions_till_February_2023', general:'https://www.birdlife.org/'},
    {id:'gadwall', common:'Gadwall', scientific:'Mareca strepera', habitat:['Wetlands','Paddies','Shallow lakes'], food:'Dabbles in shallow water and feeds on aquatic plants and small invertebrates.', fact:'A 2025 local news report described a Gadwall sighting in Udinoor paddy polders.', status:'Reported seasonal visitor; source record not independently checked', statusKey:'migrant', local:'The 7 December 2025 news report attributes a 173-species figure to eBird, but the underlying checklist was inaccessible during research. Treat this as a reported observation, not independently verified.', image:photos.kumarakom, imageNote:'Wetland setting photo, not a Gadwall photograph.', evidence:'https://www.onmanorama.com/news/kerala/2025/12/07/gadwall-duck-kanhangad--asaragod-avian-diversity.html', general:'https://www.birdlife.org/'},
    {id:'lesser-whistling-duck',common:'Lesser Whistling Duck',scientific:'Dendrocygna javanica',names:{ml:'ചൂളൻ എരണ്ട',kn:'ಬಾತುಕೋಳಿ',tcy:'ಬಾತ್'},nameNotes:{kn:'General Kannada word for duck; not a unique species name.',tcy:'General Tulu word for duck; not a unique species name.'},habitat:['Wetlands','Paddies','Shallow lakes'],food:'Feeds on aquatic plants, seeds and small invertebrates, often in shallow wetlands.',fact:'It is a resident waterbird listed in the Chemmattamvayal study.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.commonTeal,imageNote:'Illustrative waterbird photograph; not a Lesser Whistling Duck photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'cotton-pygmy-goose',common:'Cotton Pygmy-Goose',scientific:'Nettapus coromandelianus',names:{ml:'താറാവ്',kn:'ಬಾತುಕೋಳಿ',tcy:'ಬಾತ್'},nameNotes:{ml:'General duck name; a species-specific regional name was not verified.',kn:'General duck name; a species-specific regional name was not verified.',tcy:'General duck name; a species-specific regional name was not verified.'},habitat:['Wetlands','Ponds','Lakes'],food:'Feeds on aquatic vegetation and small invertebrates at the water surface.',fact:'Despite its small size, it is a true duck and is recorded in the Chemmattamvayal checklist.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.commonTeal,imageNote:'Illustrative waterbird photograph; not a Cotton Pygmy-Goose photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'indian-peafowl',common:'Indian Peafowl',scientific:'Pavo cristatus',names:{ml:'മയിൽ',kn:'ನವಿಲು',tcy:'ನಯಿಲ್ / ಮೈರ್'},habitat:['Woodland edges','Open country','Fields'],food:'Omnivorous; eats seeds, grains, insects and other small food items.',fact:'The male’s train is made of elongated upper-tail coverts, not the true tail feathers.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study. The record is study-area evidence, not a current sighting.',image:photos.ranipuram,imageNote:'Illustrative Kasaragod landscape; not a peafowl photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'asian-openbill',common:'Asian Openbill',scientific:'Anastomus oscitans',habitat:['Wetlands','Paddies','Marshes'],food:'Feeds mainly on snails and other small aquatic animals in shallow water.',fact:'Its bill has a distinctive gap between the mandibles when closed.',status:'Seasonal visitor in the study',statusKey:'migrant',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study; its status there is marked as a winter migrant.',image:photos.ibis,imageNote:'Illustrative wading-bird photograph; not an Asian Openbill photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'woolly-necked-stork',common:'Woolly-necked Stork',scientific:'Ciconia episcopus',habitat:['Wetlands','Paddies','Open country'],food:'Feeds on fish, amphibians, insects and other small animals in wet fields and shallow water.',fact:'The Chemmattamvayal paper lists it among species recorded during the study.',status:'Seasonal visitor in the study',statusKey:'migrant',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study; the entry preserves the study-period context.',image:photos.ibis,imageNote:'Illustrative wading-bird photograph; not a Woolly-necked Stork photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'yellow-bittern',common:'Yellow Bittern',scientific:'Ixobrychus sinensis',habitat:['Wetlands','Reed beds','Marshes'],food:'Hunts small fish, insects and other aquatic animals among reeds and waterside plants.',fact:'Its slim shape and streaked plumage help it blend into waterside vegetation.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.pondHeron,imageNote:'Illustrative heron photograph; not a Yellow Bittern photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'black-crowned-night-heron',common:'Black-crowned Night Heron',scientific:'Nycticorax nycticorax',habitat:['Wetlands','Rivers & estuaries','Lakes'],food:'Feeds on fish, amphibians and invertebrates, often around dusk or at night.',fact:'Its compact body and red eyes are useful identification features.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.pondHeron,imageNote:'Illustrative heron photograph; not a Black-crowned Night Heron photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'striated-heron',common:'Striated Heron',scientific:'Butorides striata',names:{ml:'കൊക്ക്',kn:'ಕೊಕ್ಕರೆ',tcy:'ಕೊಕ್ಕರೆ'},nameNotes:{ml:'General Malayalam name for a heron.',kn:'General Kannada name for a heron.',tcy:'General Tulu name for a heron.'},habitat:['Wetlands','Mangroves','Rivers & estuaries'],food:'Waits quietly at the water’s edge and catches small fish, crabs and insects.',fact:'It is a small heron often found along sheltered waterways.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.pondHeron,imageNote:'Illustrative heron photograph; not a Striated Heron photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'cattle-egret',common:'Cattle Egret',scientific:'Bubulcus ibis',names:{ml:'കാലിമുണ്ടി',kn:'ಕೊಕ್ಕರೆ',tcy:'ಕೊಕ್ಕರೆ'},nameNotes:{kn:'General Kannada word for a heron/egret.',tcy:'General Tulu word for a heron/egret.'},habitat:['Fields','Wetlands','Open country'],food:'Often catches insects stirred up by grazing animals or farm work; also eats other small prey.',fact:'Unlike many herons, it commonly feeds in dry fields as well as wetlands.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study. The Malayalam common name is drawn from a Kerala nature magazine.',image:photos.pondHeron,imageNote:'Illustrative egret/heron-family photograph; not a Cattle Egret photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'},
    {id:'grey-headed-swamp-hen',common:'Grey-headed Swamphen',scientific:'Porphyrio porphyrio',names:{ml:'നീലക്കോഴി'},habitat:['Wetlands','Marshes','Paddies'],food:'Feeds on aquatic plants, shoots, seeds and small animals around marsh vegetation.',fact:'Its large feet help it move across floating vegetation.',status:'Resident / year-round in the study',statusKey:'resident',local:'Listed in the 2014–2018 Chemmattamvayal Wetlands study.',image:photos.kumarakom,imageNote:'Illustrative wetland photograph; not a Grey-headed Swamphen photograph.',evidence:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246',general:'https://www.birdlife.org/'}
  ];

  const specialSites = [
    {name:'Valiyaparamba Backwaters', figure:'about 90', image:photos.valiyaBridge, caption:'The source image shows the Valiyaparamba bridge.', note:'Kerala Tourism publishes an approximate “about 90” bird-species statement. The page gives no survey date, method or checklist, so the number is presented as a tourism claim rather than a verified survey total.', source:'https://www.keralatourism.org/bekal/valiyaparamba-backwaters.php'},
    {name:'Kidoor', figure:'156 species', image:photos.kingfisher, caption:'Illustrative kingfisher photograph; not made at Kidoor.', note:'A 2016–2018 village study used area counts and reported 156 species for its defined study area. It describes lateritic land, paddy fields, wooded patches, plantations and wetlands. The result is historical and local to that study area.', source:'https://www.researchgate.net/publication/335751660_Avian_Diversity_of_Kidoor_a_village_in_the_lateritic_midlands_of_Kasaragod_district_North_Kerala'},
    {name:'Chemmattamvayal Wetlands', figure:'145 species', image:photos.pondHeron, caption:'Illustrative pond-heron photo; not made at Chemmattamvayal.', note:'A study covering December 2014–March 2018 reported 145 species, including 42 classified as winter migrants. The abstract’s 42 migrant and 97 year-round categories total 139, so they are not presented as a complete breakdown.', source:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246'},
    {name:'Kumbla Estuary', figure:'mudflats + mangroves', image:photos.valiyaBeach, caption:'Regional coast image at Valiyaparamba, not Kumbla.', note:'A Zoological Survey of India account describes intertidal mudflats and mangrove plants at the Kumbla–Shiriya confluence. It names shorebirds but gives no standardized site-wide total or formal protection status.', source:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf'},
    {name:'Udinoor Polders', figure:'173 species reported', image:photos.kumarakom, caption:'Wetland setting image at Kumarakom; not a photograph of Udinoor.', note:'A December 2025 news report attributes 173 species to eBird and describes a Gadwall sighting. The underlying checklist could not be independently accessed, so both the figure and record are attributed to that report.', source:'https://www.onmanorama.com/news/kerala/2025/12/07/gadwall-duck-kanhangad--asaragod-avian-diversity.html'}
  ];

  const habitats = [
    {name:'Wetlands', desc:'Shallow water, marshes and wet fields provide feeding areas for waders, herons and waterfowl.', birds:'Birds that wade, dabble or probe for food.', care:'Keep water clean; protect wetland edges and seasonal water flows.'},
    {name:'Backwaters', desc:'Coastal waterways and islands connect river water, lagoons, settlements and the sea.', birds:'Waterbirds and shorebirds can use quiet edges and exposed shallows.', care:'Avoid litter and careless disturbance during boat trips.'},
    {name:'Mangrove forests', desc:'Salt-tolerant trees grow in sheltered tidal places and help hold soft shorelines together.', birds:'Herons, kingfishers and other birds may use mangrove margins; local records must be checked site by site.', care:'Do not cut mangroves or disturb roots, nesting places and tidal channels.'},
    {name:'Rivers & estuaries', desc:'A river mouth mixes fresh and salt water and can expose mudflats as the tide changes.', birds:'Shorebirds may feed on small animals in exposed mud at low tide.', care:'Leave mudflats undisturbed and keep plastics and waste out of the water.'},
    {name:'Coastal beaches', desc:'Sandy and rocky shores form a moving boundary between land and the Arabian Sea.', birds:'Some shorebirds feed on beaches; nesting and roosting needs vary by species.', care:'Keep distance from flocks, nests and wrack lines; take litter away.'},
    {name:'Grasslands', desc:'Open areas with grasses and scattered cover support different plants and insects from dense forest.', birds:'Ground-feeding and open-country birds use these spaces; no one bird list fits every grassland.', care:'Avoid fires and unplanned trail widening.'},
    {name:'Tropical forests', desc:'Layered evergreen and moist-deciduous forests provide canopy, understory and forest-floor habitats.', birds:'Fruit-eaters, insect-eaters and cavity-nesting species depend on different forest layers.', care:'Protect connected forest and leave fallen wood and nesting trees undisturbed.'},
    {name:'Hills & mountain ecosystems', desc:'Elevation, slope, grassland and shola forest create cooler highland habitats.', birds:'Highland species may differ from coastal birds; use local records rather than assumptions.', care:'Stay on marked paths and avoid disturbing wildlife.'}
  ];

  const keralaPlaces = [
    {name:'Western Ghats', district:'A mountain chain across Kerala and other states', image:photos.wayanad, imageNote:'The photograph depicts Wayanad, within the Ghats; it does not represent the whole mountain chain.', intro:'A long mountain system with forests, grasslands and many local climates. This broad landscape is a state-wide chapter, not one Kasaragod attraction.', value:'Explore the relationship among altitude, forests, rivers and biodiversity.', wildlife:'Wildlife differs by region and habitat. This site avoids assigning one universal species list to the entire chain.', source:'https://www.keralatourism.org/destination/wayanad-wildlife-sanctuary/283/'},
    {name:'Silent Valley National Park', district:'Palakkad district', image:photos.silentValley, imageNote:'Karuvara waterfall in the Silent Valley buffer zone.', intro:'A protected forest landscape in the Nilgiri hills. Kerala Tourism describes it as a national park; the photo is from the buffer zone, not claimed as an interior view.', value:'A place to learn about forest conservation and the ecology of the Nilgiri landscape.', wildlife:'The park is associated with the Lion-tailed Macaque; see the official park page for its protected-area context.', source:'https://www.keralatourism.org/destination/silent-valley-national-park/257/'},
    {name:'Periyar Tiger Reserve', district:'Idukki district', image:photos.periyar, imageNote:'Forest photographed inside Periyar Tiger Reserve.', intro:'A protected forest and reservoir landscape in the southern Western Ghats.', value:'Kerala Tourism describes boat-based and nature experiences; availability is subject to official reserve guidance.', wildlife:'The reserve protects tiger habitat and other forest wildlife. Wildlife should be observed without disturbance.', source:'https://www.keralatourism.org/destination/periyar-tiger-reserve/192/'},
    {name:'Thattekad Bird Sanctuary', district:'Ernakulam district', image:photos.thattekad, imageNote:'Malabar Grey Hornbill photographed at Thattekad, not a Kasaragod record.', intro:'A forest bird sanctuary associated with Salim Ali and the lower Periyar landscape.', value:'A well-known destination for birdwatching and learning about forest birds.', wildlife:'The Malabar Grey Hornbill photograph was made at Thattekad. A photograph does not represent a guaranteed visitor sighting.', source:'https://www.keralatourism.org/destination/thattekad-bird-sanctuary/40/'},
    {name:'Kumarakom Bird Sanctuary', district:'Kottayam district', image:photos.kumarakom, imageNote:'Commons photograph identified as Kumarakom Bird Sanctuary.', intro:'A bird sanctuary beside Vembanad Lake in Kerala’s backwater region.', value:'A dedicated birding destination, with trails and visitor information to be checked through current local guidance.', wildlife:'The site is a bird sanctuary; species vary by season. No exact current species count is claimed.', source:'https://www.keralatourism.org/destination/kumarakom-bird-sanctuary/21/'},
    {name:'Kadalundi–Vallikkunnu Community Reserve', district:'Malappuram and Kozhikode districts', image:photos.kingfisher, imageNote:'Illustrative kingfisher photograph from elsewhere; not a Kadalundi site image.', intro:'A coastal estuary and wetland landscape in the Kadalundi–Vallikkunnu area. It is a community reserve, a designation distinct from the separately named Kadalundi Bird Sanctuary.', value:'A place to explore tidal wetlands and community-led nature conservation.', wildlife:'The landscape supports waterbirds; check current reserve sources for species details. The displayed kingfisher image is only illustrative.', source:'https://www.keralatourism.org/destination/kadalundi-bird-sanctuary/193/'},
    {name:'Wayanad Wildlife Sanctuary', district:'Wayanad district', image:photos.wayanad, imageNote:'Commons photograph identified as Wayanad Wildlife Sanctuary.', intro:'A protected forest in the Wayanad plateau, connected to the wider Nilgiri landscape.', value:'Visitors can learn about forest ecosystems and wildlife conservation in north Kerala.', wildlife:'Elephants and other forest wildlife are part of the sanctuary’s conservation story; sightings are never guaranteed.', source:'https://www.keralatourism.org/destination/wayanad-wildlife-sanctuary/283/'},
    {name:'Eravikulam National Park', district:'Idukki district', image:photos.eravikulam, imageNote:'Waterfall photographed in Eravikulam National Park.', intro:'A high-altitude national park near Munnar, known for montane grassland and shola habitats.', value:'Visitor access is regulated; follow the park’s current rules and route information.', wildlife:'The Nilgiri Tahr is a signature species of the high-elevation grassland landscape.', source:'https://www.keralatourism.org/destination/eravikulam-national-park/178/'}
  ];

  const facts = [
    {title:'A wetland can be a refuelling stop.', text:'Wetlands provide feeding and resting places for many waterbirds. The species and season differ by site.', source:'https://www.ramsar.org/about/our-mission', label:'Convention on Wetlands'},
    {title:'A kingfisher can hunt far from water.', text:'The White-throated Kingfisher may use a perch to scan for varied prey, not only fish.', source:'https://commons.wikimedia.org/wiki/File:White-throated_kingfisher_(flying).jpg', label:'Species notes'},
    {title:'A bird list belongs to its survey.', text:'A checklist describes what observers recorded in a place and period. It is not a promise of today’s sightings.', source:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', label:'Study method'},
    {title:'Mudflats can feed shorebirds.', text:'At Kumbla–Shiriya, the ZSI account describes low-tide mudflats as feeding grounds for shorebirds.', source:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf', label:'Kumbla–Shiriya'},
    {title:'Migration timing is not a calendar appointment.', text:'Food, suitable breeding habitat and seasonal daylight help shape migration. Species differ in their routes and timing.', source:'https://www.allaboutbirds.org/news/the-basics-how-why-and-where-of-bird-migration/', label:'Bird migration'},
    {title:'One survey’s numbers can need a footnote.', text:'Chemmattamvayal’s paper reports 145 species and 42 winter migrants, while its abstract’s subgroup figures do not add up to 145.', source:'https://www.threatenedtaxa.org/index.php/JoTT/article/view/5246', label:'Read the study'},
    {title:'A photo is not a local sighting.', text:'A bird photograph can help identify a species, but its caption must not imply the photographer saw it in Kasaragod.', source:'https://www.researchgate.net/publication/342961116_A_Checklist_of_the_Birds_of_Kasaragod_District_Kerala_India', label:'District checklist'},
    {title:'Mangroves grow in tidal places.', text:'The ZSI account lists several mangrove plants at the Kumbla–Shiriya confluence and describes an intertidal landscape.', source:'https://zsi.gov.in/public/PDFVolumes/occpapers/246/index.pdf', label:'Zoological Survey of India'}
  ];

  const renderCredit = (photo, note = '') => `<p class="image-credit">${note ? `${esc(note)} · ` : ''}${credit(photo)}</p>`;
  const renderDestinations = () => {
    const grid = $('#destinationGrid');
    if (!grid) return;
    grid.innerHTML = destinations.slice(1).map((item, index) => `<article class="destination-card"><button type="button" data-destination="${esc(item.id)}" aria-label="Open field note: ${esc(item.name)}"><img src="${esc(item.image.src)}" alt="${esc(item.image.alt)}" loading="lazy" decoding="async"><span class="card-arrow" aria-hidden="true">↗</span><div class="destination-card-copy"><span class="destination-card-index">${String(index + 2).padStart(2,'0')} / 12 · ${esc(item.type)}</span><h3>${esc(item.name)}</h3><p>${esc(item.imageNote)}</p></div></button></article>`).join('');
  };
  const openDestination = id => {
    const item = destinations.find(place => place.id === id);
    if (!item) return;
    const dialog = $('#destinationDialog');
    $('#destinationDialogContent').innerHTML = `<div class="dialog-hero"><img src="${esc(item.image.src)}" alt="${esc(item.image.alt)}"><div class="dialog-hero-title"><p class="eyebrow eyebrow-light">${esc(item.type)} · KASARAGOD</p><h2 id="destinationDialogTitle">${esc(item.name)}</h2></div></div><div class="dialog-body"><div><h3>Location & introduction</h3><p>${esc(item.location)} ${esc(item.intro)}</p><h3>Why it matters</h3><p>${esc(item.significance)}</p><h3>Visitor value</h3><p>${esc(item.visitor)}</p></div><div><h3>Birdlife & wildlife note</h3><p>${esc(item.wildlife)}</p><h3>Field fact</h3><p>${esc(item.fact)}</p><p class="dialog-image-note">${esc(item.imageNote)}</p>${renderCredit(item.image)}<p class="dialog-source">Source: ${link(item.source, 'read the destination or study source')}</p>${item.imageSource ? `<p class="dialog-source">Photograph: ${link(item.imageSource, 'original image file page')}</p>` : ''}</div></div>`;
    dialog.showModal(); document.body.classList.add('dialog-open');
  };

  let currentBirds = [];
  const getFavorites = () => { try { return new Set(JSON.parse(localStorage.getItem('wings-kasaragod-favorites') || '[]')); } catch { return new Set(); } };
  const saveFavorites = values => { try { localStorage.setItem('wings-kasaragod-favorites', JSON.stringify([...values])); } catch { /* private browsing storage can be disabled */ } };
  const populateHabitats = () => {
    const select = $('#habitatFilter');
    const options = [...new Set(birds.flatMap(bird => bird.habitat))].sort((a,b) => a.localeCompare(b));
    select.innerHTML = '<option value="all">All habitats</option>' + options.map(value => `<option value="${esc(value)}">${esc(value)}</option>`).join('');
  };
  const renderBirds = () => {
    const q = ($('#birdSearch')?.value || '').trim().toLowerCase();
    const habitat = $('#habitatFilter')?.value || 'all';
    const status = $('#statusFilter')?.value || 'all';
    const language = $('#birdLanguage')?.value || 'en';
    const descending = $('#sortBirds')?.getAttribute('aria-pressed') === 'true';
    const favorites = getFavorites();
    currentBirds = birds.filter(bird => {
      const searchable = `${bird.common} ${bird.scientific} ${Object.values(bird.names || {}).join(' ')}`.toLowerCase();
      const textMatch = !q || searchable.includes(q);
      const habitatMatch = habitat === 'all' || bird.habitat.includes(habitat);
      const statusMatch = status === 'all' || bird.statusKey === status;
      return textMatch && habitatMatch && statusMatch;
    }).sort((a,b) => a.common.localeCompare(b.common) * (descending ? -1 : 1));
    $('#birdGrid').innerHTML = currentBirds.map(bird => `<article class="bird-card"><div class="bird-card-image"><img src="${esc(bird.image.src)}" alt="${esc(bird.image.alt)}" loading="lazy" decoding="async"><span class="bird-photo-note">Species photo · not a local sighting</span></div><div class="bird-card-content"><p class="eyebrow">${esc(bird.status)}</p><h3>${esc(localName(bird, language))}</h3>${language!=='en' && bird.names?.[language] ? `<p class="bird-english-name">${esc(bird.common)} · ${esc(localNameNote(bird,language))}</p>` : ''}<p class="scientific-name">${esc(bird.scientific)}</p><div class="bird-card-tags">${bird.habitat.slice(0,2).map(tag => `<span class="tag">${esc(tag)}</span>`).join('')}</div><div class="bird-card-actions"><button type="button" data-bird="${esc(bird.id)}">VIEW FIELD NOTE <span aria-hidden="true">↗</span></button><button class="favorite-button" type="button" data-favorite="${esc(bird.id)}" aria-pressed="${favorites.has(bird.id)}" aria-label="${favorites.has(bird.id) ? 'Remove' : 'Add'} ${esc(bird.common)} ${favorites.has(bird.id) ? 'from' : 'to'} favourites">${favorites.has(bird.id) ? '♥' : '♡'}</button></div></div></article>`).join('');
    $('#birdResults').textContent = `${currentBirds.length} ${currentBirds.length === 1 ? 'bird' : 'birds'} shown · names: ${birdLanguageLabel[language]} · records are dated observations, not guaranteed sightings`;
    $('#birdNoResults').hidden = currentBirds.length > 0;
  };
  const openBird = id => {
    const bird = birds.find(item => item.id === id);
    if (!bird) return;
    const dialog = $('#birdDialog');
    const language = $('#birdLanguage')?.value || 'en';
    const translated = localName(bird, language);
    const regionalSources = language==='en' ? '' : (languageSources[language] || []).map(source=>link(source.url,source.label)).join(' · ');
    $('#birdDialogContent').innerHTML = `<div class="dialog-hero"><img src="${esc(bird.image.src)}" alt="${esc(bird.image.alt)}"><div class="dialog-hero-title"><p class="eyebrow eyebrow-light">FIELD GUIDE · ${esc(bird.status)}</p><h2 id="dialogTitle">${esc(translated)}</h2><p class="dialog-local-name">${esc(bird.common)} · ${esc(birdLanguageLabel[language])}</p><p class="scientific-name">${esc(bird.scientific)}</p></div></div><div class="dialog-body"><div><h3>Where it lives</h3><p>${bird.habitat.map(esc).join(' · ')}</p><h3>Food & feeding</h3><p>${esc(bird.food)}</p><h3>Interesting fact</h3><p>${esc(bird.fact)}</p></div><div><h3>Kasaragod evidence</h3><p>${esc(bird.local)}</p><h3>Regional name note</h3><p>${esc(localNameNote(bird,language))}</p>${regionalSources ? `<p class="dialog-source">Language references: ${regionalSources}</p>` : ''}<h3>Status</h3><p>${esc(bird.status)}. This is a general or study-based status label, not a forecast of when a visitor will see the species.</p><p class="dialog-image-note">${esc(bird.imageNote || 'The photograph illustrates the species; the image location is stated in its source page and is not claimed as a Kasaragod sighting.')}</p>${renderCredit(bird.image)}<p class="dialog-source">Local evidence: ${link(bird.evidence, 'open the referenced study or record')}</p><p class="dialog-source">Photo page: ${link(bird.image.url, 'verify photograph and licence')}</p><button class="button button-outline" type="button" data-favorite="${esc(bird.id)}" aria-pressed="${getFavorites().has(bird.id)}">${getFavorites().has(bird.id) ? 'REMOVE FAVOURITE' : 'SAVE AS FAVOURITE'}</button></div></div>`;
    dialog.showModal(); document.body.classList.add('dialog-open');
  };

  const renderSpecialSites = () => {
    $('#specialSitesGrid').innerHTML = specialSites.map((site,index) => `<article class="special-site"><div class="special-site-index"><span>${String(index+1).padStart(2,'0')} / FIELD NOTE</span><span aria-hidden="true">✳</span></div><p class="special-figure">${esc(site.figure)}</p><h3>${esc(site.name)}</h3><p>${esc(site.note)}</p><p class="special-image-note">${esc(site.caption)}</p>${renderCredit(site.image)}<a class="text-link" href="${esc(site.source)}" target="_blank" rel="noopener noreferrer">READ THE SOURCE <span aria-hidden="true">↗</span></a></article>`).join('');
  };
  const renderHabitats = () => {
    $('#habitatList').innerHTML = habitats.map((item,index) => `<article class="habitat-item"><span class="habitat-number">0${index+1} / ECOSYSTEM</span><h3>${esc(item.name)}</h3><p>${esc(item.desc)}</p><span class="habitat-care"><strong>Care:</strong> ${esc(item.care)}</span></article>`).join('');
  };
  const renderKerala = () => {
    $('#keralaGrid').innerHTML = keralaPlaces.map((place,index) => `<article class="kerala-card"><img src="${esc(place.image.src)}" alt="${esc(place.image.alt)}" loading="lazy" decoding="async"><div class="kerala-card-copy"><span class="district-label">${esc(place.district)} · 0${index+1}/08</span><h3>${esc(place.name)}</h3><p>${esc(place.imageNote)}</p></div><button type="button" data-kerala="${index}" aria-label="Read about ${esc(place.name)}"></button></article>`).join('');
  };
  const openKerala = index => {
    const place = keralaPlaces[Number(index)];
    if (!place) return;
    const dialog = $('#destinationDialog');
    $('#destinationDialogContent').innerHTML = `<div class="dialog-hero"><img src="${esc(place.image.src)}" alt="${esc(place.image.alt)}"><div class="dialog-hero-title"><p class="eyebrow eyebrow-light">KERALA · ${esc(place.district)}</p><h2 id="destinationDialogTitle">${esc(place.name)}</h2></div></div><div class="dialog-body"><div><h3>About this place</h3><p>${esc(place.intro)}</p><h3>Visitor value</h3><p>${esc(place.value)}</p></div><div><h3>Ecological significance</h3><p>${esc(place.wildlife)}</p><p class="dialog-image-note">${esc(place.imageNote)}</p>${renderCredit(place.image)}<p class="dialog-source">Official source: ${link(place.source, 'read the Kerala destination page')}</p></div></div>`;
    dialog.showModal(); document.body.classList.add('dialog-open');
  };
  const renderFacts = () => {
    const [feature,...rail] = facts;
    $('#factFeature').innerHTML = `<span class="fact-number">FIELD FACT 01 / 08</span><div><h3>${esc(feature.title)}</h3><p>${esc(feature.text)}</p></div>${link(feature.source, `SOURCE · ${feature.label}`, 'class="text-link text-link-light"')}`;
    $('#factRail').innerHTML = rail.slice(0,3).map((fact,index) => `<article class="fact-item"><span>0${index+2} / ${esc(fact.label.toUpperCase())}</span><p>${esc(fact.title)}</p><a href="${esc(fact.source)}" target="_blank" rel="noopener noreferrer">READ SOURCE ↗</a></article>`).join('');
  };
  const renderConservation = () => {
    const threats=['Wetland loss and filling','Plastic and solid-waste pollution','Habitat fragmentation','Water pollution','Deforestation','Disturbance around nests'];
    const actions=['Protect wetlands, riverbanks and native habitats','Keep water and shorelines clean; take litter away','Stay back from nests and roosting birds','Observe quietly without chasing or feeding wildlife','Plant native trees where appropriate','Support local biodiversity and conservation learning'];
    $('#threatList').innerHTML='<h3 class="conservation-column-title">PRESSURES TO NOTICE</h3>'+threats.map(text=>`<div class="threat-item">${esc(text)}</div>`).join('');
    $('#actionList').innerHTML='<h3 class="conservation-column-title">SMALL ACTIONS THAT HELP</h3>'+actions.map(text=>`<div class="action-item">${esc(text)}</div>`).join('');
  };
  const renderSources = () => {
    const render = group => sources.filter(item=>item.group===group).map(item=>`<li><span><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a><small>${esc(item.note)}</small></span></li>`).join('');
    $('#sourceList').innerHTML=render('studies');
    $('#sourceListPlaces').innerHTML=render('places')+`<li><span><a href="assets/CREDITS.md">Photo credits & licences</a><small>Creator, source page and reuse terms for photographs packaged with the project.</small></span></li>`;
  };

  const galleryItems = [
    {title:'Bekal Fort above the Arabian Sea', category:'Tourist Attractions', photo:photos.bekalFort},
    {title:'Coast and fort at Bekal', category:'Kasaragod Landscapes', photo:photos.bekalPanorama},
    {title:'Valiyaparamba bridge and backwaters', category:'Wetlands', photo:photos.valiyaBridge},
    {title:'Valiyaparamba Beach', category:'Coastal Beauty', photo:photos.valiyaBeach},
    {title:'Ranipuram hill station', category:'Forests', photo:photos.ranipuram},
    {title:'Chandragiri Fort', category:'Tourist Attractions', photo:photos.chandragiri},
    {title:'Ananthapura Lake Temple', category:'Tourist Attractions', photo:photos.ananthapura},
    {title:'Silent Valley buffer zone', category:'Forests', photo:photos.silentValley},
    {title:'Forest in Periyar Tiger Reserve', category:'Forests', photo:photos.periyar},
    {title:'Eravikulam National Park', category:'Forests', photo:photos.eravikulam},
    {title:'Wayanad Wildlife Sanctuary', category:'Forests', photo:photos.wayanad},
    {title:'Kumarakom Bird Sanctuary', category:'Wetlands', photo:photos.kumarakom},
    {title:'Malabar Grey Hornbill at Thattekad', category:'Birds of Kerala', photo:photos.thattekad},
    {title:'White-throated Kingfisher', category:'Birds of Kerala', photo:photos.kingfisher},
    {title:'Indian Pond Heron (photographed in Kolkata)', category:'Birds of Kerala', photo:photos.pondHeron},
    {title:'Black-headed Ibis (photographed in India)', category:'Migratory Birds', photo:photos.ibis}
  ];
  let selectedGallery = 'All photographs';
  let lightboxItems = [];
  let lightboxIndex = 0;
  let lastFocus = null;
  const renderGallery = () => {
    const categories=['All photographs','Kasaragod Landscapes','Tourist Attractions','Birds of Kerala','Migratory Birds','Wetlands','Forests','Coastal Beauty'];
    $('#galleryFilters').innerHTML=categories.map(category=>`<button class="gallery-filter" type="button" data-gallery-filter="${esc(category)}" aria-pressed="${selectedGallery===category}">${esc(category)}</button>`).join('');
    const items=galleryItems.filter(item=>selectedGallery==='All photographs'||item.category===selectedGallery);
    lightboxItems=items;
    $('#galleryGrid').innerHTML=items.map((item,index)=>`<figure class="gallery-item"><button type="button" data-gallery-open="${index}" aria-label="Open ${esc(item.title)} photograph"><img src="${esc(item.photo.src)}" alt="${esc(item.photo.alt)}" loading="lazy" decoding="async"><span class="gallery-caption">${esc(item.title)}<small>${esc(item.category)} · ${esc(item.photo.author)} / ${esc(item.photo.license)}</small></span></button></figure>`).join('');
  };
  const openLightbox = index => {
    lightboxIndex=Number(index); lastFocus=document.activeElement;
    updateLightbox(); $('#lightboxDialog').showModal(); document.body.classList.add('dialog-open');
    $('#lightboxDialog [data-close-dialog]')?.focus();
  };
  const updateLightbox = () => {
    const item=lightboxItems[lightboxIndex]; if(!item) return;
    $('#lightboxImage').src=item.photo.src; $('#lightboxImage').alt=item.photo.alt;
    $('#lightboxCaption').innerHTML=`${esc(item.title)} · ${esc(item.category)}<br>${credit(item.photo)}`;
    $('#lightboxCount').textContent=`${lightboxIndex+1} of ${lightboxItems.length}`;
  };
  const moveLightbox = delta => { if(!lightboxItems.length) return; lightboxIndex=(lightboxIndex+delta+lightboxItems.length)%lightboxItems.length; updateLightbox(); };

  const mapPoints = [
    {name:'Bekal Fort', lat:12.3922238, lon:75.0327651, osm:'https://www.openstreetmap.org/way/670422415', desc:'Mapped fort object; not a habitat boundary.', habitat:'Fort and coast. No site-specific bird claim is made here.', image:photos.bekalFort},
    {name:'Valiyaparamba locality', lat:12.1443140, lon:75.1447930, osm:'https://www.openstreetmap.org/node/634467738', desc:'Mapped locality anchor in the backwater landscape.', habitat:'Backwaters and nearby coastal waters; the anchor is not an estuary boundary.', image:photos.valiyaBridge},
    {name:'Ranipuram locality', lat:12.4164072, lon:75.3639767, osm:'https://www.openstreetmap.org/node/650128663', desc:'Mapped locality anchor for the hill station.', habitat:'Highland grassland and Shola forest are described by Kerala Tourism.', image:photos.ranipuram},
    {name:'Chandragiri Fort', lat:12.4699068, lon:75.0032875, osm:'https://www.openstreetmap.org/way/799197980', desc:'Mapped fort object above the Chandragiri River.', habitat:'Riverfront and coastal setting; no species inference from the pin.', image:photos.chandragiri},
    {name:'Kumbla locality', lat:12.5989856, lon:74.9464131, osm:'https://www.openstreetmap.org/relation/12498562', desc:'Mapped town/locality relation, not the estuary boundary.', habitat:'ZSI describes mudflats and mangroves at Kumbla–Shiriya; this pin is only a locality anchor.', image:photos.valiyaBeach},
    {name:'Kidoor locality', lat:12.6238609, lon:74.9776394, osm:'https://www.openstreetmap.org/node/13805747338', desc:'Mapped locality anchor near the Kidoor study area.', habitat:'The 2016–2018 study includes lateritic land, paddy fields, wooded patches and wetlands.', image:photos.kingfisher},
    {name:'Kappil Beach', lat:12.4258699, lon:75.0112564, osm:'https://www.openstreetmap.org/node/12596559185', desc:'Mapped beach node, not the full coastline.', habitat:'Coastal beach; a mapped point is not a habitat boundary.', image:photos.valiyaBeach}
  ];
  const initMap = () => {
    const mapNode=$('#map'); if(!mapNode) return;
    if(!window.L){mapNode.innerHTML='<p class="map-unavailable">The interactive map could not load. Use the verified OpenStreetMap links in the index alongside this page.</p>';return;}
    const map=L.map(mapNode,{scrollWheelZoom:false,keyboard:true}).setView([12.47,75.08],10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(map);
    const icon=L.divIcon({className:'',html:'<span class="map-marker" aria-hidden="true"></span>',iconSize:[20,20],iconAnchor:[10,10]});
    mapPoints.forEach(point=>{
      const popup=`<div class="map-popup-title">${esc(point.name)}</div><img class="map-popup-image" src="${esc(point.image.src)}" alt="${esc(point.image.alt)}"><p class="map-popup-photo-note">${esc(point.image.alt)}</p><p class="map-popup-note">${esc(point.desc)} ${esc(point.habitat)}</p><a href="${esc(point.osm)}" target="_blank" rel="noopener noreferrer">Open mapped anchor ↗</a>`;
      L.marker([point.lat,point.lon],{icon,title:point.name,alt:point.name}).addTo(map).bindPopup(popup);
    });
    setTimeout(()=>map.invalidateSize(),250);
  };

  const initSound = () => {
    const toggle=$('#soundToggle'); let context=null; let nodes=[]; let noiseSource=null;
    const stop = () => {nodes.forEach(node=>{try{node.stop?.();}catch{}});nodes=[];if(noiseSource){try{noiseSource.stop();}catch{}noiseSource=null;} if(context){context.close().catch(()=>{});context=null;}};
    toggle.addEventListener('click', async () => {
      const on=toggle.getAttribute('aria-pressed')!=='true';
      if(!on){stop();toggle.setAttribute('aria-pressed','false');toggle.setAttribute('aria-label','Turn ambient sound on');$('#soundLabel').textContent='SOUND OFF';return;}
      const AudioContext=window.AudioContext||window.webkitAudioContext;
      if(!AudioContext){$('#soundLabel').textContent='AUDIO UNAVAILABLE';return;}
      try{
        context=new AudioContext(); await context.resume();
        const master=context.createGain(); master.gain.value=0.018; master.connect(context.destination);
        const filter=context.createBiquadFilter(); filter.type='lowpass'; filter.frequency.value=420; filter.connect(master);
        const buffer=context.createBuffer(1,context.sampleRate*2,context.sampleRate); const data=buffer.getChannelData(0);
        for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*0.28;
        noiseSource=context.createBufferSource(); noiseSource.buffer=buffer; noiseSource.loop=true; noiseSource.connect(filter); noiseSource.start(); nodes.push(noiseSource);
        [110,164.81,220].forEach((frequency,index)=>{const oscillator=context.createOscillator();const gain=context.createGain();oscillator.type='sine';oscillator.frequency.value=frequency;gain.gain.value=index===0?.12:.045;oscillator.connect(gain);gain.connect(master);oscillator.start();nodes.push(oscillator);});
        toggle.setAttribute('aria-pressed','true');toggle.setAttribute('aria-label','Turn ambient sound off');$('#soundLabel').textContent='SOUND ON';
      }catch{stop();toggle.setAttribute('aria-pressed','false');$('#soundLabel').textContent='AUDIO UNAVAILABLE';}
    });
    window.addEventListener('pagehide',stop,{once:true});
  };

  const setupNavigation = () => {
    const menu=$('#menuToggle'), nav=$('#primaryNav'), header=$('#siteHeader');
    const setMenu=open=>{menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.querySelector('.sr-only').textContent=open?'Close navigation':'Open navigation';};
    menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
    nav.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false);});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')setMenu(false);});
    const sections=$$('main section[id]');
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id;$$('.primary-nav a').forEach(a=>{if(a.getAttribute('href')===`#${id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));}
    const onScroll=()=>{header.classList.toggle('is-scrolled',window.scrollY>24);const max=document.documentElement.scrollHeight-window.innerHeight;$('#scrollProgress').style.width=`${max>0?window.scrollY/max*100:0}%`;};
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
    const goHome=event=>{event.preventDefault();$('#home').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});};
    $('#beginJourney').addEventListener('click',goHome);$('#skipIntro').addEventListener('click',goHome);
    $('#exploreAgain').addEventListener('click',event=>{event.preventDefault();$('#intro').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
    if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ready');const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');reveals.unobserve(entry.target);}}),{threshold:.08});$$('.reveal').forEach(node=>reveals.observe(node));}
  };

  const initEvents = () => {
    $('#birdSearch').addEventListener('input',renderBirds);$('#habitatFilter').addEventListener('change',renderBirds);$('#statusFilter').addEventListener('change',renderBirds);$('#birdLanguage')?.addEventListener('change',renderBirds);
    $('#sortBirds').addEventListener('click',event=>{const pressed=event.currentTarget.getAttribute('aria-pressed')==='true';event.currentTarget.setAttribute('aria-pressed',String(!pressed));event.currentTarget.innerHTML=pressed?'A–Z <span aria-hidden="true">↕</span>':'Z–A <span aria-hidden="true">↕</span>';renderBirds();});
    $('#quizReveal').addEventListener('click',()=>{const eligible=birds.filter(bird=>['white-throated-kingfisher','black-headed-ibis','indian-pond-heron'].includes(bird.id));const chosen=eligible[Math.floor(Math.random()*eligible.length)];$('#quizAnswer').innerHTML=`<strong>${esc(chosen.common)}</strong> <em>(${esc(chosen.scientific)})</em><br>${esc(chosen.fact)}<br>${link(chosen.evidence,'Source for the local record')}`;$('#quizReveal').textContent='PICK ANOTHER BIRD';const image=$('#quizImage');if(image){image.src=chosen.image.src;image.alt=`${chosen.common} photograph`} });
    document.body.addEventListener('click',event=>{
      const birdButton=event.target.closest('[data-bird]'); if(birdButton){openBird(birdButton.dataset.bird);return;}
      const destinationButton=event.target.closest('[data-destination]'); if(destinationButton){openDestination(destinationButton.dataset.destination);return;}
      const keralaButton=event.target.closest('[data-kerala]'); if(keralaButton){openKerala(keralaButton.dataset.kerala);return;}
      const favoriteButton=event.target.closest('[data-favorite]'); if(favoriteButton){const values=getFavorites();const id=favoriteButton.dataset.favorite;const was=values.has(id);was?values.delete(id):values.add(id);saveFavorites(values);renderBirds();if($('#birdDialog').open){const bird=birds.find(item=>item.id===id);const btn=$('#birdDialog [data-favorite]');if(btn){btn.setAttribute('aria-pressed',String(!was));btn.textContent=was?'SAVE AS FAVOURITE':'REMOVE FAVOURITE';}}$('#liveMessage').textContent=was?'Removed from favourites.':'Added to favourites.';return;}
      const filterButton=event.target.closest('[data-gallery-filter]'); if(filterButton){selectedGallery=filterButton.dataset.galleryFilter;renderGallery();return;}
      const galleryButton=event.target.closest('[data-gallery-open]'); if(galleryButton){openLightbox(galleryButton.dataset.galleryOpen);return;}
      if(event.target.closest('[data-close-dialog]')){const dialog=event.target.closest('dialog');if(dialog?.open)dialog.close();}
    });
    $$('.profile-dialog,.lightbox-dialog').forEach(dialog=>dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(dialog.id==='lightboxDialog'&&lastFocus?.focus)lastFocus.focus();}));
    $('#lightboxDialog').addEventListener('click',event=>{if(event.target.id==='lightboxDialog')$('#lightboxDialog').close();});
    $('.lightbox-prev').addEventListener('click',()=>moveLightbox(-1));$('.lightbox-next').addEventListener('click',()=>moveLightbox(1));
    $('#lightboxDialog').addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();moveLightbox(1);}if(event.key==='ArrowLeft'){event.preventDefault();moveLightbox(-1);}});
  };

  const initQuizImage = () => {
    const quizLabel=$('.quiz-label'); if(!quizLabel)return;
    const image=document.createElement('img');image.id='quizImage';image.src=photos.kingfisher.src;image.alt='White-throated Kingfisher species photograph; not evidence of a Kasaragod sighting';image.loading='lazy';
    image.style.cssText='width:100%;max-width:190px;aspect-ratio:4/3;object-fit:cover;border:1px solid rgba(255,255,255,.25)';
    quizLabel.insertBefore(image,quizLabel.firstChild);
  };

  const initDepthMotion = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const tiltTargets = $$('.bird-card, .destination-card, .special-site, .kerala-card');
    tiltTargets.forEach(node => node.dataset.tilt = 'true');
    if (reduce || !finePointer) return;
    let frame = 0;
    const reset = node => {
      node.style.setProperty('--tilt-x', '0deg');
      node.style.setProperty('--tilt-y', '0deg');
      node.style.setProperty('--lift-z', '0px');
    };
    tiltTargets.forEach(node => {
      node.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          node.style.setProperty('--tilt-x', `${(x * 5).toFixed(2)}deg`);
          node.style.setProperty('--tilt-y', `${(-y * 5).toFixed(2)}deg`);
          node.style.setProperty('--lift-z', '7px');
        });
      });
      node.addEventListener('pointerleave', () => reset(node));
      node.addEventListener('blur', () => reset(node), true);
    });
    const scene = $('.opening');
    if (scene) {
      scene.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse') return;
        const x = event.clientX / Math.max(window.innerWidth, 1) - .5;
        const y = event.clientY / Math.max(window.innerHeight, 1) - .5;
        scene.style.setProperty('--scene-x', `${(x * 12).toFixed(2)}px`);
        scene.style.setProperty('--scene-y', `${(y * 10).toFixed(2)}px`);
      }, {passive:true});
      scene.addEventListener('pointerleave', () => {
        scene.style.setProperty('--scene-x', '0px');
        scene.style.setProperty('--scene-y', '0px');
      });
    }
    // A restrained scroll-linked camera move adds depth to the landscape chapter.
    const hero = $('.hero');
    if (hero && !reduce) {
      let scrollFrame = 0;
      const updateHeroDepth = () => {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const progress = Math.max(-1, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height) - .5));
          hero.style.setProperty('--hero-parallax', `${(-progress * 34).toFixed(1)}px`);
        });
      };
      window.addEventListener('scroll', updateHeroDepth, {passive:true});
      window.addEventListener('resize', updateHeroDepth, {passive:true});
      updateHeroDepth();
    }
  };

  const init = () => {
    const speciesPhotos = {
      'white-throated-kingfisher': [photos.kingfisher, 'Photographed in India; this species image is not evidence of the Kasaragod record.'],
      'indian-pond-heron': [photos.pondHeron, 'Photographed in Kolkata, West Bengal; not a Kasaragod sighting.'],
      'spotted-dove': [photos.spottedDove, 'Photographed in Vadodara, Gujarat; not a Kasaragod sighting.'],
      'black-headed-ibis': [photos.ibis, 'Photographed in India; not a Kasaragod sighting.'],
      'oriental-darter': [photos.orientalDarter, 'Photographed in Nepal; not a Kasaragod sighting.'],
      'garganey': [photos.garganey, 'Species photograph; see the source page for image location. It is not a Kasaragod record.'],
      'common-teal': [photos.commonTeal, 'Species photograph; see the source page for image location. It is not a Kasaragod record.'],
      'orange-breasted-green-pigeon': [photos.greenPigeon, 'Species photograph; not presented as a Kidoor sighting.'],
      'lesser-sand-plover': [photos.lesserPlover, 'Species photograph; not presented as a Kasaragod sighting.'],
      'indian-nightjar': [photos.indianNightjar, 'Species photograph; not presented as a Kidoor sighting.'],
      'great-thick-knee': [photos.thickKnee, 'Species photograph; separate from the documented Kumbla–Shiriya observation.'],
      'gadwall': [photos.gadwall, 'Species photograph; separate from the Udinoor report.'],
      'lesser-whistling-duck': [photos.commonTeal, 'Illustrative waterbird photograph; not a Lesser Whistling Duck photograph.'],
      'cotton-pygmy-goose': [photos.commonTeal, 'Illustrative waterbird photograph; not a Cotton Pygmy-Goose photograph.'],
      'indian-peafowl': [photos.ranipuram, 'Illustrative Kasaragod landscape; not a peafowl photograph.'],
      'asian-openbill': [photos.ibis, 'Illustrative wading-bird photograph; not an Asian Openbill photograph.'],
      'woolly-necked-stork': [photos.ibis, 'Illustrative wading-bird photograph; not a Woolly-necked Stork photograph.'],
      'yellow-bittern': [photos.pondHeron, 'Illustrative heron photograph; not a Yellow Bittern photograph.'],
      'black-crowned-night-heron': [photos.pondHeron, 'Illustrative heron photograph; not a Black-crowned Night Heron photograph.'],
      'striated-heron': [photos.pondHeron, 'Illustrative heron photograph; not a Striated Heron photograph.'],
      'cattle-egret': [photos.pondHeron, 'Illustrative heron-family photograph; not a Cattle Egret photograph.'],
      'grey-headed-swamp-hen': [photos.kumarakom, 'Illustrative wetland photograph; not a Grey-headed Swamphen photograph.']
    };
    birds.forEach(bird => { if (speciesPhotos[bird.id]) { bird.image = speciesPhotos[bird.id][0]; bird.imageNote = speciesPhotos[bird.id][1]; } });
    const madhur = destinations.find(place => place.id === 'madhur-temple');
    if (madhur) madhur.imageNote = 'Photograph depicts Madhur Temple; creator and licence are listed in the photo credits.';
    renderDestinations();populateHabitats();renderBirds();renderSpecialSites();renderHabitats();renderKerala();renderFacts();renderConservation();renderSources();renderGallery();initEvents();initMap();initSound();setupNavigation();initQuizImage();initDepthMotion();
    $('#liveMessage').textContent='Field guide ready.';
  };
  init();
})();

(() => {
  'use strict';
  const $ = (s, r=document) => r.querySelector(s);
  const body = document.body;
  const deviceDialog = $('#deviceSetup');
  const deviceButton = $('#deviceSetupButton');
  const deviceNames = {phone:'Phone',tablet:'Tablet',laptop:'Laptop'};
  const detectDevice = () => matchMedia('(max-width:600px)').matches ? 'phone' : matchMedia('(max-width:1000px)').matches ? 'tablet' : 'laptop';
  let savedDevice = null;
  try{savedDevice=localStorage.getItem('wok-device');}catch{}
  const initialDevice = deviceNames[savedDevice] ? savedDevice : detectDevice();
  body.dataset.device = initialDevice;
  const applyDevice = (device) => {
    if(!deviceNames[device]) return;
    body.dataset.device = device;
    try{localStorage.setItem('wok-device',device);}catch{}
    if(deviceDialog?.open) deviceDialog.close();
    if(deviceButton) deviceButton.textContent = device.toUpperCase();
    const liveMessage=$('#liveMessage'); if(liveMessage) liveMessage.textContent = deviceNames[device]+' layout selected.';
    window.dispatchEvent(new Event('resize'));
  };
  // Ask on every fresh visit, even when a previous device choice was saved.
  if(deviceDialog?.showModal) {
    document.querySelectorAll('[data-device-choice]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.deviceChoice===initialDevice)));
    try{deviceDialog.showModal();}catch{applyDevice(initialDevice);}
  } else applyDevice(initialDevice);
  deviceButton?.addEventListener('click',()=>{if(deviceDialog&&!deviceDialog.open)deviceDialog.showModal();});
  $('#deviceAutoChoice')?.addEventListener('click',()=>applyDevice(detectDevice()));
  document.querySelectorAll('[data-device-choice]').forEach(btn=>btn.addEventListener('click',()=>applyDevice(btn.dataset.deviceChoice)));
  deviceDialog?.addEventListener('cancel',e=>e.preventDefault());
  const themes=['forest','ocean','sunset','night','mist','monsoon'];
  const themeLabels={forest:'FOREST',ocean:'OCEAN',sunset:'SUNSET',night:'NIGHT',mist:'MIST',monsoon:'MONSOON'};
  let theme='forest';
  try{theme=localStorage.getItem('wok-theme')||'forest';}catch{}
  if(!themes.includes(theme)) theme='forest';
  const applyTheme=()=>{body.dataset.theme=theme;const toggle=$('#themeCycle');if(toggle){toggle.title='Theme: '+themeLabels[theme]+' · click to change';toggle.setAttribute('aria-label','Current theme '+themeLabels[theme]+'. Activate to switch theme.');toggle.setAttribute('data-current-theme',theme);}try{localStorage.setItem('wok-theme',theme);}catch{}};
  applyTheme();
  $('#themeCycle')?.addEventListener('click',()=>{theme=themes[(themes.indexOf(theme)+1)%themes.length];applyTheme();});
  const motion=$('#motionToggle');
  let motionOn=true;
  try{motionOn=localStorage.getItem('wok-motion')!=='off';}catch{}
  const applyMotion=()=>{body.classList.toggle('motion-off',!motionOn);body.classList.toggle('motion-forced',motionOn);if(motionOn&&matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ready');document.querySelectorAll('.reveal').forEach(node=>node.classList.add('is-visible'));}motion?.setAttribute('aria-pressed',String(motionOn));if(motion)motion.textContent=motionOn?'MOTION ON':'MOTION OFF';try{localStorage.setItem('wok-motion',motionOn?'on':'off');}catch{}};
  applyMotion();
  motion?.addEventListener('click',()=>{motionOn=!motionOn;applyMotion();});
  const audio=$('#fieldMusicAudio'), input=$('#musicFiles'), playlist=$('#musicPlaylist');
  const title=$('#musicTrackTitle'), artist=$('#musicTrackArtist');
  const websitePanel=$('#websiteMusicPanel'), customPanel=$('#customMusicPanel'), trackSelect=$('#websiteTrackSelect');
  const websiteTracks={
    forest:{name:'This Land Is Your Land',artist:'Traditional folk song · public-domain recording',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/This_Land_is_Your_Land.ogg'},
    ocean:{name:'Over the River and Through the Wood',artist:'Traditional folk song · Wikimedia Commons',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Over_The_River_And_Through_The_Wood.ogg'},
    sunset:{name:'Warm Sunset',artist:'MusicLFiles · CC BY 4.0 · instrumental',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Warm_Sunset_by_MusicLFiles.ogg'},
    mist:{name:'Scarborough Fair',artist:'Traditional vocal ballad · Wikimedia Commons · CC BY-SA 3.0 / GFDL',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Scarborough_Fair.ogg'},
    monsoon:{name:'Amazing Grace (1922 choir recording)',artist:'Original Sacred Harp Choir · Wikimedia Commons · US public domain; check local rights',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Amazing_grace_1922.ogg'},
    night:{name:'Frankie and Johnny',artist:'Traditional folk song · public-domain recording',url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/FrankieandJohnny.ogg'}
  };
  let mode='website',tracks=[],urls=[];
  const clearUrls=()=>{urls.forEach(URL.revokeObjectURL);urls=[];};
  const playWebsiteTrack=(key,autoplay=false)=>{const t=websiteTracks[key]||websiteTracks.forest;audio.src=t.url;audio.load();title.textContent=t.name;artist.textContent=t.artist;if(autoplay)audio.play().catch(()=>{const liveMessage=$('#liveMessage'); if(liveMessage) liveMessage.textContent='Press play to start this website track.';});};
  const selectTrack=(index,autoplay=false)=>{const t=tracks[index];if(!t)return;audio.src=t.url;audio.load();playlist.value=String(index);title.textContent=t.name;artist.textContent='Custom audio · this device';if(autoplay)audio.play().catch(()=>{});};
  const setMusicMode=next=>{mode=next;websitePanel.hidden=mode!=='website';customPanel.hidden=mode!=='custom';document.querySelectorAll('[data-music-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.musicMode===mode)));if(mode==='website')playWebsiteTrack(trackSelect.value||body.dataset.theme||'forest');else if(tracks.length)selectTrack(Number(playlist.value)||0);else{audio.removeAttribute('src');audio.load();title.textContent='Add your own soundtrack';artist.textContent='Your audio stays on this device';}};
  document.querySelectorAll('[data-music-mode]').forEach(b=>b.addEventListener('click',()=>setMusicMode(b.dataset.musicMode)));
  trackSelect?.addEventListener('change',()=>playWebsiteTrack(trackSelect.value,true));
  input?.addEventListener('change',()=>{clearUrls();tracks=Array.from(input.files||[]).filter(file=>file.type.startsWith('audio/')||/\.(mp3|m4a|ogg|wav|aac|flac)$/i.test(file.name)).map(file=>({name:file.name.replace(/\.[^.]+$/,''),url:URL.createObjectURL(file)}));playlist.replaceChildren();tracks.forEach((t,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent=t.name;playlist.append(o);});playlist.disabled=!tracks.length;if(tracks.length){selectTrack(0,true);const liveMessage=$('#liveMessage'); if(liveMessage) liveMessage.textContent=tracks.length+' personal track(s) added.';}});
  playlist?.addEventListener('change',()=>selectTrack(Number(playlist.value),true));
  $('#musicDockToggle')?.addEventListener('click',e=>{const dock=$('#musicDock'),collapsed=dock.classList.toggle('is-collapsed');e.currentTarget.textContent=collapsed?'+':'−';e.currentTarget.setAttribute('aria-expanded',String(!collapsed));});
  audio?.addEventListener('error',()=>{const liveMessage=$('#liveMessage'); if(liveMessage) liveMessage.textContent='This track could not load. Try another website track or add a local audio file.';});
  const themeTrack=()=>{if(mode==='website'&&trackSelect){trackSelect.value=Object.prototype.hasOwnProperty.call(websiteTracks,body.dataset.theme)?body.dataset.theme:'forest';playWebsiteTrack(trackSelect.value);}};
  new MutationObserver(themeTrack).observe(body,{attributes:true,attributeFilter:['data-theme']});
  window.addEventListener('pagehide',()=>{audio?.pause();clearUrls();},{once:true});
  setMusicMode('website');
})();
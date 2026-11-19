(() => {
  'use strict';
  const $ = (s, r=document) => r.querySelector(s);
  const body = document.body;
  const deviceDialog = $('#deviceSetup');
  const deviceNames = {phone:'Phone',tablet:'Tablet',laptop:'Laptop'};
  const applyDevice = (device) => {
    if(!deviceNames[device]) return;
    body.dataset.device = device;
    try{localStorage.setItem('wok-device',device);}catch{}
    if(deviceDialog?.open) deviceDialog.close();
    $('#deviceSetupButton').textContent = device.toUpperCase();
    $('#liveMessage').textContent = deviceNames[device]+' layout selected.';
    window.dispatchEvent(new Event('resize'));
  };
  let savedDevice = null;
  try{savedDevice=localStorage.getItem('wok-device');}catch{}
  if(savedDevice) applyDevice(savedDevice);
  else {
    const detected = matchMedia('(max-width:600px)').matches ? 'phone' : matchMedia('(max-width:1000px)').matches ? 'tablet' : 'laptop';
    if(deviceDialog?.showModal) deviceDialog.showModal();
    else applyDevice(detected);
  }
  $('#deviceSetupButton')?.addEventListener('click',()=>deviceDialog?.showModal());
  document.querySelectorAll('[data-device-choice]').forEach(btn=>btn.addEventListener('click',()=>applyDevice(btn.dataset.deviceChoice)));
  deviceDialog?.addEventListener('click',e=>{if(e.target===deviceDialog) deviceDialog.close();});
  const themes=['forest','ocean','sunset','night'];
  const themeLabels={forest:'FOREST',ocean:'OCEAN',sunset:'SUNSET',night:'NIGHT'};
  let theme='forest';
  try{theme=localStorage.getItem('wok-theme')||'forest';}catch{}
  if(!themes.includes(theme)) theme='forest';
  const applyTheme=()=>{body.dataset.theme=theme;$('#themeCycle').textContent='THEME · '+themeLabels[theme];try{localStorage.setItem('wok-theme',theme);}catch{}};
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
  let tracks=[], urls=[];
  const clearUrls=()=>{urls.forEach(URL.revokeObjectURL);urls=[];};
  const selectTrack=(index,autoplay=false)=>{
    const track=tracks[index];if(!track||!audio)return;
    audio.src=track.url;audio.load();playlist.value=String(index);
    title.textContent=track.name;artist.textContent='Your device · personal audio file';
    if(autoplay) audio.play().catch(()=>{});
  };
  input?.addEventListener('change',()=>{
    clearUrls();tracks=Array.from(input.files||[]).filter(f=>f.type.startsWith('audio/')||/\.(mp3|m4a|ogg|wav|aac|flac)$/i.test(f.name)).map(file=>({name:file.name.replace(/\.[^.]+$/,''),url:URL.createObjectURL(file)}));
    playlist.replaceChildren();
    tracks.forEach((track,i)=>{const option=document.createElement('option');option.value=String(i);option.textContent=track.name;playlist.append(option);});
    playlist.disabled=!tracks.length;
    if(tracks.length){selectTrack(0,true);$('#liveMessage').textContent=tracks.length+' song'+(tracks.length===1?'':'s')+' added to your local playlist.';}
    else{title.textContent='Choose your own vocal soundtrack';artist.textContent='No playable audio file selected';}
  });
  playlist?.addEventListener('change',()=>selectTrack(Number(playlist.value),true));
  $('#musicDockToggle')?.addEventListener('click',e=>{const dock=$('#musicDock'),collapsed=dock.classList.toggle('is-collapsed');e.currentTarget.textContent=collapsed?'+':'−';e.currentTarget.setAttribute('aria-expanded',String(!collapsed));});
  audio?.addEventListener('ended',()=>{if(tracks.length){const next=(Number(playlist.value)+1)%tracks.length;selectTrack(next,true);}});
  window.addEventListener('pagehide',()=>{audio?.pause();clearUrls();},{once:true});
})();
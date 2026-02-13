# Vocabulari - Quick Setup Guide

## ✅ What's Included

Download **catala-classe-updated.zip** which contains:

### Organized Structure
```
catala-classe/
├── index.html              ← NEEDS UPDATING (instructions below)
├── manifest.json           ← READY TO USE (updated)
├── sw.js                   ← NO CHANGES (same as before)
├── assets/                 
│   ├── icons/
│   │   └── android-icon-192x192.png
│   └── vocabulari/         ← 98 images (1.jpeg - 98.jpeg)
└── js/
    └── vocabulari-data.js  ← All vocabulary data
```

## 🚀 Setup Steps

### Step 1: Download & Extract
1. Download `catala-classe-updated.zip`
2. Extract it
3. You'll have the organized folder structure

### Step 2: Replace Files in Your Repo

Copy these to your GitHub repo:
- `assets/` folder (entire folder)
- `js/` folder (entire folder)  
- `manifest.json` (replace existing)
- `sw.js` (no changes, keep your existing one)

### Step 3: Update index.html

Your `index.html` needs 4 small changes:

#### Change 1: Update icon path (line 11)
```html
<!-- OLD -->
<link rel="apple-touch-icon" href="icon-192.png">

<!-- NEW -->
<link rel="apple-touch-icon" href="assets/icons/android-icon-192x192.png">
```

#### Change 2: Add vocabulari script (before closing `</body>`, around line 200)
```html
<script src="js/vocabulari-data.js"></script>
<script>
// Your existing JavaScript...
```

#### Change 3: Add vocabulari to navigation (around line 195)
```javascript
// OLD
[{id:"home",ic:"🏠",l:"Inici"},{id:"quiz",ic:"⚡",l:"Quiz"},{id:"verbs",ic:"📝",l:"Verbs"},{id:"gram",ic:"📖",l:"Gramàtica"}]

// NEW  
[{id:"home",ic:"🏠",l:"Inici"},{id:"quiz",ic:"⚡",l:"Quiz"},{id:"vocab",ic:"📖",l:"Vocabulari"},{id:"verbs",ic:"📝",l:"Verbs"},{id:"gram",ic:"📚",l:"Gramàtica"}]
```

#### Change 4: Add vocabulari screen rendering

Find where it says `else if(screen==="gram"){` (around line 164)

BEFORE that line, add:

```javascript
else if(screen==="vocab"){
  // Header
  var header=document.createElement('div');
  header.className='vocab-header';
  header.style='padding:20px 16px;background:#fff;border-bottom:1px solid #eee';
  header.innerHTML='<h1 class="serif" style="font-size:24px;margin-bottom:6px">📖 Vocabulari</h1><p style="font-size:13px;color:#888">58 pàgines il·lustrades</p>';
  scr.appendChild(header);
  
  // Section filter
  var filter=document.createElement('div');
  filter.className='vocab-filter';
  [{id:"all",name:"Tots",icon:"📚"}].concat(typeof VOCAB_SECTIONS!=='undefined'?VOCAB_SECTIONS:[]).forEach(function(s){
    var btn=document.createElement('button');
    btn.className=vocabSection===s.id?'active':'';
    if(vocabSection===s.id&&s.color)btn.style.background=s.color;
    btn.textContent=s.icon+' '+s.name;
    btn.onclick=function(){vocabSection=s.id;R();};
    filter.appendChild(btn);
  });
  scr.appendChild(filter);
  
  // Grid
  var grid=document.createElement('div');
  grid.className='vocab-grid';
  var filtered=typeof VOCABULARI!=='undefined'?(vocabSection==="all"?VOCABULARI:VOCABULARI.filter(function(v){return v.section===vocabSection;})):[];
  filtered.forEach(function(v){
    var card=document.createElement('div');
    card.className='vocab-card';
    card.onclick=function(){vocabPage=v;screen="vocab-page";R();};
    card.innerHTML='<img class="vocab-card-img" src="'+v.img+'" alt="'+v.title+'"><div class="vocab-card-body"><div class="vocab-card-title">'+v.title+'</div><div class="vocab-card-subtitle">'+v.subtitle+'</div><div class="vocab-card-page">Pàg '+v.page+'</div></div>';
    grid.appendChild(card);
  });
  scr.appendChild(grid);
}

else if(screen==="vocab-page"&&vocabPage){
  var modal=document.createElement('div');
  modal.className='vocab-modal show';
  
  var header=document.createElement('div');
  header.className='vocab-modal-header';
  header.innerHTML='<button class="vocab-modal-close" onclick="screen=\'vocab\';R()">←</button><div class="vocab-modal-title">'+vocabPage.title+'</div><div style="width:36px"></div>';
  modal.appendChild(header);
  
  var imgContainer=document.createElement('div');
  imgContainer.className='vocab-modal-img-container';
  var img=document.createElement('img');
  img.className='vocab-modal-img';
  img.src=vocabPage.img;
  img.alt=vocabPage.title;
  
  // Pinch zoom
  var lastDist=0;
  img.addEventListener('touchstart',function(e){
    if(e.touches.length===2){
      lastDist=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY);
    }
  });
  img.addEventListener('touchmove',function(e){
    if(e.touches.length===2){
      e.preventDefault();
      var dist=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY);
      if(lastDist>0){
        vocabScale*=dist/lastDist;
        vocabScale=Math.max(1,Math.min(3,vocabScale));
        img.style.transform='scale('+vocabScale+')';
      }
      lastDist=dist;
    }
  });
  img.addEventListener('touchend',function(){
    lastDist=0;
    setTimeout(function(){vocabScale=1;img.style.transform='scale(1)';},300);
  });
  
  imgContainer.appendChild(img);
  modal.appendChild(imgContainer);
  
  var footer=document.createElement('div');
  footer.className='vocab-modal-footer';
  footer.textContent='Pinça per fer zoom • Toca ← per tornar';
  modal.appendChild(footer);
  
  document.body.appendChild(modal);
  return; // Don't append nav for modal
}
```

#### Change 5: Add state variables (around line 103 where `var screen="home";` is)
```javascript
var screen="home";
var vocabSection="all";
var vocabPage=null;
var vocabScale=1;
```

#### Change 6: Add CSS styles (in the `<style>` section, before `</style>`)
```css
/* Vocabulari */
.vocab-filter{display:flex;gap:6px;padding:12px 16px;overflow-x:auto;background:#fff;border-bottom:1px solid #eee}
.vocab-filter button{padding:8px 14px;border-radius:20px;border:1px solid #ddd;background:#fff;color:#555;font-size:12px;white-space:nowrap;font-weight:600;transition:all .2s}
.vocab-filter button.active{color:#fff;border:none}
.vocab-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px}
.vocab-card{background:#fff;border-radius:12px;overflow:hidden;border:1px solid #eee;cursor:pointer;transition:transform .2s}
.vocab-card:active{transform:scale(.98)}
.vocab-card-img{width:100%;height:180px;object-fit:cover;background:#f5f5f5}
.vocab-card-body{padding:10px}
.vocab-card-title{font-size:13px;font-weight:600;margin-bottom:2px}
.vocab-card-subtitle{font-size:10px;color:#999;margin-bottom:6px}
.vocab-card-page{font-size:9px;color:#aaa;text-transform:uppercase}
.vocab-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.95);z-index:1000;flex-direction:column}
.vocab-modal.show{display:flex}
.vocab-modal-header{display:flex;justify-content:space-between;align-items:center;padding:16px;background:rgba(250,249,247,.95);backdrop-filter:blur(12px)}
.vocab-modal-title{font-size:16px;font-weight:600;flex:1;text-align:center;padding:0 20px;color:#1a1a2e}
.vocab-modal-close{width:36px;height:36px;border-radius:50%;background:#eee;border:none;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.vocab-modal-img-container{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:20px}
.vocab-modal-img{max-width:100%;max-height:100%;object-fit:contain;transition:transform .3s}
.vocab-modal-footer{padding:16px;background:rgba(250,249,247,.95);backdrop-filter:blur(12px);text-align:center;font-size:11px;color:#999}
```

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Add vocabulari with organized assets structure"
git push
```

## 📱 What You Get

- **58 vocabulary pages** organized in 5 sections
- **Clean folder structure** (assets/, js/)
- **Mobile-optimized** with pinch-to-zoom
- **Matches your app** style perfectly

## ✅ Testing

1. Open index.html locally first
2. Click the Vocabulari button (📖)
3. Should see all pages in a grid
4. Click any page to view full-screen
5. Pinch to zoom on mobile

## Need Help?

The `index.html` in the ZIP is the original (unchanged) so you have a reference. Follow the 6 changes above to add vocabulari functionality.

All 98 images are in `assets/vocabulari/` with organized paths in `js/vocabulari-data.js`!

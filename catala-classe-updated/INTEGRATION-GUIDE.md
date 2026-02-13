# Vocabulari Integration Guide

## 📁 Proposed Repository Structure

```
catala-classe/
├── index.html                    ← Updated with vocabulari
├── manifest.json                 ← Updated icon path
├── sw.js                         ← No changes
├── assets/                       ← NEW folder
│   ├── icons/
│   │   └── android-icon-192x192.png
│   └── vocabulari/              ← 98 images here
│       ├── 1.jpeg
│       ├── 2.jpeg
│       ├── ...
│       └── 98.jpeg
└── js/                          ← NEW folder  
    └── vocabulari-data.js       ← Vocabulari data

```

## ✨ Benefits of This Structure

1. **Clean root** - Only essential files (index.html, manifest.json, sw.js)
2. **Organized assets** - All images in `assets/` folder
3. **Modular JS** - Data files in `js/` folder
4. **Scalable** - Easy to add more images/sections
5. **Best practice** - Standard for PWA/web apps
6. **GitHub Pages ready** - Works perfectly with GitHub Pages

## 🚀 What Changes

### Files that Change:
- **index.html** - Add vocabulari screen + script reference
- **manifest.json** - Update icon path to `assets/icons/...`

### Files that Move:
- **android-icon-192x192.png** → `assets/icons/android-icon-192x192.png`

### New Files:
- **js/vocabulari-data.js** - Data for all 58 pages
- **assets/vocabulari/** - 98 vocabulary images

## 📝 Changes to index.html

### 1. Add script reference (in `<head>` or before closing `</body>`):
```html
<script src="js/vocabulari-data.js"></script>
```

### 2. Add vocabulari styles (in `<style>` section):
```css
/* Vocabulari specific styles */
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
.vocab-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.95);z-index:1000}
.vocab-modal.show{display:flex;align-items:center;justify-content:center}
.vocab-modal-content{width:100%;max-width:420px;height:100%;display:flex;flex-direction:column}
.vocab-modal-header{display:flex;justify-content:space-between;align-items:center;padding:16px;background:rgba(250,249,247,.95);backdrop-filter:blur(12px)}
.vocab-modal-title{font-size:16px;font-weight:600;flex:1;text-align:center;padding:0 20px}
.vocab-modal-close{width:36px;height:36px;border-radius:50%;background:#eee;border:none;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.vocab-modal-img-container{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden}
.vocab-modal-img{max-width:100%;max-height:100%;object-fit:contain;transition:transform .3s}
.vocab-modal-footer{padding:16px;background:rgba(250,249,247,.95);backdrop-filter:blur(12px);text-align:center;font-size:11px;color:#999}
```

### 3. Add vocabulari state variables (at top of JavaScript):
```javascript
var vocabSection="all";
var vocabPage=null;
var vocabScale=1;
```

### 4. Add vocabulari screen (in the screen rendering logic):
```javascript
else if(screen==="vocab"){
  // Vocabulari screen code here
  // See complete index.html for full implementation
}

else if(screen==="vocab-page"){
  // Vocabulari page viewer code here
  // See complete index.html for full implementation
}
```

### 5. Update navigation (line ~195):
```javascript
[{id:"home",ic:"🏠",l:"Inici"},
 {id:"quiz",ic:"⚡",l:"Quiz"},
 {id:"vocab",ic:"📖",l:"Vocabulari"},  // ADD THIS
 {id:"verbs",ic:"📝",l:"Verbs"},
 {id:"gram",ic:"📖",l:"Gramàtica"}]
```

## 🔄 Migration Steps

### Step 1: Backup Current Repo
```bash
cd /path/to/catala-classe
git add .
git commit -m "Backup before vocabulari integration"
```

### Step 2: Create New Folder Structure
```bash
mkdir -p assets/icons assets/vocabulari js
```

### Step 3: Move Existing Icon
```bash
git mv android-icon-192x192.png assets/icons/
```

### Step 4: Add New Files
- Copy all 98 images to `assets/vocabulari/`
- Copy `vocabulari-data.js` to `js/`
- Update `index.html` (use the provided complete version)
- Update `manifest.json` (use the provided version)

### Step 5: Test Locally
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

### Step 6: Commit and Push
```bash
git add .
git commit -m "Add vocabulari with 58 illustrated pages"
git push
```

## 📊 What You Get

- **58 vocabulary pages** across 5 sections
- **98 high-quality images** (1.jpeg - 98.jpeg)
- **Section filtering** (Exteriors, Habitatges, Serveis, Aliments, Altres)
- **Full-screen viewer** with pinch-to-zoom
- **Mobile-optimized** interface
- **Matches existing style** - same fonts, colors, navigation

## 🎨 The 5 Sections

1. **Els exteriors** (12 pages) - Outdoors, city, nature
2. **Els habitatges** (9 pages) - House, rooms, camping
3. **Els serveis** (11 pages) - Shops, services, professions
4. **Els aliments** (10 pages) - Food, markets, restaurants
5. **Altres àrees** (16 pages) - Body, sports, colors, verbs, phrases

## ✅ Testing Checklist

After integration, verify:
- [ ] All 98 images load correctly
- [ ] Section filtering works
- [ ] Image viewer opens on tap
- [ ] Pinch-to-zoom works on mobile
- [ ] Navigation between screens works
- [ ] Icon loads correctly in manifest
- [ ] No console errors (F12)
- [ ] PWA installs correctly

## 🐛 Troubleshooting

**Images not loading?**
- Check paths in `vocabulari-data.js` match actual file locations
- Verify all 98 images are in `assets/vocabulari/`
- Check browser console for 404 errors

**Icon not showing?**
- Verify `manifest.json` has correct path: `assets/icons/android-icon-192x192.png`
- Clear browser cache and reload

**Vocabulari screen blank?**
- Check that `js/vocabulari-data.js` is loaded (check browser console)
- Verify VOCABULARI and VOCAB_SECTIONS variables are defined

## 📚 Resources

- Full updated index.html provided
- Updated manifest.json provided
- Complete vocabulari-data.js provided
- All 98 images provided

Ready to integrate! 🎉

# 🍫 our-chocolates.be

**Belgian Chocolate Business Directory**

## 🌐 Live Site
- **Production**: https://our-chocolates.be
- **Deployment**: Cloudflare Pages

## 📋 Project Overview

A comprehensive directory of Belgian chocolate businesses featuring:
- 476 Belgian chocolate businesses
- 445 geocoded locations (93.5% coverage)
- Interactive Google Maps integration
- Multilingual support (NL/FR/EN)
- Search and filter functionality

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS (TailwindCSS), JavaScript
- **Deployment**: Cloudflare Pages
- **Database**: Cloudflare D1 (SQLite)
- **Maps**: Leaflet + OpenStreetMap
- **Analytics**: Google Analytics (G-GS7C0PSYPK)

## 📁 Project Structure

```
├── index.html              # Homepage
├── directory.html          # Business directory with map
├── pairings.html          # Chocolate pairings guide
├── history.html           # Belgian chocolate history
├── about.html             # About page
├── static/
│   ├── directory.js       # Map & filtering logic
│   ├── translations.js    # Multilingual translations
│   └── home.js           # Homepage functionality
├── functions/api/
│   └── businesses.js      # Cloudflare Pages Function API
├── images/
│   └── favicon.jpg
└── logo/                  # Brand logos (Centho, Godiva, Leonidas, Neuhaus, Pierre Marcolini)
```

## 🌐 Multilingual Support

The site supports three languages:
- 🇳🇱 Dutch (Nederlands) - Default
- 🇫🇷 French (Français)
- 🇬🇧 English

**Note**: Translation system is partially implemented. Currently translated:
- ✅ Navigation menu
- ✅ Footer
- ✅ Business directory listings
- ⚠️ Page content still mostly in Dutch

## 🔧 Features

- **Interactive Map**: Browse businesses on an interactive map with markers
- **Advanced Filtering**: Filter by type, province, and city
- **Search**: Full-text search across business names and locations
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Brand Showcase**: Features major Belgian chocolate brands

## 🚀 Deployment

The site automatically deploys to Cloudflare Pages when changes are pushed to the `main` branch.

### Database

The site uses Cloudflare D1 (SQLite) for storing business data:
- Business information (name, address, contact)
- Geolocation data (latitude, longitude)
- Multilingual descriptions (NL/FR/EN)

### API Endpoint

`/api/businesses` - Returns business data with filtering support

Query parameters:
- `type` - Filter by business type
- `province` - Filter by province
- `city` - Filter by city
- `search` - Search across name, address, city
- `lang` - Language for descriptions (nl/fr/en)

## 📊 Statistics

- **Total Businesses**: 476
- **Geocoded**: 445 (93.5%)
- **Provinces Covered**: All Belgian provinces
- **Brand Logos**: 5 major Belgian brands

## 🎨 Design

- **Color Scheme**: 
  - Electric Green (#00FF00)
  - Gold (#FFD700)
  - Cognac (#8B4513)
  - Charcoal (#1C1C1C)
- **Fonts**: 
  - Playfair Display (serif)
  - Inter (sans-serif)

## 📝 License

© 2024 Belgische Chocolade Gids. All rights reserved.

## 🔗 Links

- **Live Site**: https://our-chocolates.be
- **GitHub**: https://github.com/ptrckvckmns/our-chocolates
- **Cloudflare Pages**: Auto-deployed from main branch

# 🌟 Featured Businesses Setup - Instructies

## ✅ Wat is gedaan?

### 1. API Update
- **File**: `functions/api/businesses.js`
- **Wijziging**: Toegevoegd `featured` query parameter
- **Gebruik**: `/api/businesses?featured=1` geeft alleen businesses met `featured = 1`

### 2. Homepage Update
- **File**: `index.html`
- **Wijziging**: Featured sectie gebruikt nu `featured=1` kolom
- **Gedrag**: 
  - Toont alleen businesses waar `featured = 1`
  - Willekeurige volgorde (shuffle) elke keer
  - Maximum 3 businesses tegelijk
  - Toont logo als beschikbaar, anders chocolate icon

### 3. Logo Display
- Featured businesses met logo → logo wordt getoond
- Featured businesses zonder logo → chocolate candy icon

---

## 🎯 SQL Uitvoeren (VEREIST)

Je moet nu de SQL uitvoeren om businesses als featured te markeren.

### Optie A: Cloudflare Dashboard (Aanbevolen)

1. **Open Cloudflare Dashboard**: https://dash.cloudflare.com
2. **Navigeer naar**: Workers & Pages → D1 SQL Databases → [jouw database]
3. **Console tab**: Klik op "Console"
4. **Kopieer en plak deze SQL**:

```sql
-- Set featured businesses (met logo's)
UPDATE businesses SET featured = 1 WHERE name = 'Godiva' AND city = 'Wavre';
UPDATE businesses SET featured = 1 WHERE name = 'Leonidas' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Pierre Marcolini' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Neuhaus' AND city = 'Brussel';
UPDATE businesses SET featured = 1 WHERE name = 'Wittamer' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Centho Brussels' AND city = 'Brussel';
UPDATE businesses SET featured = 1 WHERE name = 'Côte d''Or';
UPDATE businesses SET featured = 1 WHERE name = 'Galler';

-- Check results
SELECT id, name, city, featured, logo_url FROM businesses WHERE featured = 1 ORDER BY name;
```

5. **Execute**: Klik op "Execute"
6. **Verify**: Je zou 10 businesses met `featured = 1` moeten zien

### Optie B: Wrangler CLI

```bash
cd /home/user/webapp
wrangler d1 execute <your-database-name> --remote --file=set_featured.sql
```

---

## 📋 Featured Businesses

Deze businesses worden als featured gemarkeerd:

| Name | City | Logo | Reason |
|------|------|------|--------|
| **Godiva** | Wavre | /logo/godiva.jpg | Iconisch Belgisch merk |
| **Leonidas** | Bruxelles | /logo/leonidas.jpg | Bekend internationaal |
| **Pierre Marcolini** | Bruxelles | /logo/pierre-marcolini.jpg | Luxe chocolatier |
| **Neuhaus** | Brussel | /logo/neuhaus.jpg | Uitvinder praline |
| **Wittamer** | Bruxelles | /logo/wittamer.jpg | Royal supplier |
| **Centho Brussels** | Brussel | /logo/centho.jpg | Premium chocolatier |
| **Côte d'Or** | - | /logo/cote-dor.jpg | Klassiek merk |
| **Galler** | - | /logo/galler.jpg | Belgische traditie |
| **Centho Duisburg** | Duisburg | /logo/centho.jpg | Al featured in DB |
| **Corné Port-Royal** | Wavre | /logo/corne-port-royal.jpg | Al featured in DB |

**Totaal**: 10 featured businesses

---

## 🎲 Hoe Werkt de Featured Sectie?

### Homepage Gedrag

1. **Query**: `GET /api/businesses?featured=1&lang=nl`
2. **Shuffle**: Array wordt willekeurig gemengd
3. **Slice**: Eerste 3 worden getoond
4. **Result**: Elke pageload toont een andere combinatie van 3

### Voorbeeld Rotatie

- **Bezoek 1**: Godiva, Wittamer, Leonidas
- **Bezoek 2**: Neuhaus, Pierre Marcolini, Galler
- **Bezoek 3**: Centho, Côte d'Or, Godiva
- etc.

Dit zorgt voor dynamische content zonder database queries elke keer te veranderen.

---

## 🔍 Verificatie

### Na SQL Uitvoering

1. **Check API**:
   ```bash
   curl https://our-chocolates.be/api/businesses?featured=1
   ```
   
   Verwachte output: 10 businesses met `featured: 1`

2. **Check Homepage**:
   - Ga naar: https://our-chocolates.be
   - Scroll naar "Uitgelichte Chocolatiers"
   - Je zou 3 chocolatiers moeten zien met logo's
   - Refresh de pagina → andere 3 chocolatiers verschijnen

3. **Check Multiple Loads**:
   - Refresh 5x → elke keer andere combinatie
   - Alle 10 featured businesses zouden zichtbaar moeten zijn na meerdere refreshes

---

## ➕ Meer Businesses Featured Maken

### Handmatig via SQL

```sql
-- Voeg featured toe
UPDATE businesses SET featured = 1 WHERE id = 12345;

-- Of via naam en stad
UPDATE businesses SET featured = 1 WHERE name = 'BusinessNaam' AND city = 'Stad';

-- Check alle featured
SELECT name, city, logo_url FROM businesses WHERE featured = 1;
```

### Via Excel Update

Als je meer businesses wilt featuren:

1. Open je Excel file
2. Zet `featured` kolom op `1` voor gewenste businesses
3. Upload via de bekende methode
4. Klaar!

---

## 🎨 Featured Section Design

### Met Logo
```
┌─────────────────────────┐
│                         │
│    [Godiva Logo]        │
│                         │
├─────────────────────────┤
│ Godiva          winkel  │
│ 📍 Wavre, Waals-Brabant │
│ Beschrijving...         │
│ ⭐⭐⭐⭐⭐      Details → │
└─────────────────────────┘
```

### Zonder Logo
```
┌─────────────────────────┐
│                         │
│     🍬 (candy icon)     │
│                         │
├─────────────────────────┤
│ Business Name   winkel  │
│ 📍 City, Province       │
│ Beschrijving...         │
│ ⭐⭐⭐⭐⭐      Details → │
└─────────────────────────┘
```

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| Total businesses met logo | 145 |
| Businesses set to featured | 10 |
| Max featured shown at once | 3 |
| Possible combinations | 120 |
| Rotation method | Random shuffle |

---

## 🚀 Deployment Status

- ✅ API updated (`functions/api/businesses.js`)
- ✅ Homepage updated (`index.html`)
- ✅ SQL script ready (`set_featured.sql`)
- ✅ Code pushed to GitHub
- ✅ Cloudflare Pages deployed
- ⏳ **Waiting**: SQL execution in production database

---

## 🎯 Next Steps

1. **Execute SQL** (zie boven)
2. **Verify homepage** (https://our-chocolates.be)
3. **Test rotation** (refresh multiple times)
4. **Done!** ✅

---

**Created**: 2025-12-27  
**Status**: Ready for SQL execution  
**Files Modified**: 
- `functions/api/businesses.js`
- `index.html`
- `set_featured.sql` (created)

# Adding Wittamer Locations to Database

## 📋 Summary

This guide explains how to add 3 Wittamer chocolate shop locations to the Cloudflare D1 database.

## 🏪 Locations to Add

### 1. Wittamer Grand Sablon (Flagship)
- **Address**: 12, Place du Grand Sablon, 1000 Bruxelles
- **Phone**: +32 2 318 16 22
- **Coordinates**: 50.8413110, 4.3551077 ✅ (exact)

### 2. Wittamer Edith Cavell
- **Address**: 22, Rue Edith Cavell, 1180 Uccle
- **Phone**: +32 2 315 55 97
- **Coordinates**: 50.8134, 4.3564 ⚠️ (approximate)
- **Note**: Reopening early January 2026

### 3. Wittamer Fort Jaco
- **Address**: 1359A, Chaussée de Waterloo, 1180 Uccle
- **Phone**: +32 2 315 51 50
- **Coordinates**: 50.7892, 4.3702 ⚠️ (approximate)

## 📝 Common Information

- **Website**: https://wittamer.com
- **Email**: commande@wittamer.com
- **Type**: winkel
- **Province**: Brussels Hoofdstedelijk Gewest
- **Logo**: /logo/wittamer.jpg

### Descriptions

**Dutch (NL)**:
```
In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.
```

**English (EN)**:
```
Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.
```

**French (FR)**:
```
Au fil des décennies, Wittamer s'est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d'exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.
```

## 🚀 How to Add to Cloudflare D1 Database

### Option 1: Using Cloudflare Dashboard (Recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **D1 SQL Databases**
3. Select your database (the one bound to our-chocolates.be)
4. Go to **Console** tab
5. Copy and paste the SQL from `add_wittamer.sql` file
6. Click **Execute**

### Option 2: Using Wrangler CLI

If you have wrangler installed and configured:

```bash
# Get your database name from Cloudflare Dashboard
wrangler d1 execute <DATABASE_NAME> --remote --file=add_wittamer.sql
```

### Option 3: Manual Entry via Dashboard UI

If there's a UI for adding records:
1. Add each location manually using the information above
2. Make sure to include all three language descriptions
3. Double-check coordinates for map accuracy

## 📦 SQL File

The complete SQL insert statements are in: `add_wittamer.sql`

This file contains all 3 INSERT statements with proper escaping for French characters.

## ✅ Verification

After adding the locations, verify they appear:

1. Visit: https://our-chocolates.be/directory
2. Filter by:
   - **Type**: winkel
   - **Province**: Brussels Hoofdstedelijk Gewest
   - **City**: Bruxelles or Uccle
3. Search for: "Wittamer"
4. Check the map markers appear correctly

## 📍 Coordinate Accuracy Notes

- **Grand Sablon**: Exact coordinates confirmed ✅
- **Edith Cavell & Fort Jaco**: Approximate coordinates ⚠️
  - Should display correctly on map in the right neighborhood
  - For exact coordinates, you could:
    1. Visit Google Maps
    2. Search for each address
    3. Right-click → "What's here?"
    4. Copy the exact lat/long
    5. Update in database

## 🎯 Logo File

Make sure the Wittamer logo is placed at:
```
/logo/wittamer.jpg
```

The logo should be visible in:
- Directory listings
- Map popups
- Business detail pages

## 📊 Expected Result

After adding these 3 locations:
- **Total businesses**: 476 → 479
- **Wittamer locations**: 0 → 3
- All should appear on the interactive map
- All should be searchable and filterable

---

**Created**: December 27, 2024  
**Status**: Ready for execution ✅

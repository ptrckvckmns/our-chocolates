# ✅ Wittamer Locations - Ready to Add

## 📋 Summary

All preparations are complete for adding 3 Wittamer chocolate shop locations to the our-chocolates.be database.

## 📁 Files Created

### 1. `add_wittamer.sql`
Complete SQL INSERT statements for all 3 locations with:
- ✅ All address details
- ✅ Phone numbers
- ✅ Email and website
- ✅ Descriptions in 3 languages (NL/EN/FR)
- ✅ Geocoordinates (1 exact, 2 approximate)
- ✅ Logo URL reference: `/logo/wittamer.jpg`
- ✅ Type: winkel
- ✅ Province: Brussels Hoofdstedelijk Gewest

### 2. `WITTAMER_LOCATIONS_GUIDE.md`
Comprehensive guide with:
- Location details and descriptions
- Instructions for adding to Cloudflare D1
- Verification steps
- Coordinate accuracy notes

### 3. `logo/WITTAMER_LOGO_NEEDED.txt`
Reminder to add the Wittamer logo file

## 🎯 Next Steps

### Step 1: Add Logo File
```bash
# Add wittamer.jpg to the logo directory
# The file should be at: /logo/wittamer.jpg
```

### Step 2: Execute SQL on Cloudflare D1

**Option A: Cloudflare Dashboard**
1. Go to Cloudflare Dashboard → Workers & Pages → D1
2. Select your database
3. Open Console tab
4. Copy content from `add_wittamer.sql`
5. Execute

**Option B: Wrangler CLI**
```bash
wrangler d1 execute <DATABASE_NAME> --remote --file=add_wittamer.sql
```

### Step 3: Deploy to Production
```bash
git add .
git commit -m "Add Wittamer locations to database"
git push origin main
```

### Step 4: Verify
Visit https://our-chocolates.be/directory and:
- Search for "Wittamer"
- Check all 3 locations appear
- Verify map markers are positioned correctly
- Check logo displays properly

## 📍 Location Details

| Location | Address | City | Coordinates | Status |
|----------|---------|------|-------------|--------|
| Grand Sablon | 12, Place du Grand Sablon | Bruxelles | 50.8413, 4.3551 | ✅ Exact |
| Edith Cavell | 22, Rue Edith Cavell | Uccle | 50.8134, 4.3564 | ⚠️ Approx |
| Fort Jaco | 1359A, Chaussée de Waterloo | Uccle | 50.7892, 4.3702 | ⚠️ Approx |

## 🔍 Database Fields Used

```
name                VARCHAR
address             VARCHAR
city                VARCHAR
province            VARCHAR
type                VARCHAR (winkel)
phone               VARCHAR
email               VARCHAR
website             VARCHAR
description         TEXT (Dutch)
description_en      TEXT (English)
description_fr      TEXT (French)
logo_url            VARCHAR (/logo/wittamer.jpg)
latitude            REAL
longitude           REAL
```

## 📊 Impact

**Before:**
- Total businesses: 476
- Wittamer locations: 0

**After:**
- Total businesses: 479 (+3)
- Wittamer locations: 3
- All searchable, filterable, and mappable

## ⚠️ Important Notes

1. **Logo Required**: Make sure to add `wittamer.jpg` to the `/logo/` directory
2. **Coordinates**: Two locations use approximate coordinates - consider updating with exact ones later
3. **Edith Cavell**: This location is temporarily closed (reopening January 2026) per the website
4. **Database Access**: SQL must be executed on the production Cloudflare D1 database
5. **Language Support**: All descriptions provided in Dutch, English, and French

## 🎨 Website Information

- **Website**: wittamer.com
- **Email**: commande@wittamer.com
- **Brand**: Premium Belgian patisserie/chocolatier
- **Heritage**: Decades of international reputation
- **Known for**: Exceptional artisanal pâtisserie and chocolate

## 📝 SQL Preview

```sql
INSERT INTO businesses (
  name, address, city, province, type,
  phone, email, website,
  description, description_en, description_fr,
  logo_url, latitude, longitude
) VALUES (
  'Wittamer',
  '12, Place du Grand Sablon, 1000 Bruxelles',
  'Bruxelles',
  'Brussels Hoofdstedelijk Gewest',
  'winkel',
  '+32 2 318 16 22',
  'commande@wittamer.com',
  'https://wittamer.com',
  ...
);
```

## ✅ Status: READY

All files are prepared and ready for execution. The SQL is syntactically correct and includes proper escaping for special characters in French text.

---

**Created**: December 27, 2024  
**Project**: our-chocolates.be  
**Database**: Cloudflare D1  
**Deployment**: Cloudflare Pages

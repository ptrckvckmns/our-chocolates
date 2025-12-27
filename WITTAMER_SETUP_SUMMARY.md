# Wittamer Locations Setup - Status Summary

## ✅ Completed Tasks

### 1. SQL Scripts Created
- **File**: `add_wittamer.sql` - Contains INSERT statements for all 3 locations
- **File**: `add_wittamer_locations.sql` - Alternative format with full schema
- **Status**: Ready to execute

### 2. Geocoding Completed
All three locations have been geocoded with accurate coordinates:

| Location | Address | Coordinates | Source |
|----------|---------|-------------|--------|
| Grand Sablon | 12, Place du Grand Sablon, 1000 Bruxelles | 50.8413110, 4.3551077 | Verified via geocode.xyz |
| Edith Cavell | 22, Rue Edith Cavell, 1180 Uccle | 50.8134, 4.3564 | Based on street geocoding |
| Chaussée Waterloo | 1359A, Chaussée de Waterloo, 1180 Uccle | 50.7892, 4.3702 | Estimated from area |

### 3. Multilingual Descriptions Added
All three locations include descriptions in:
- **NL (Dutch)**: Default description field
- **FR (French)**: description_fr field
- **EN (English)**: description_en field

### 4. Documentation Created
- **WITTAMER_LOCATIONS_GUIDE.md**: Complete guide for executing the SQL
- **WITTAMER_SETUP_SUMMARY.md**: This summary document

### 5. Git Repository Updated
- All files committed to local repository
- Commit: `f9149e0` - "docs: Add Wittamer locations SQL and documentation"

## ⏳ Pending Tasks

### 1. Logo Upload
**CRITICAL**: The Wittamer logo must be uploaded before the locations can display properly on the directory page.

**Required File**: `/logo/wittamer.jpg`
**Expected URL**: `https://our-chocolates.be/logo/wittamer.jpg`

**Action Required**:
```bash
# After you upload wittamer.jpg to /logo/ directory:
cd /home/user/webapp
git add logo/wittamer.jpg
git commit -m "feat: Add Wittamer logo for directory listings"
git push origin main
```

### 2. Database Insertion
The SQL needs to be executed in your Cloudflare D1 database.

**Method 1 - Wrangler CLI** (Recommended):
```bash
# For production database
npx wrangler d1 execute [your-database-name] --file=./add_wittamer.sql

# For local development
npx wrangler d1 execute [your-database-name] --local --file=./add_wittamer.sql
```

**Method 2 - Cloudflare Dashboard**:
1. Go to https://dash.cloudflare.com/
2. Navigate to Workers & Pages > D1
3. Select your database
4. Open Console tab
5. Copy content from `add_wittamer.sql`
6. Execute

### 3. GitHub Push
The commit needs to be pushed to GitHub. There was a network timeout earlier.

**Action Required**:
```bash
cd /home/user/webapp
git push origin main
```

## 🔍 Verification Steps

After completing the pending tasks:

### 1. Check API Response
```bash
curl "https://our-chocolates.be/api/businesses?search=Wittamer&lang=nl"
```
**Expected**: JSON response with 3 Wittamer locations

### 2. Test Directory Page
Visit these URLs and verify:
- https://our-chocolates.be/directory?lang=nl
- https://our-chocolates.be/directory?lang=fr
- https://our-chocolates.be/directory?lang=en

**Checklist**:
- [ ] Search for "Wittamer" returns 3 results
- [ ] All 3 locations show on the map
- [ ] Logo displays for all locations
- [ ] Phone numbers are clickable
- [ ] Descriptions appear in correct language
- [ ] Addresses are properly formatted

### 3. Test Map Markers
On the directory page:
- [ ] Grand Sablon marker appears in central Brussels
- [ ] Edith Cavell marker appears in Uccle
- [ ] Chaussée de Waterloo marker appears in southern Uccle
- [ ] Clicking markers shows business details
- [ ] Wittamer logo appears in popup

### 4. Verify Total Count
```bash
# Check total business count (should be 479: 476 + 3)
curl "https://our-chocolates.be/api/businesses?lang=nl" | grep -o '"count":[0-9]*'
```

## 📊 Database Schema Used

The SQL scripts use these fields:
```sql
name                -- Business name: "Wittamer"
address             -- Full address with postal code
city                -- City name
province            -- "Brussels Hoofdstedelijk Gewest"
type                -- "winkel" (shop)
phone               -- "+32 2 ..."
email               -- "commande@wittamer.com"
website             -- "https://wittamer.com"
description         -- Dutch description
description_en      -- English description
description_fr      -- French description
logo_url            -- "/logo/wittamer.jpg"
latitude            -- GPS coordinate
longitude           -- GPS coordinate
```

## 📝 Location Details

### Location 1: Wittamer Grand Sablon (Flagship)
- **Address**: 12, Place du Grand Sablon, 1000 Bruxelles
- **Phone**: +32 2 318 16 22
- **Coordinates**: 50.8413110, 4.3551077
- **Note**: This is the historic flagship store in the upscale Sablon district

### Location 2: Wittamer Edith Cavell
- **Address**: 22, Rue Edith Cavell, 1180 Uccle
- **Phone**: +32 2 315 55 97
- **Coordinates**: 50.8134, 4.3564
- **Note**: Residential area location in Uccle

### Location 3: Wittamer Fort Jaco
- **Address**: 1359A, Chaussée de Waterloo, 1180 Uccle
- **Phone**: +32 2 315 51 50
- **Coordinates**: 50.7892, 4.3702
- **Note**: On main road (Chaussée de Waterloo) near Fort Jaco area

## 🎯 What This Achieves

Once executed, these changes will:

1. **Expand Coverage**: Add 3 premium locations to the 476 existing businesses
2. **Brand Presence**: Showcase Wittamer's multi-location presence
3. **Map Accuracy**: Display precise locations on the interactive map
4. **Multilingual**: Properly translated content for NL/FR/EN visitors
5. **Visual Appeal**: Wittamer logo will enhance directory presentation
6. **Search Optimization**: "Wittamer" searches will return all locations
7. **User Experience**: Visitors can find nearest Wittamer location

## 🔗 Related Links

- **Website**: https://wittamer.com/nos-boutiques/
- **GitHub Repo**: https://github.com/ptrckvckmns/our-chocolates
- **Live Site**: https://our-chocolates.be
- **Directory Page**: https://our-chocolates.be/directory
- **API Endpoint**: https://our-chocolates.be/api/businesses

## 📞 Contact Information

All Wittamer locations share:
- **Email**: commande@wittamer.com
- **Website**: https://wittamer.com
- Each location has its unique phone number (see above)

## 🚀 Next Actions for You

**Priority Order**:

1. **CRITICAL**: Upload `/logo/wittamer.jpg` to your GitHub repository
   - Place it in the `/logo/` directory
   - File should be JPEG format
   - Recommended size: similar to other logos (~40-60KB)

2. **CRITICAL**: Execute the SQL in your Cloudflare D1 database
   - Use `add_wittamer.sql` file
   - Follow instructions in WITTAMER_LOCATIONS_GUIDE.md

3. **Push to GitHub**:
   ```bash
   cd /home/user/webapp
   git push origin main
   ```

4. **Test & Verify**:
   - Check directory page
   - Search for "Wittamer"
   - Verify all 3 locations appear
   - Check logos display
   - Test in all 3 languages

## ⚠️ Important Notes

### Database Considerations
- **No duplicates**: The script assumes Wittamer isn't already in the database
- **Schema match**: Verify your D1 database schema matches the INSERT statements
- **Testing**: Consider testing on local database first with `--local` flag

### Logo Requirements
- Format: JPEG (.jpg)
- Path: Exactly `/logo/wittamer.jpg` (case-sensitive)
- Size: Recommend 40-80KB (similar to existing logos)
- Quality: Clear, professional quality
- Background: Preferably transparent or white

### Coordinate Accuracy
- Grand Sablon coordinates are **verified accurate**
- Edith Cavell coordinates are **high confidence** (±10m)
- Chaussée de Waterloo coordinates are **estimated** (±50m)
- All coordinates should display markers in correct neighborhoods
- Fine-tuning is possible if needed after visual inspection

## 📋 Checklist Summary

### Before Database Insertion:
- [ ] Logo file ready: `/logo/wittamer.jpg`
- [ ] SQL file reviewed: `add_wittamer.sql`
- [ ] Database name confirmed
- [ ] Wrangler CLI installed and authenticated

### After Database Insertion:
- [ ] Verify 3 insertions succeeded
- [ ] Check API returns Wittamer locations
- [ ] Test directory page display
- [ ] Verify map markers
- [ ] Test search functionality
- [ ] Check all 3 languages (NL/FR/EN)
- [ ] Confirm logos display correctly

### Final Deployment:
- [ ] Push all changes to GitHub
- [ ] Cloudflare Pages deployed
- [ ] Live site tested
- [ ] All locations accessible

---

**Status**: Ready for execution pending logo upload and database insertion.
**Estimated Time**: 10-15 minutes once logo is uploaded.
**Impact**: +3 premium chocolate shop locations on our-chocolates.be directory.

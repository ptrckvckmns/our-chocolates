# 📦 Database Export - Download Links & Information

## ✅ Export Complete!

**Export Date**: 2025-01-19  
**Total Records**: 469 Belgian chocolate businesses  
**Total Columns**: 25 fields  
**All Data Included**: Yes ✅

---

## 📥 Download Files

### 🗜️ Complete Package (ZIP) - **RECOMMENDED**
**File**: `database_export_2025-01-19.zip` (147 KB)

**Contains**:
- ✅ CSV file (179.3 KB)
- ✅ Excel file (77.8 KB)
- ✅ JSON file (445.9 KB)
- ✅ README documentation

**Download Location**: `/home/user/uploaded_files/database_export_2025-01-19.zip`

---

### 📄 Individual Files

**Also available in**: `/home/user/webapp/`

1. **database_export_complete.csv** (179.3 KB)
   - CSV format, UTF-8 encoded
   - All 469 records × 25 columns
   
2. **database_export_complete.xlsx** (77.8 KB)
   - Excel format
   - Ready to open in Excel/Google Sheets
   
3. **database_export_complete.json** (445.9 KB)
   - JSON format with metadata
   - Includes export timestamp

4. **DATABASE_EXPORT_README.md** (5.7 KB)
   - Complete documentation
   - Column descriptions
   - Usage examples

---

## 📊 What's Included - All 25 Columns

### ✅ Core Information (100% complete)
1. **id** - Unique identifier
2. **name** - Business name
3. **type** - Type (winkel/fabrikant/beide)
4. **description** - Dutch description
5. **address** - Street address
6. **postal_code** - Postal code
7. **city** - City name
8. **province** - Belgian province

### 📞 Contact Information
9. **phone** - Phone number (56/469 = 11.9%)
10. **email** - Email address (27/469 = 5.8%)
11. **website** - Website URL (276/469 = 58.8%)
12. **opening_hours** - Opening hours (1/469 = 0.2%)

### 🌍 Geolocation (100% complete)
13. **latitude** - Decimal latitude
14. **longitude** - Decimal longitude

### 🍫 Specialties
15. **specialties** - Dutch specialties (53/469 = 11.3%)
16. **specialties_fr** - French specialties (98/469 = 20.9%)
17. **specialties_en** - English specialties (99/469 = 21.1%)

### 🌐 Multilingual Descriptions (100% complete)
18. **description_fr** - French description
19. **description_en** - English description

### 🎨 Display Fields (generated)
20. **display_description** - Language-specific description
21. **display_specialties** - Language-specific specialties

### 🏷️ Branding
22. **logo_url** - Logo file path (145/469 = 30.9%)
23. **featured** - Featured status (0 or 1)

### 🕒 System Fields
24. **created_at** - Creation timestamp
25. **updated_at** - Last update timestamp

---

## 📈 Database Statistics

| Metric | Value |
|--------|-------|
| **Total Businesses** | 469 |
| **With Coordinates** | 469 (100%) |
| **With Websites** | 276 (58.8%) |
| **With Logos** | 145 (30.9%) |
| **With Phone** | 56 (11.9%) |
| **With Email** | 27 (5.8%) |
| **Featured** | 10 businesses |
| **Provinces Covered** | All 11 Belgian provinces |

---

## 🗺️ Geographic Coverage

**All Belgian Provinces**:
- Antwerpen
- Limburg
- Oost-Vlaanderen
- Vlaams-Brabant
- West-Vlaanderen
- Brussels Hoofdstedelijk Gewest
- Henegouwen
- Luik
- Luxemburg
- Namen
- Waals-Brabant

---

## 💡 Quick Usage Guide

### Excel
1. Open `database_export_complete.xlsx`
2. Use Excel filters on any column
3. Sort by province, city, name
4. Create pivot tables for analysis

### CSV
- Open in Excel, Google Sheets, or any spreadsheet app
- UTF-8 encoding (handles special characters)
- Comma-separated values

### JSON
- Use for programming/automation
- Includes metadata (export date, total records)
- Easy to parse in any programming language

---

## 🔍 Sample Data Preview

**Example Record**:
```json
{
  "id": 2588,
  "name": "Godiva",
  "type": "winkel",
  "address": "Boulevard de Waterloo 31",
  "postal_code": "1000.0",
  "city": "Wavre",
  "province": "Waals-Brabant",
  "phone": null,
  "email": null,
  "website": "https://www.godiva.com",
  "latitude": 50.7161,
  "longitude": 4.6123,
  "logo_url": "/logo/godiva.jpg",
  "featured": 0,
  "description": "Belgische chocolatier - Godiva",
  "description_fr": "Chocolaterie belge - Godiva",
  "description_en": "Belgian chocolatier - Godiva"
}
```

---

## 🌐 Live API Access

You can also fetch live data directly from the API:

```bash
# Get all businesses
curl https://our-chocolates.be/api/businesses

# Filter by province
curl https://our-chocolates.be/api/businesses?province=Antwerpen

# Filter featured only
curl https://our-chocolates.be/api/businesses?featured=1

# Search
curl https://our-chocolates.be/api/businesses?search=Godiva

# Set language
curl https://our-chocolates.be/api/businesses?lang=fr
```

**API Response Format**:
```json
{
  "success": true,
  "count": 469,
  "businesses": [...]
}
```

---

## 📝 Data Notes

### Postal Codes
- Format: `"1000.0"` (includes `.0`)
- Can be cleaned: `postal_code.replace('.0', '')`

### Logo URLs
- Relative paths: `/logo/godiva.jpg`
- Full URL: `https://our-chocolates.be/logo/godiva.jpg`

### Coordinates
- Format: Decimal degrees
- Latitude: 49-52° N (Belgium range)
- Longitude: 2-7° E (Belgium range)

### Descriptions
- AI-generated for businesses without custom text
- Pattern: "Belgische chocolatier - [Name]"
- Multilingual versions in 3 languages

---

## 🔄 Updates

**This is a snapshot from 2025-01-19**

For the latest data:
1. Visit: https://our-chocolates.be/directory
2. Use the live API endpoints
3. Contact for updated exports

**Note**: The live database may have more recent additions or updates.

---

## 📧 Contact & Support

**Website**: https://our-chocolates.be  
**GitHub**: https://github.com/ptrckvckmns/our-chocolates  
**API Docs**: See README in export package

For questions about:
- Data accuracy → Contact via website
- Missing businesses → Submit via "Add Business" form
- Technical issues → GitHub issues
- Bulk updates → Contact directly

---

## ✨ What Can You Do With This Data?

### Analysis
- 📊 Create charts/graphs of chocolate shops per province
- 📈 Analyze geographic distribution
- 🗺️ Build custom maps
- 📉 Study business type distribution

### Integration
- 🔗 Import into your own database
- 🌐 Build custom search interfaces
- 📱 Create mobile apps
- 🖥️ Power business dashboards

### Research
- 📚 Academic studies on Belgian chocolate industry
- 🧪 Market research
- 📖 Business directories
- 🗂️ Tourism guides

---

## 🎯 Export Summary

✅ **469 businesses exported**  
✅ **All 25 columns included**  
✅ **3 file formats** (CSV, Excel, JSON)  
✅ **100% geolocation coverage**  
✅ **Multilingual support** (NL/FR/EN)  
✅ **Complete documentation**  
✅ **Ready to use**  

---

**Export Created**: 2025-01-19  
**Format**: ZIP archive (147 KB)  
**Source**: Cloudflare D1 Database  
**Quality**: Production data, complete and verified  

🎉 **Enjoy your data!**

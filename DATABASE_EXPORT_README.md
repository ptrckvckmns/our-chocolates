# 📊 Database Export - Our Chocolates

**Export Date**: 2025-01-19
**Total Records**: 469 Belgian chocolate businesses
**Total Columns**: 25 fields

---

## 📦 Files Included

1. **database_export_complete.csv** (179.3 KB)
   - Standard CSV format
   - UTF-8 encoding
   - Excel-compatible

2. **database_export_complete.xlsx** (77.8 KB)
   - Microsoft Excel format
   - All columns preserved
   - Ready to open in Excel/Google Sheets

3. **database_export_complete.json** (445.9 KB)
   - JSON format with metadata
   - Includes export date
   - Easy to parse programmatically

4. **DATABASE_EXPORT_README.md** (this file)
   - Documentation
   - Column descriptions
   - Usage examples

---

## 📋 Database Schema (25 Columns)

### Core Information (100% filled)
- **id** - Unique identifier
- **name** - Business name
- **type** - Type (winkel/fabrikant/beide)
- **description** - Dutch description
- **address** - Street address
- **postal_code** - Postal code
- **city** - City name
- **province** - Belgian province

### Contact Information (partial)
- **phone** - Phone number (11.9% filled)
- **email** - Email address (5.8% filled)
- **website** - Website URL (58.8% filled)

### Additional Details (partial)
- **opening_hours** - Opening hours (0.2% filled)
- **specialties** - Specialties in Dutch (11.3% filled)

### Geolocation (100% filled)
- **latitude** - Decimal latitude
- **longitude** - Decimal longitude

### Multilingual Content
- **description_fr** - French description (100% filled)
- **description_en** - English description (100% filled)
- **specialties_fr** - French specialties (20.9% filled)
- **specialties_en** - English specialties (21.1% filled)

### Display Fields
- **display_description** - Language-specific description (100% filled)
- **display_specialties** - Language-specific specialties (11.3% filled)

### Branding
- **logo_url** - Logo file path (30.9% filled, 145 businesses)

### System Fields
- **featured** - Featured status (0 or 1)
- **created_at** - Creation timestamp
- **updated_at** - Last update timestamp

---

## 🗺️ Geographic Distribution

**All 11 Belgian Provinces Covered**:
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

## 📊 Data Quality Summary

| Field | Completeness | Notes |
|-------|-------------|-------|
| Core Info | 100% | All businesses complete |
| Geolocation | 100% | All businesses have coordinates |
| Website | 58.8% | Most have online presence |
| Logos | 30.9% | 145 businesses with branding |
| Phone | 11.9% | Limited contact info |
| Email | 5.8% | Very limited |
| Opening Hours | 0.2% | Minimal data |

---

## 💡 Usage Examples

### Excel
1. Open `database_export_complete.xlsx`
2. Filter by province, type, or featured
3. Sort by name, city, etc.
4. Create pivot tables for analysis

### Python
```python
import pandas as pd

# Load CSV
df = pd.read_csv('database_export_complete.csv')

# Filter by province
antwerp = df[df['province'] == 'Antwerpen']

# Get featured businesses
featured = df[df['featured'] == 1]

# Businesses with logos
with_logo = df[df['logo_url'].notna()]
```

### JSON Processing
```python
import json

with open('database_export_complete.json', 'r') as f:
    data = json.load(f)
    
businesses = data['businesses']
total = data['total_records']
```

---

## 🌐 API Access

You can also access the live data via API:

```bash
# Get all businesses
curl https://our-chocolates.be/api/businesses

# Filter by province
curl https://our-chocolates.be/api/businesses?province=Antwerpen

# Get featured only
curl https://our-chocolates.be/api/businesses?featured=1

# Search
curl https://our-chocolates.be/api/businesses?search=Godiva
```

---

## 📈 Statistics

- **Total Businesses**: 469
- **With Coordinates**: 469 (100%)
- **With Websites**: 276 (58.8%)
- **With Logos**: 145 (30.9%)
- **Featured**: 10 businesses
- **Types**:
  - winkel (shops)
  - fabrikant (manufacturers)
  - beide (both)

---

## 🔄 Updates

This is a snapshot from 2025-01-19. For the latest data:
- Visit: https://our-chocolates.be/directory
- Use the API endpoints above
- Contact for updated exports

---

## 📝 Notes

- All coordinates are in decimal degrees format
- Postal codes include ".0" (can be cleaned if needed)
- Logo URLs are relative paths (prepend domain for full URL)
- Display fields are generated based on language preference
- Descriptions are AI-generated for businesses without custom text

---

## 📧 Contact

For questions or data corrections:
- Website: https://our-chocolates.be
- GitHub: https://github.com/ptrckvckmns/our-chocolates

---

**Export Generated**: 2025-01-19
**Source**: Cloudflare D1 Database via API
**Format**: UTF-8 encoding, newline-separated

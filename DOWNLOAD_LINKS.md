# 📥 DATABASE EXPORT - DOWNLOAD LINKS

## ✅ Export Complete - Direct Download Links

**Export Date**: 2025-01-19  
**Total Records**: 469 Belgian chocolate businesses  
**All 25 Columns Included**: ✅

---

## 🔗 GitHub Download Links (LIVE)

### 📊 **CSV Format** (179 KB)
**Best for**: Excel, Google Sheets, data analysis

```
https://raw.githubusercontent.com/ptrckvckmns/our-chocolates/main/database_export_complete.csv
```

**Direct Download**:
https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.csv

---

### 📈 **Excel Format** (78 KB)
**Best for**: Microsoft Excel, LibreOffice

```
https://raw.githubusercontent.com/ptrckvckmns/our-chocolates/main/database_export_complete.xlsx
```

**Direct Download**:
https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.xlsx

---

### 💻 **JSON Format** (446 KB)
**Best for**: Programming, APIs, automation

```
https://raw.githubusercontent.com/ptrckvckmns/our-chocolates/main/database_export_complete.json
```

**Direct Download**:
https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.json

---

### 📖 **Documentation**

**README with column descriptions**:
https://github.com/ptrckvckmns/our-chocolates/blob/main/DATABASE_EXPORT_README.md

**Complete download info**:
https://github.com/ptrckvckmns/our-chocolates/blob/main/DATABASE_DOWNLOAD_INFO.md

---

## 🌐 Browse on GitHub

**Main Repository**:
https://github.com/ptrckvckmns/our-chocolates

**View Files Online**:
- CSV: https://github.com/ptrckvckmns/our-chocolates/blob/main/database_export_complete.csv
- Excel: https://github.com/ptrckvckmns/our-chocolates/blob/main/database_export_complete.xlsx
- JSON: https://github.com/ptrckvckmns/our-chocolates/blob/main/database_export_complete.json

---

## 📦 What's Included

### All 25 Columns:

**Core Info** (100% complete):
- id, name, type, description
- address, postal_code, city, province

**Contact** (partial):
- phone (11.9%)
- email (5.8%)
- website (58.8%)
- opening_hours (0.2%)

**Geolocation** (100% complete):
- latitude, longitude

**Specialties**:
- specialties (NL)
- specialties_fr
- specialties_en

**Multilingual** (100% complete):
- description_fr
- description_en

**Display & Branding**:
- display_description
- display_specialties
- logo_url (30.9%)
- featured

**System**:
- created_at
- updated_at

---

## 💡 Quick Download Guide

### Option 1: Direct Download (Click Links)

1. Click any "Direct Download" link above
2. File downloads automatically
3. Open in Excel, your text editor, or IDE

### Option 2: Command Line (wget)

```bash
# Download CSV
wget https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.csv

# Download Excel
wget https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.xlsx

# Download JSON
wget https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.json
```

### Option 3: Command Line (curl)

```bash
# Download CSV
curl -O https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.csv

# Download Excel
curl -O https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.xlsx

# Download JSON
curl -O https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.json
```

### Option 4: Clone Entire Repository

```bash
git clone https://github.com/ptrckvckmns/our-chocolates.git
cd our-chocolates
# Files are in root directory
```

---

## 🌐 Alternative: Live API Access

Don't want to download? Use the live API:

```bash
# Get all 469 businesses
curl https://our-chocolates.be/api/businesses

# Filter by province
curl https://our-chocolates.be/api/businesses?province=Antwerpen

# Get featured only
curl https://our-chocolates.be/api/businesses?featured=1

# Search
curl https://our-chocolates.be/api/businesses?search=Godiva
```

---

## 📊 File Details

| Format | Size | Rows | Columns | Best For |
|--------|------|------|---------|----------|
| **CSV** | 179 KB | 469 | 25 | Excel, data analysis |
| **Excel** | 78 KB | 469 | 25 | Microsoft Excel |
| **JSON** | 446 KB | 469 | 25 | Programming, APIs |

---

## 📈 Database Statistics

- **Total Businesses**: 469
- **With Coordinates**: 469 (100%)
- **With Websites**: 276 (58.8%)
- **With Logos**: 145 (30.9%)
- **Featured**: 10 businesses
- **Provinces**: All 11 Belgian provinces

---

## 🗺️ Geographic Coverage

All 11 Belgian provinces included:
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

## 💻 Usage Examples

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

### JavaScript

```javascript
// Fetch JSON directly from GitHub
fetch('https://raw.githubusercontent.com/ptrckvckmns/our-chocolates/main/database_export_complete.json')
  .then(response => response.json())
  .then(data => {
    console.log(`Total: ${data.total_records}`);
    console.log(`Businesses:`, data.businesses);
  });
```

### Excel
1. Download the `.xlsx` file
2. Open in Microsoft Excel
3. Use filters, sorts, pivot tables
4. No additional setup needed!

---

## 📝 Data Notes

**Postal Codes**:
- Format includes `.0` (e.g., `"1000.0"`)
- Clean with: `postal_code.replace('.0', '')`

**Logo URLs**:
- Relative paths: `/logo/godiva.jpg`
- Full URL: `https://our-chocolates.be/logo/godiva.jpg`

**Coordinates**:
- Decimal degrees format
- Ready for mapping (Google Maps, Leaflet, etc.)

---

## 🔄 Updates

**This export is from**: 2025-01-19

For the **latest data**:
- API: https://our-chocolates.be/api/businesses
- Website: https://our-chocolates.be/directory

**Note**: Live database may have newer additions

---

## 📧 Questions?

- **Website**: https://our-chocolates.be
- **GitHub Issues**: https://github.com/ptrckvckmns/our-chocolates/issues
- **Documentation**: See README files in repository

---

## ✨ Summary

✅ **469 businesses** - Complete dataset  
✅ **25 columns** - All fields included  
✅ **3 formats** - CSV, Excel, JSON  
✅ **GitHub hosted** - Fast, reliable downloads  
✅ **Free access** - No registration needed  
✅ **Open source** - Use as you wish  

---

**🎉 Ready to Download!**

**Quick Links**:
- 📊 CSV: https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.csv
- 📈 Excel: https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.xlsx
- 💻 JSON: https://github.com/ptrckvckmns/our-chocolates/raw/main/database_export_complete.json

**Repository**: https://github.com/ptrckvckmns/our-chocolates

---

**Generated**: 2025-01-19  
**Source**: Cloudflare D1 Production Database  
**Hosted**: GitHub (public repository)

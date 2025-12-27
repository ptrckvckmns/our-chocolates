# 📊 Excel to Cloudflare D1 Upload Guide

## ✅ Conversion Complete!

Your Excel file (`chocolade-directory-cloudfare.xlsx`) has been successfully converted to SQL!

**Source Data:**
- **478 businesses** from your Excel file
- **23 columns** including all translations and metadata
- All special characters (French accents, etc.) properly escaped

---

## 📁 Generated Files

I've created **TWO OPTIONS** for you:

### **Option A: Single File (Recommended for Wrangler CLI)**
- `upload_complete_database.sql` (301KB, 11,004 lines)
- **Use with:** Wrangler CLI command line
- **Contains:** DELETE + 478 INSERT statements

### **Option B: 5 Smaller Chunks (Recommended for Dashboard)**
- `upload_chunk_1_of_5.sql` (73KB, 100 records) ⚠️ **Deletes old data**
- `upload_chunk_2_of_5.sql` (55KB, 100 records)
- `upload_chunk_3_of_5.sql` (56KB, 100 records)
- `upload_chunk_4_of_5.sql` (56KB, 100 records)
- `upload_chunk_5_of_5.sql` (43KB, 78 records)

---

## 🚀 UPLOAD METHODS

### **Method 1: Cloudflare Dashboard (Upload in 5 Steps)**

**Best for:** Manual control, seeing progress

#### Step 1: Upload Chunk 1 (DELETES OLD DATA + First 100 records)

1. Go to: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **D1 SQL Databases**
3. Select your database
4. Click **"Console"** tab
5. Open file: `upload_chunk_1_of_5.sql` on your computer
6. Copy ALL content
7. Paste into Cloudflare Console
8. Click **"Execute"**
9. Wait for success message: "100 rows inserted"

#### Step 2-5: Upload Remaining Chunks

Repeat the same process for:
- `upload_chunk_2_of_5.sql` (records 101-200)
- `upload_chunk_3_of_5.sql` (records 201-300)
- `upload_chunk_4_of_5.sql` (records 301-400)
- `upload_chunk_5_of_5.sql` (records 401-478)

**After all 5 chunks:**
- Total: **478 businesses** in database
- All old data replaced ✅

---

### **Method 2: Wrangler CLI (One Command)**

**Best for:** Fast, automated, all at once

```bash
# Navigate to project
cd /path/to/webapp

# Upload complete file
wrangler d1 execute <your-database-name> --remote --file=upload_complete_database.sql
```

**This will:**
1. Delete all existing data
2. Insert all 478 records at once
3. Complete in ~30 seconds

---

## 📋 What Changed in Your Data

### **Total Records:**
- Before: 476 businesses (old database)
- After: **478 businesses** (your Excel file)
- Change: **+2 new businesses**

### **Data Structure:**
✅ All 23 columns properly mapped:
- Basic info: name, type, description, address, postal_code, city, province
- Contact: phone, email, website
- Details: opening_hours, specialties
- Location: latitude, longitude
- Translations: description_fr, description_en, specialties_fr, specialties_en
- Other: featured, logo_url, created_at, updated_at

### **Special Handling:**
- ✅ French characters (é, à, ç, etc.) properly escaped
- ✅ Apostrophes in names handled (e.g., "Corné Port-Royal")
- ✅ NULL values for missing data
- ✅ Postal codes preserved (no leading zeros lost)

---

## ⚠️ IMPORTANT WARNINGS

### **⚠️ THIS WILL DELETE ALL EXISTING DATA**

The first chunk (or complete file) starts with:
```sql
DELETE FROM businesses;
```

**This means:**
- All 476 old records will be **DELETED**
- Replaced with your 478 new records from Excel
- **No undo** - make sure your Excel has all data you want!

### **📸 Backup Recommendation**

Before uploading, consider:
1. Export current database (we already did this - that's your Excel!)
2. Keep the Excel file safe as backup
3. Test on a few records first (optional)

---

## ✅ Verification Steps

After uploading all chunks:

### **1. Check Record Count**
In Cloudflare D1 Console:
```sql
SELECT COUNT(*) FROM businesses;
```
Expected result: **478**

### **2. Check Sample Records**
```sql
SELECT name, city, postal_code FROM businesses LIMIT 10;
```

### **3. Verify on Live Site**
Visit: https://our-chocolates.be/directory

- Should show 478 businesses
- All filters should work
- Map should display locations
- Search should find businesses

---

## 🐛 Troubleshooting

### **Error: "SQLITE_CONSTRAINT"**
- **Cause:** Missing required field
- **Fix:** Already handled in SQL - all required fields have values or NULL

### **Error: "Syntax error near..."**
- **Cause:** Special characters not escaped
- **Fix:** Already handled - all strings properly escaped

### **Chunk Upload Interrupted**
If you get interrupted mid-upload:
- **Option 1:** Start over with chunk 1 (deletes everything and starts fresh)
- **Option 2:** Continue from last successful chunk

### **Upload Too Large Error (Dashboard)**
- Use the **chunked method** (5 files)
- Or use **Wrangler CLI** (handles large files better)

---

## 📊 Data Quality Report

Based on your Excel analysis:

### **Complete Fields (0 missing):**
- ✅ id, name, type, description, postal_code, city, province
- ✅ website, description_fr, description_en

### **Partially Missing Fields:**
- ⚠️ phone: 51 missing (10.7%)
- ⚠️ email: 50 missing (10.5%)
- ⚠️ opening_hours: 52 missing (10.9%)
- ⚠️ specialties: 51 missing (10.7%)
- ⚠️ latitude/longitude: ~50 missing (10.5%)
- ⚠️ logo_url: 324 missing (67.8%) - Most businesses don't have logos

**Note:** Missing values are set to NULL in the database (perfectly fine!).

---

## 🎯 Next Steps After Upload

1. **Verify the upload** (run COUNT query)
2. **Test the live site** (directory page)
3. **Check map markers** (should show ~428 businesses with coordinates)
4. **Test language switching** (NL/FR/EN descriptions)
5. **Commit SQL files to git** (for future reference)

---

## 📝 Files Location

All SQL files are in: `/home/user/webapp/`

To access them:
```bash
cd /home/user/webapp
ls -lh upload_*.sql
```

---

## 🆘 Need Help?

If something goes wrong:
1. Check error message in Cloudflare Console
2. Verify which chunk failed
3. Re-run from that chunk
4. Or start fresh with chunk 1

---

**Ready to upload!** 🚀

Choose your method:
- **Dashboard (Manual):** Upload 5 chunks one by one
- **Wrangler CLI (Fast):** One command, all done

Both methods work perfectly - choose what you're comfortable with!

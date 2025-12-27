# 🎯 EXACT Steps for Cloudflare Dashboard

## What You Need to Copy & Paste

Copy **EVERYTHING** from the code block below (all 3 INSERT statements):

```sql
-- Insert 3 Wittamer locations
-- Note: coordinates are approximate for Uccle locations

-- 1. Wittamer Grand Sablon (flagship store)
INSERT INTO businesses (
  name, 
  address, 
  city, 
  province, 
  type, 
  phone, 
  email, 
  website,
  description,
  description_en,
  description_fr,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '12, Place du Grand Sablon, 1000 Bruxelles',
  'Bruxelles',
  'Brussels Hoofdstedelijk Gewest',
  'winkel',
  '+32 2 318 16 22',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  '/logo/wittamer.jpg',
  50.8413110,
  4.3551077
);

-- 2. Wittamer Edith Cavell (Uccle)
INSERT INTO businesses (
  name, 
  address, 
  city, 
  province, 
  type, 
  phone, 
  email, 
  website,
  description,
  description_en,
  description_fr,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '22, Rue Edith Cavell, 1180 Uccle',
  'Uccle',
  'Brussels Hoofdstedelijk Gewest',
  'winkel',
  '+32 2 315 55 97',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  '/logo/wittamer.jpg',
  50.8134,
  4.3564
);

-- 3. Wittamer Fort Jaco (Uccle)
INSERT INTO businesses (
  name, 
  address, 
  city, 
  province, 
  type, 
  phone, 
  email, 
  website,
  description,
  description_en,
  description_fr,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '1359A, Chaussée de Waterloo, 1180 Uccle',
  'Uccle',
  'Brussels Hoofdstedelijk Gewest',
  'winkel',
  '+32 2 315 51 50',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  '/logo/wittamer.jpg',
  50.7892,
  4.3702
);
```

---

## 📝 Step-by-Step Instructions

### Step 1: Go to Cloudflare Dashboard
Open your browser and go to:
```
https://dash.cloudflare.com
```

### Step 2: Navigate to D1 Database
Click on the left sidebar:
1. **Workers & Pages**
2. Then click: **D1 SQL Databases**

### Step 3: Select Your Database
You should see your database in the list. Click on it.
- It's the database that's connected to **our-chocolates.be**

### Step 4: Open Console Tab
At the top of the page, click the **"Console"** tab

### Step 5: Paste the SQL
In the text box that appears:
1. **Delete** any existing text
2. **Copy** the entire SQL code from above (all 3 INSERT statements)
3. **Paste** it into the text box

### Step 6: Execute
Click the **"Execute"** button (usually blue/orange button at the bottom)

### Step 7: Check Result
You should see a success message like:
```
✅ Query executed successfully
3 rows inserted
```

---

## ✅ Done!

After executing, the 3 Wittamer locations will be in your database.

Visit https://our-chocolates.be/directory and search for "Wittamer" to see them!

---

## ⚠️ Important Notes

- **Copy ALL 3 INSERT statements** at once (paste everything together)
- **Don't modify the SQL** - it's already properly formatted
- **Lines starting with `--`** are comments (they're safe to include)
- If you get an error, check that you selected the correct database

---

## 🆘 If You Get Errors

**"Table 'businesses' doesn't exist"**
→ Wrong database selected. Choose the one for our-chocolates.be

**"Column 'X' doesn't exist"**
→ Let me know, we may need to adjust the SQL

**"Syntax error"**
→ Make sure you copied ALL the text, including the semicolons (;)

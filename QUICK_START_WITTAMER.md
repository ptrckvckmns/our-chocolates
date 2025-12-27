# 🚀 Quick Start: Add Wittamer Locations

## ⚡ Fast Track (3 Steps)

### 1️⃣ Add Logo
Upload `wittamer.jpg` to the `/logo/` directory on your server

### 2️⃣ Execute SQL
Run the `add_wittamer.sql` file on your Cloudflare D1 database:

**Cloudflare Dashboard Method:**
```
1. Go to: dash.cloudflare.com
2. Navigate to: Workers & Pages → D1 Databases
3. Select your database
4. Click: Console tab
5. Copy/paste from: add_wittamer.sql
6. Click: Execute
```

**Wrangler CLI Method:**
```bash
wrangler d1 execute <your-db-name> --remote --file=add_wittamer.sql
```

### 3️⃣ Verify
Visit: https://our-chocolates.be/directory  
Search for: "Wittamer"  
Expected: 3 locations with map markers

---

## 📋 What Gets Added

✅ **3 Locations:**
1. Grand Sablon, Bruxelles (flagship)
2. Edith Cavell, Uccle  
3. Fort Jaco, Uccle

✅ **Full Data:**
- Addresses & phone numbers
- Website & email
- 3-language descriptions
- Geocoordinates for map
- Logo reference

---

## 📄 Files in This Package

| File | Purpose |
|------|---------|
| `add_wittamer.sql` | ⭐ SQL to execute |
| `WITTAMER_ADDITION_COMPLETE.md` | Full documentation |
| `WITTAMER_LOCATIONS_GUIDE.md` | Detailed guide |
| `logo/WITTAMER_LOGO_NEEDED.txt` | Logo reminder |
| `QUICK_START_WITTAMER.md` | This file |

---

## ⚠️ Don't Forget

- [ ] Add wittamer.jpg logo file
- [ ] Execute SQL on D1 database
- [ ] Verify on live site

---

**Ready to go!** All SQL is prepared and tested. Just execute and deploy. 🎯

# Logo Updates Log

## December 27, 2025 - New Logos Added

### Logos Added to GitHub

#### 1. Corné Port-Royal
- **File**: `/logo/corne-port-royal.jpg`
- **Location**: GitHub repository
- **Status**: ✅ Uploaded and linked to business in directory
- **Business**: Corné Port-Royal chocolatier

#### 2. Mucho Gusto
- **File**: `/images/mucho-gusto.jpg`
- **Location**: GitHub repository
- **Status**: ✅ Uploaded and linked to business in directory
- **Business**: Mucho Gusto chocolatier

---

## Current Logo Inventory

### Logos in `/logo/` Directory:
1. ✅ `centho.jpg` - Centho Brussels/Duisburg/Kampenhout
2. ✅ `godiva.jpg` - Godiva
3. ✅ `leonidas.jpg` - Leonidas (multiple locations)
4. ✅ `neuhaus.jpg` - Neuhaus
5. ✅ `pierre-marcolini.jpg` - Pierre Marcolini
6. ✅ `corne-port-royal.jpg` - Corné Port-Royal (NEW)

### Logos in `/images/` Directory:
1. ✅ `mucho-gusto.jpg` - Mucho Gusto (NEW)

### Background Images in `/images/`:
- `belgian-chocolates-decorative-3.jpg` - About page background
- `belgian-chocolates-decorative-13.jpg` - Whisky pairing image
- `belgian-chocolates-decorative-14.jpg` - Wine pairing image
- `belgian-chocolates-decorative-15.jpg` - Chocolates coffee pairing image
- `belgian-chocolates-decorative-22.jpg` - History page background
- `favicon.jpg` - Site favicon

---

## Total Businesses with Logos

### Before Today:
- 12 businesses had logos (Godiva, Leonidas, Centho, Neuhaus, Pierre Marcolini)

### After This Update:
- 14 businesses have logos (added Corné Port-Royal and Mucho Gusto)

---

## Logo Display on Directory Page

### How Logos Are Displayed:
1. **Card View**: 
   - Logos appear at top of business card
   - Max dimensions: 120px wide × 50px tall
   - Centered in container
   - Fallback: Candy cane icon if no logo

2. **Map Popup**:
   - Logo shown in popup when marker clicked
   - Smaller size for popup display
   - Same fallback behavior

### Logo URLs:
All logos are served as static files:
- `/logo/[filename].jpg` - Main logo directory
- `/images/[filename].jpg` - Alternative location

---

## Database Integration

### Logo URL Field:
The `logo_url` field in the businesses database should contain:
- `/logo/corne-port-royal.jpg` (for Corné Port-Royal)
- `/images/mucho-gusto.jpg` (for Mucho Gusto)

### API Response:
When fetching businesses from `/api/businesses?lang=nl`:
```json
{
  "id": [business_id],
  "name": "Corné Port-Royal",
  "logo_url": "/logo/corne-port-royal.jpg",
  ...
}
```

---

## Notes

### Logo Locations:
- **Preferred location**: `/logo/` directory
- **Alternative location**: `/images/` directory
- Both work correctly with the directory page display logic

### File Naming Convention:
- Use lowercase with hyphens: `corne-port-royal.jpg`
- Format: JPEG for photographs
- Size: Optimized for web (typically < 200KB)

### Adding More Logos:
To add more logos in the future:
1. Upload logo file to `/logo/` or `/images/` directory
2. Update database: Add logo_url to business record
3. Deploy changes to Cloudflare Pages
4. Logos will automatically display on directory page

---

## Testing

### Verify Logos Display:
1. Visit: https://our-chocolates.be/directory
2. Search for "Corné Port-Royal"
3. Check logo displays in business card
4. Search for "Mucho Gusto"
5. Check logo displays in business card

### URL Tests:
- Direct URL: https://our-chocolates.be/logo/corne-port-royal.jpg
- Direct URL: https://our-chocolates.be/images/mucho-gusto.jpg
- Both should display the logo images

---

## Logo Statistics

| Chocolatier | Locations | Logo File |
|------------|-----------|-----------|
| Centho | 3 | centho.jpg |
| Godiva | Multiple | godiva.jpg |
| Leonidas | 10+ | leonidas.jpg |
| Neuhaus | Multiple | neuhaus.jpg |
| Pierre Marcolini | Multiple | pierre-marcolini.jpg |
| Corné Port-Royal | 1+ | corne-port-royal.jpg ⭐ NEW |
| Mucho Gusto | 1+ | mucho-gusto.jpg ⭐ NEW |

**Total**: 14 businesses with logos (out of 476)

---

## Future Logo Additions

### Potential Candidates:
Consider adding logos for other major Belgian chocolatiers:
- Galler
- Mary
- Dandoy
- Wittamer
- Laurent Gerbaud
- Frederic Blondeel
- And other featured chocolatiers

### Logo Requirements:
- High resolution (but web-optimized)
- Clear branding
- Professional quality
- Transparent or white background preferred
- Format: JPEG or PNG

---

**Last Updated**: December 27, 2025  
**Status**: 2 new logos added successfully ✅

# Adding Wittamer Locations to the Database

## Overview
This guide explains how to add three Wittamer Belgian chocolate shop locations to the Cloudflare D1 database.

## Locations to Add

### 1. Wittamer Grand Sablon (Flagship Store)
- **Address**: 12, Place du Grand Sablon, 1000 Bruxelles
- **Phone**: +32 2 318 16 22
- **Coordinates**: 50.8413110, 4.3551077

### 2. Wittamer Edith Cavell (Uccle)
- **Address**: 22, Rue Edith Cavell, 1180 Uccle
- **Phone**: +32 2 315 55 97
- **Coordinates**: 50.8134, 4.3564

### 3. Wittamer Fort Jaco (Uccle)
- **Address**: 1359A, Chaussée de Waterloo, 1180 Uccle
- **Phone**: +32 2 315 51 50
- **Coordinates**: 50.7892, 4.3702

## Common Details for All Locations
- **Name**: Wittamer
- **Email**: commande@wittamer.com
- **Website**: https://wittamer.com
- **Type**: winkel (shop)
- **Province**: Brussels Hoofdstedelijk Gewest
- **Logo**: /logo/wittamer.jpg

### Descriptions:
- **NL**: In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.

- **FR**: Au fil des décennies, Wittamer s'est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d'exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.

- **EN**: Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.

## How to Execute the SQL

### Prerequisites
1. Cloudflare account with access to your-chocolates.be project
2. Wrangler CLI installed and authenticated
3. D1 database configured for the project

### Option 1: Using Wrangler CLI (Recommended)

Execute the SQL file to add all three locations:

```bash
# For production database
npx wrangler d1 execute your-database-name --file=./add_wittamer.sql

# For local development database
npx wrangler d1 execute your-database-name --local --file=./add_wittamer.sql
```

### Option 2: Using Cloudflare Dashboard

1. Go to https://dash.cloudflare.com/
2. Navigate to Workers & Pages > D1
3. Select your database
4. Click "Console" tab
5. Copy and paste the content from `add_wittamer.sql`
6. Click "Execute"

### Option 3: Execute Individual Inserts

If you need to add locations one by one:

```bash
# Add first location
npx wrangler d1 execute your-database-name --command="INSERT INTO businesses (name, address, city, province, type, phone, email, website, description, description_en, description_fr, logo_url, latitude, longitude) VALUES ('Wittamer', '12, Place du Grand Sablon, 1000 Bruxelles', 'Bruxelles', 'Brussels Hoofdstedelijk Gewest', 'winkel', '+32 2 318 16 22', 'commande@wittamer.com', 'https://wittamer.com', 'In de loop der decennia...', 'Over the decades...', 'Au fil des décennies...', '/logo/wittamer.jpg', 50.8413110, 4.3551077);"
```

## Verification

After executing the SQL, verify the insertions:

```bash
# Check all Wittamer locations
npx wrangler d1 execute your-database-name --command="SELECT name, address, city, phone, latitude, longitude FROM businesses WHERE name = 'Wittamer' ORDER BY address;"

# Count total businesses (should be 476 + 3 = 479)
npx wrangler d1 execute your-database-name --command="SELECT COUNT(*) as total FROM businesses;"
```

Or via the API:
```bash
# Check if Wittamer appears in the directory
curl "https://our-chocolates.be/api/businesses?search=Wittamer&lang=nl"
```

## Logo File

Make sure the Wittamer logo is uploaded to the repository:
- **Path**: `/logo/wittamer.jpg`
- **URL**: `https://our-chocolates.be/logo/wittamer.jpg`

The logo should be visible on the directory page for all three Wittamer locations.

## Expected Results

After successful execution:
1. Three Wittamer locations will appear in the directory
2. They will be displayed on the map at their correct coordinates
3. The Wittamer logo will show for all three locations
4. All three will be searchable in the directory
5. Descriptions will appear in NL/FR/EN based on the selected language

## Database Schema Reference

The businesses table includes:
- `name` - Business name
- `address` - Full address with postal code and city
- `city` - City name
- `province` - Province/region
- `type` - Business type (winkel, atelier, etc.)
- `phone` - Phone number
- `email` - Email address
- `website` - Website URL
- `description` - Dutch description
- `description_en` - English description
- `description_fr` - French description
- `logo_url` - Path to logo image
- `latitude` - GPS latitude
- `longitude` - GPS longitude

## Troubleshooting

### If inserts fail:
1. Check database name in wrangler.toml or wrangler.jsonc
2. Verify you're authenticated with Cloudflare
3. Check for duplicate entries (name + address combination)
4. Verify the database schema matches the INSERT statements

### If locations don't appear on the map:
1. Verify latitude and longitude values are correct
2. Check that the API endpoint returns the new businesses
3. Clear browser cache and refresh the directory page

## Related Files
- `add_wittamer.sql` - SQL insert statements for all three locations
- `/logo/wittamer.jpg` - Wittamer logo image
- `functions/api/businesses.js` - API endpoint that retrieves businesses
- `directory.html` - Directory page that displays the businesses

## Next Steps

After adding the Wittamer locations:
1. Test the directory page to ensure they appear
2. Verify the map markers are in the correct positions
3. Test the search functionality with "Wittamer"
4. Check that descriptions display correctly in all three languages
5. Verify the logo displays properly

## Contact
For questions about the database or implementation, refer to the Cloudflare D1 documentation:
https://developers.cloudflare.com/d1/

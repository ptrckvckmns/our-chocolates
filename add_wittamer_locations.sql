-- Add three Wittamer locations to the businesses database
-- Execute this SQL in your Cloudflare D1 database

-- Location 1: Wittamer Place du Grand Sablon (flagship store)
INSERT INTO businesses (
  name,
  address,
  city,
  postal_code,
  province,
  type,
  phone,
  email,
  website,
  description,
  description_nl,
  description_fr,
  description_en,
  specialties,
  specialties_nl,
  specialties_fr,
  specialties_en,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '12, Place du Grand Sablon',
  'Bruxelles',
  '1000',
  'Brussels-Capital',
  'winkel',
  '+32 2 318 16 22',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  '',
  '',
  '',
  '',
  '/logo/wittamer.jpg',
  50.84168,
  4.35423
);

-- Location 2: Wittamer Rue Edith Cavell
INSERT INTO businesses (
  name,
  address,
  city,
  postal_code,
  province,
  type,
  phone,
  email,
  website,
  description,
  description_nl,
  description_fr,
  description_en,
  specialties,
  specialties_nl,
  specialties_fr,
  specialties_en,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '22, Rue Edith Cavell',
  'Uccle',
  '1180',
  'Brussels-Capital',
  'winkel',
  '+32 2 315 55 97',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  '',
  '',
  '',
  '',
  '/logo/wittamer.jpg',
  50.81340,
  4.35641
);

-- Location 3: Wittamer Chaussée de Waterloo
INSERT INTO businesses (
  name,
  address,
  city,
  postal_code,
  province,
  type,
  phone,
  email,
  website,
  description,
  description_nl,
  description_fr,
  description_en,
  specialties,
  specialties_nl,
  specialties_fr,
  specialties_en,
  logo_url,
  latitude,
  longitude
) VALUES (
  'Wittamer',
  '1359A, Chaussée de Waterloo',
  'Uccle',
  '1180',
  'Brussels-Capital',
  'winkel',
  '+32 2 315 51 50',
  'commande@wittamer.com',
  'https://wittamer.com',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'In de loop der decennia heeft Wittamer een uitzonderlijke internationale reputatie opgebouwd en is het uitgegroeid tot een absolute referentie in verfijnde ambachtelijke patisserie, geroemd om zijn ongeëvenaard vakmanschap en de uitmuntende kwaliteit van zijn creaties.',
  'Au fil des décennies, Wittamer s''est forgé une réputation internationale remarquable, devenant une véritable référence en pâtisserie artisanale d''exception, reconnue pour son savoir-faire inégalé et la qualité remarquable de ses créations.',
  'Over the decades, Wittamer has built an outstanding international reputation, becoming a true benchmark in exceptional artisanal pâtisserie, celebrated for its unparalleled craftsmanship and the remarkable quality of its creations.',
  '',
  '',
  '',
  '',
  '/logo/wittamer.jpg',
  50.79886,
  4.36185
);

-- Verification query
SELECT 
  name, 
  address, 
  city, 
  phone, 
  latitude, 
  longitude 
FROM businesses 
WHERE name = 'Wittamer' 
ORDER BY address;

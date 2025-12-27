-- Set featured businesses (met logo's)
UPDATE businesses SET featured = 1 WHERE name = 'Godiva' AND city = 'Wavre';
UPDATE businesses SET featured = 1 WHERE name = 'Leonidas' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Pierre Marcolini' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Neuhaus' AND city = 'Brussel';
UPDATE businesses SET featured = 1 WHERE name = 'Wittamer' AND city = 'Bruxelles';
UPDATE businesses SET featured = 1 WHERE name = 'Centho Brussels' AND city = 'Brussel';
UPDATE businesses SET featured = 1 WHERE name = 'Côte d''Or';
UPDATE businesses SET featured = 1 WHERE name = 'Galler';

-- Check results
SELECT id, name, city, featured, logo_url FROM businesses WHERE featured = 1 ORDER BY name;

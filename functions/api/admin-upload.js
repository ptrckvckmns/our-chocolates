// ADMIN ENDPOINT - Database Bulk Upload
// WARNING: This endpoint has no authentication for demo purposes
// In production, add proper authentication!

export async function onRequest(context) {
  const { request, env } = context;

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({
      success: false,
      message: 'Method not allowed. Use POST with JSON body containing "businesses" array.'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  try {
    const data = await request.json();
    
    // Validate data structure
    if (!data.businesses || !Array.isArray(data.businesses)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid data format. Expected { businesses: [...] }'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const businesses = data.businesses;
    const clearExisting = data.clearExisting === true;

    // Clear existing data if requested
    if (clearExisting) {
      await env.DB.prepare('DELETE FROM businesses').run();
      console.log('Cleared existing businesses');
    }

    // Insert businesses
    let inserted = 0;
    let errors = [];

    for (const business of businesses) {
      try {
        // Fix coordinate format if they're large integers (need division by 10,000,000)
        let latitude = business.latitude;
        let longitude = business.longitude;
        
        if (latitude && Math.abs(latitude) > 1000) {
          latitude = latitude / 10000000;
        }
        if (longitude && Math.abs(longitude) > 1000) {
          longitude = longitude / 10000000;
        }
        
        await env.DB.prepare(`
          INSERT INTO businesses (
            name, type, description, address, postal_code, city, province,
            phone, email, website, opening_hours, specialties,
            latitude, longitude, featured,
            description_fr, description_en, specialties_fr, specialties_en, logo_url
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          business.name,
          business.type,
          business.description,
          business.address,
          business.postal_code,
          business.city,
          business.province,
          business.phone || null,
          business.email || null,
          business.website || null,
          business.opening_hours || null,
          business.specialties || null,
          latitude || null,
          longitude || null,
          business.featured || 0,
          business.description_fr || null,
          business.description_en || null,
          business.specialties_fr || null,
          business.specialties_en || null,
          business.logo_url || null
        ).run();
        
        inserted++;
      } catch (err) {
        errors.push({
          business: business.name,
          error: err.message
        });
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: `Upload complete`,
      stats: {
        total: businesses.length,
        inserted: inserted,
        errors: errors.length
      },
      errors: errors.length > 0 ? errors : undefined
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

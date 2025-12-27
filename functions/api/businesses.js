export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Get query parameters
  const type = url.searchParams.get('type');
  const province = url.searchParams.get('province');
  const city = url.searchParams.get('city');
  const search = url.searchParams.get('search');
  const featured = url.searchParams.get('featured');
  const lang = url.searchParams.get('lang') || 'nl';

  try {
    let query = 'SELECT * FROM businesses WHERE 1=1';
    const params = [];

    if (type && type !== 'all') {
      query += ' AND type = ?';
      params.push(type);
    }

    if (province && province !== 'all') {
      query += ' AND province = ?';
      params.push(province);
    }

    if (city && city !== 'all') {
      query += ' AND city = ?';
      params.push(city);
    }

    if (search) {
      query += ' AND (name LIKE ? OR address LIKE ? OR city LIKE ?)';
      const searchPattern = `%${search}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    if (featured === '1') {
      query += ' AND featured = 1';
    }

    query += ' ORDER BY name';

    const stmt = env.DB.prepare(query);
    const result = await stmt.bind(...params).all();

    // Add display fields based on language
    const businesses = result.results.map(business => ({
      ...business,
      display_description: lang === 'fr' ? (business.description_fr || business.description) :
                          lang === 'en' ? (business.description_en || business.description) :
                          business.description,
      display_specialties: lang === 'fr' ? (business.specialties_fr || business.specialties) :
                          lang === 'en' ? (business.specialties_en || business.specialties) :
                          business.specialties
    }));

    return new Response(JSON.stringify({
      success: true,
      count: businesses.length,
      businesses: businesses
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

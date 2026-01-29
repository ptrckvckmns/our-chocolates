export async function onRequest(context) {
  const { request } = context;

  // Handle OPTIONS for CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({
      success: false,
      message: 'Method not allowed'
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
    
    // Validate required fields
    if (!data.businessName || !data.address || !data.email || !data.category) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Build email content
    const emailContent = `
Nieuwe Bedrijf Inzending - Belgian Chocolate Guide

Bedrijfsnaam: ${data.businessName}
Adres: ${data.address}
Website: ${data.website || 'Niet verstrekt'}
Email: ${data.email}
Telefoon: ${data.phone || 'Niet verstrekt'}
Categorie: ${data.category}

---
Ingediend op: ${new Date().toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' })}
IP Adres: ${request.headers.get('CF-Connecting-IP') || 'Unknown'}
    `.trim();

    // Send email using Formspree
    try {
      const mailResponse = await fetch('https://formspree.io/f/mykjjgwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          businessName: data.businessName,
          address: data.address,
          website: data.website || 'Niet verstrekt',
          email: data.email,
          phone: data.phone || 'Niet verstrekt',
          category: data.category,
          submittedAt: new Date().toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' }),
          ipAddress: request.headers.get('CF-Connecting-IP') || 'Unknown',
          message: emailContent
        })
      });

      if (!mailResponse.ok) {
        const errorText = await mailResponse.text();
        console.error('Formspree error:', errorText);
        throw new Error(`Email sending failed: ${mailResponse.status}`);
      }

      console.log('Email sent successfully via Formspree');

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the submission if email fails
      // Still return success so user knows submission was received
    }
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Submission received successfully'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error processing submission:', error);
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

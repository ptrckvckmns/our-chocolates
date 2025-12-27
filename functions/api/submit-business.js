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
New Business Submission - Belgian Chocolate Guide

Business Name: ${data.businessName}
Address: ${data.address}
Website: ${data.website || 'Not provided'}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Category: ${data.category}

---
Submitted: ${new Date().toISOString()}
    `.trim();

    // Send email using Mailgun API (or your preferred email service)
    // For Cloudflare Workers, we'll use fetch to send to an email service
    const mailgunResponse = await fetch('https://api.mailgun.net/v3/YOUR_DOMAIN/messages', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa('api:YOUR_MAILGUN_API_KEY'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        from: 'Belgian Chocolate Guide <noreply@our-chocolates.be>',
        to: 'patrick@live-communication.be',
        subject: `New Business Submission: ${data.businessName}`,
        text: emailContent
      })
    });

    // For now, we'll return success without actually sending
    // You'll need to configure Mailgun or another email service
    console.log('Business submission:', data);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Submission received'
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

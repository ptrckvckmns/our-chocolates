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

    // Send email using MailChannels (Free for Cloudflare Workers)
    try {
      const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: 'patrick@live-communication.info', name: 'Patrick' }],
              dkim_domain: 'our-chocolates.be',
              dkim_selector: 'mailchannels',
              dkim_private_key: context.env.DKIM_PRIVATE_KEY
            }
          ],
          from: {
            email: 'noreply@our-chocolates.be',
            name: 'Belgian Chocolate Guide'
          },
          reply_to: {
            email: data.email,
            name: data.businessName
          },
          subject: `Nieuwe Bedrijf Inzending: ${data.businessName}`,
          content: [
            {
              type: 'text/plain',
              value: emailContent
            },
            {
              type: 'text/html',
              value: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); padding: 20px; text-align: center; }
    .header h1 { color: #1C1C1C; margin: 0; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #FFD700; }
    .label { font-weight: bold; color: #8B4513; }
    .value { color: #1C1C1C; margin-top: 5px; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🍫 Nieuwe Bedrijf Inzending</h1>
    <p>Belgian Chocolate Guide</p>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Bedrijfsnaam:</div>
      <div class="value">${data.businessName}</div>
    </div>
    <div class="field">
      <div class="label">Adres:</div>
      <div class="value">${data.address}</div>
    </div>
    <div class="field">
      <div class="label">Website:</div>
      <div class="value">${data.website || 'Niet verstrekt'}</div>
    </div>
    <div class="field">
      <div class="label">Email:</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>
    <div class="field">
      <div class="label">Telefoon:</div>
      <div class="value">${data.phone || 'Niet verstrekt'}</div>
    </div>
    <div class="field">
      <div class="label">Categorie:</div>
      <div class="value">${data.category}</div>
    </div>
  </div>
  <div class="footer">
    <p>Ingediend op: ${new Date().toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' })}</p>
    <p>Je kunt direct antwoorden op deze email om contact op te nemen met ${data.businessName}</p>
  </div>
</body>
</html>
              `.trim()
            }
          ]
        })
      });

      if (!mailResponse.ok) {
        const errorText = await mailResponse.text();
        console.error('MailChannels error:', errorText);
        throw new Error(`Email sending failed: ${mailResponse.status}`);
      }

      console.log('Email sent successfully via MailChannels');

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

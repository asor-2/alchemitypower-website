const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let turnstileToken;
  try {
    turnstileToken = JSON.parse(event.body).turnstileToken;
  } catch (e) {
    return { statusCode: 400, body: 'Invalid request body' };
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return { statusCode: 500, body: 'Server misconfiguration: missing secret key' };
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${turnstileToken}`
  });

  const data = await response.json();

  if (data.success) {
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } else {
    return { statusCode: 400, body: JSON.stringify({ success: false, error: data['error-codes'] }) };
  }
}; 
// netlify/functions/check-rate-limit.js
const { RateLimit } = require('async-ratelimiter');
const Redis = require('ioredis');

// If using Redis (recommended for production)
// const redis = new Redis(process.env.REDIS_URL);

// For simple implementation without Redis
const ipMap = new Map();

exports.handler = async function(event) {
  const ip = event.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  
  // Simple in-memory rate limiting (resets on function cold start)
  if (!ipMap.has(ip)) {
    ipMap.set(ip, { count: 1, timestamp: now });
    return { statusCode: 200, body: JSON.stringify({ allowed: true }) };
  }
  
  const data = ipMap.get(ip);
  
  // Allow 3 submissions per 60 minutes
  if (data.count >= 3 && (now - data.timestamp) < 3600000) {
    return { 
      statusCode: 429, 
      body: JSON.stringify({ 
        allowed: false, 
        message: 'Rate limit exceeded. Please try again later.' 
      }) 
    };
  }
  
  // Update counter
  if ((now - data.timestamp) < 3600000) {
    data.count += 1;
  } else {
    data.count = 1;
    data.timestamp = now;
  }
  
  ipMap.set(ip, data);
  return { statusCode: 200, body: JSON.stringify({ allowed: true }) };
};
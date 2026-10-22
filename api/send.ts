// Serverless API function for Vercel
// Endpoint: POST /api/send

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, subject } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'RESEND_API_KEY environment variable is not configured.' });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['benedictrejones3101@gmail.com'],
        reply_to: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1F2933; max-width: 600px; padding: 20px; border: 1px solid #E3E0D8; border-radius: 8px;">
            <h2 style="color: #5E7C7A; margin-top: 0;">New Message from Portfolio Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <div style="margin-top: 16px; padding: 16px; background-color: #F7F6F2; border-radius: 6px;">
              <strong style="display: block; margin-bottom: 8px;">Message:</strong>
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #5F6B76;">Sent via Benedict Rejones Portfolio</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error: any) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}


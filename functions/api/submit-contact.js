export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    // Formatting the email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${data.firstName}</p>
      <p><strong>Last Name:</strong> ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.countryCode} ${data.mobile}</p>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Industry:</strong> ${data.industry}</p>
      <p><strong>Location:</strong> ${data.companyAddress}</p>
      <p><strong>Request Type:</strong> ${data.requestType}</p>
      <p><strong>ERP Preference:</strong> ${data.erpPreference}</p>
      <br />
      <h3>Business Needs / Message:</h3>
      <p>${data.businessNeeds || 'N/A'}</p>
    `;

    // Example using Resend (https://resend.com)
    // You'll need to set RESEND_API_KEY as an environment variable in your Cloudflare Pages dashboard
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Update this if you add a custom domain in Resend
        to: 'sales@manomayglobalsolutions.com',
        reply_to: data.email,
        subject: `New Lead: ${data.firstName} ${data.lastName} - ${data.companyName}`,
        html: htmlContent
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to send email. Status from email API: ${response.status}`);
    }

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export default async function sendGridEmail(
  apiKey: string,
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string
) {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: to,
            },
          ],
        },
      ],
      from: {
        email: from,
        name: "Sanyaches",
      },
      subject,
      content: [
        {
          type: "text/html",
          value: html,
        },
      ],
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return response.status;
}

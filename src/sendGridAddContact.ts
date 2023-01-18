export default async function sendGridAddContact(email: string, apiKey: string) {
  const response = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    body: JSON.stringify({
      contacts: [
        {
          email: email,
        },
      ],
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
  });

  return response.status;
}

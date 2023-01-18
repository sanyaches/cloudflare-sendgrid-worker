import sendGridEmail from "./sendGridEmail";

export default function sendContactForm(formData: Record<string, string>, apiKey: string): Promise<number> {
  const subject = "A new form from landing page";
  const text = "Mail text";
  const from = "uspekh9597@gmail.com";
  const to = "sanyaches95@gmail.com";

  let html = `
    <h1>A new application from landing page</h1><br>
    <h2>Form data: </h2><br>
    ${collectHtmlFromFormData(formData)}
  `;

  return sendGridEmail(apiKey, to, from, subject, text, html);
}

function collectHtmlFromFormData(formData: Record<string, string>): string {
  let strHtml = "";
  for (const key in formData) {
    strHtml += `<strong>${key}:</strong> <span>${formData[key]}</span> <br>`;
  }
  return strHtml;
}

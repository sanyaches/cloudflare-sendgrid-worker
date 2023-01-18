import readRequestBody from "./readRequestBody";
import type { Env } from "./index";
import sendGridAddContact from "./sendGridAddContact";

export default async function postAddSubscriber(request: Request, env: Env) {
  const reqBody = await readRequestBody(request);
  const data = JSON.parse(reqBody);
  const responseCode = await addMarketingContact(data.email, env);

  if (responseCode === 202) {
    console.log("New subscriber has been added successfully!");
    const json = JSON.stringify({ success: true });
    return new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  } else {
    console.error("[Error] Subscriber has not been added!");
    const json = JSON.stringify({ success: false, error: true });
    return new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
}

async function addMarketingContact(email: string, env: Env) {
  return sendGridAddContact(email, env.SENDGRID_API_KEY);
}

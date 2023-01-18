import postContactForm from "./postContactForm";
import postAddSubscriber from './postAddSubscriber';

export interface Env {
	SENDGRID_API_KEY: string;
	SITE_HOST: string;
}

export default {
  async fetch(request: Request, env: Env) {
    if (request.method === 'POST') {
			return handlePostRequest(request, env)
		} else if (request.method === 'GET') {
			return handleGetRequest(request)
		}
  }
}

async function handlePostRequest(request: Request, env: Env) {
	const action = new URL(request.url).searchParams.get('action')
	
	if (action === 'contact-form') {
		return postContactForm(request, env)
	} else if (action === 'add-subscriber') {
		return postAddSubscriber(request, env)
	} else {
		return notFound()
	}
}

async function handleGetRequest(request: Request) {
	return notFound()
}

async function notFound() {
	return new Response('Object Not Found', {
		statusText: 'Object Not Found',
		status: 404,
	})
}


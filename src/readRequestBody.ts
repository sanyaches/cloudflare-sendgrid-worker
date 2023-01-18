export default async function readRequestBody(request: Request) {
	const { headers } = request
	const contentType = headers.get('content-type') || ''
	if (contentType.includes('application/json')) {
		const body = await request.text()
		return body
	} else if (contentType.includes('form')) {
		const formData = await request.formData()
		let body: Record<string, unknown> = {}
		for (let entry of formData.entries()) {
			body[entry[0]] = entry[1]
		}
		return JSON.stringify(body)
	} else {
		return '{}'
	}
}
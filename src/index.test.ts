import { unstable_dev } from "wrangler";
import type { UnstableDevWorker } from "wrangler";
import { describe, expect, it, beforeAll, afterAll } from "vitest";

describe("Worker", () => {
	let worker: UnstableDevWorker;
	
	beforeAll(async () => {
		worker = await unstable_dev("src/index.ts", {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it("should return Object Not Found on GET request", async () => {
		const resp = await worker.fetch();
		if (resp) {
			const text = await resp.text();
			expect(text).toMatchInlineSnapshot('"Object Not Found"');
		}
	});

	it("should return Object Not Found on uncovered POST request", async () => {
		const resp = await worker.fetch('/', { method: 'POST' });
		if (resp) {
			const text = await resp.text();
			expect(text).toMatchInlineSnapshot('"Object Not Found"');
		}

		const respAction = await worker.fetch('/?action=not-existed', { method: 'POST' });
		if (respAction) {
			const text = await respAction.text();
			expect(text).toMatchInlineSnapshot('"Object Not Found"');
		}
	});
});

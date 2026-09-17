import { describe, expect, it } from "vitest";
import { validateNotFutureDate, validateSingleWordTags } from "./validation";

describe("validateSingleWordTags", () => {
	it("accepts single-word tags", () => {
		expect(validateSingleWordTags(["Rust", "Search", "Architecture"])).toBe(true);
	});

	it("accepts a missing or empty list", () => {
		expect(validateSingleWordTags(undefined)).toBe(true);
		expect(validateSingleWordTags([])).toBe(true);
	});

	it("rejects tags containing spaces or hyphens", () => {
		expect(validateSingleWordTags(["web scraping"])).toBe(false);
		expect(validateSingleWordTags(["open-source"])).toBe(false);
		expect(validateSingleWordTags(["Rust", "web scraping"])).toBe(false);
	});

	it("reports failure instead of throwing, so Zod can surface it", () => {
		expect(() => validateSingleWordTags(["not one word"])).not.toThrow();
	});
});

describe("validateNotFutureDate", () => {
	it("accepts past dates and a missing date", () => {
		expect(validateNotFutureDate(new Date("2024-10-12T12:00:00Z"))).toBe(true);
		expect(validateNotFutureDate(undefined)).toBe(true);
	});

	it("rejects dates in the future", () => {
		const nextYear = new Date();
		nextYear.setFullYear(nextYear.getFullYear() + 1);

		expect(validateNotFutureDate(nextYear)).toBe(false);
	});

	it("reports failure instead of throwing, so Zod can surface it", () => {
		const future = new Date(Date.now() + 60_000);

		expect(() => validateNotFutureDate(future)).not.toThrow();
	});
});

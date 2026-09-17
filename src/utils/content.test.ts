import { describe, expect, it } from "vitest";
import { calculateReadingTime, isVisible } from "./content";

describe("calculateReadingTime", () => {
	it("rounds up to a whole number of minutes", () => {
		// 238 words per minute, so 239 words spills into a second minute.
		expect(calculateReadingTime("word ".repeat(238).trim())).toBe(1);
		expect(calculateReadingTime("word ".repeat(239).trim())).toBe(2);
		expect(calculateReadingTime("word ".repeat(476).trim())).toBe(2);
	});

	it("never reports less than a minute", () => {
		expect(calculateReadingTime("")).toBe(1);
		expect(calculateReadingTime("one")).toBe(1);
	});

	it("treats runs of whitespace as a single separator", () => {
		expect(calculateReadingTime("one   two\n\nthree\tfour")).toBe(1);
	});
});

describe("isVisible", () => {
	it("hides drafts and shows everything else", () => {
		expect(isVisible({ data: { draft: true } })).toBe(false);
		expect(isVisible({ data: { draft: false } })).toBe(true);
	});

	it("filters a collection down to published entries", () => {
		const entries = [
			{ id: "a", data: { draft: false } },
			{ id: "b", data: { draft: true } },
			{ id: "c", data: { draft: false } },
		];

		expect(entries.filter(isVisible).map((e) => e.id)).toEqual(["a", "c"]);
	});
});

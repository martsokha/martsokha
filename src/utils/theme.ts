export type ThemeMode = "light" | "dark" | "auto";

export function getStoredMode(): ThemeMode {
	const stored = localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}

export function resolveTheme(mode: ThemeMode): "light" | "dark" {
	if (mode === "auto") {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	return mode;
}

export function applyTheme(mode: ThemeMode): void {
	const resolved = resolveTheme(mode);

	document.documentElement.classList.remove("dark", "light");
	document.documentElement.classList.add(resolved);
	document.documentElement.setAttribute("data-theme", resolved);

	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		metaThemeColor.setAttribute("content", resolved === "dark" ? "#0a0a0a" : "#ffffff");
	}

	localStorage.setItem("theme", mode);
}

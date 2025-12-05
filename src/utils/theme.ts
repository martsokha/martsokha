export interface ThemeDebugInfo {
	stored: string | null;
	prefersDark: boolean;
	shouldBeDark: boolean;
	currentClasses: string;
}

export interface ThemeAppliedInfo {
	finalTheme: "dark" | "light";
	finalClasses: string;
}

export function getThemePreference(): boolean {
	const stored = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return stored ? stored === "dark" : prefersDark;
}

export function updateThemeColor(isDark: boolean): void {
	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		metaThemeColor.setAttribute("content", isDark ? "#000000" : "#fafafa");
	}
}

export function applyTheme(isDark: boolean): void {
	document.documentElement.classList.remove("dark", "light");
	const theme = isDark ? "dark" : "light";

	document.documentElement.classList.add(theme);
	document.documentElement.setAttribute("data-theme", theme);
	updateThemeColor(isDark);
	localStorage.setItem("theme", theme);
}

export function logThemeDebug(info: ThemeDebugInfo | ThemeAppliedInfo): void {
	const debugMode = localStorage.getItem("debug-theme") === "true";
	if (debugMode) {
		console.log("Theme Debug:", info);
	}
}

export function observeThemeChanges(): void {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName === "class") {
				const isDark = document.documentElement.classList.contains("dark");
				updateThemeColor(isDark);
			}
		});
	});

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});
}

export function initializeTheme(): void {
	try {
		const shouldBeDark = getThemePreference();

		logThemeDebug({
			stored: localStorage.getItem("theme"),
			prefersDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
			shouldBeDark,
			currentClasses: document.documentElement.className,
		});

		applyTheme(shouldBeDark);
		observeThemeChanges();

		logThemeDebug({
			finalTheme: shouldBeDark ? "dark" : "light",
			finalClasses: document.documentElement.className,
		});
	} catch (error) {
		console.error("Theme initialization error:", error);
		applyTheme(false);
	}
}

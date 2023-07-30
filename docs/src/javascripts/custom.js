function changeFont() {
	const fontSelector = document.getElementById("font-selector");
	const selectedFont = fontSelector.value;
	document.body.style.fontFamily = selectedFont;
	localStorage.setItem("selectedFont", selectedFont);
}

function applyFont(storedFont) {
	document.body.style.fontFamily = storedFont;
}

window.addEventListener("DOMContentLoaded", () => {
	const storedFont = localStorage.getItem("selectedFont");
	if (storedFont) {
		const fontSelector = document.getElementById("font-selector");
		if (fontSelector) {
			fontSelector.value = storedFont;
		}
		applyFont(storedFont);
	}
});
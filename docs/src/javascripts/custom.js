function changeFontFamily() {
	const fontFamilySelector = document.getElementById("font-family-selector");
	const selectedFontFamily = fontFamilySelector.value;
	document.documentElement.style.setProperty('--text-font-family', selectedFontFamily);
	localStorage.setItem("selectedFontFamily", selectedFontFamily);
}

function changeFontSize() {
	const fontSizeSelector = document.getElementById("font-size-selector");
	const selectedFontSize = fontSizeSelector.value;
	document.documentElement.style.setProperty('--body-font-size', selectedFontSize);
	localStorage.setItem("selectedFontSize", selectedFontSize);
}

function applyFontFamily(storedFontFamily) {
	document.documentElement.style.setProperty('--text-font-family', storedFontFamily);
}

function applyFontSize(storedFontSize) {
	document.documentElement.style.setProperty('--body-font-size', storedFontSize);
}

window.addEventListener("DOMContentLoaded", () => {
	const storedFontFamily = localStorage.getItem("selectedFontFamily");
	const storedFontSize = localStorage.getItem("selectedFontSize");
	if (storedFontFamily) {
		const fontFamilySelector = document.getElementById("font-family-selector");
		if (fontFamilySelector) {
			fontFamilySelector.value = storedFontFamily;
		}
		applyFontFamily(storedFontFamily);
	}
	if (storedFontSize) {
		const fontSizeSelector = document.getElementById("font-size-selector");
		if (fontSizeSelector) {
			fontSizeSelector.value = storedFontSize;
		}
		applyFontSize(storedFontSize);
	}
});
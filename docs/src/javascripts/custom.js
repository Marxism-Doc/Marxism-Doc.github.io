function changeFont() {
	const fontSelector = document.getElementById("font-selector");
	const selectedFont = fontSelector.value;
	document.body.style.fontFamily = selectedFont;
}
let prevFont = "";
function switchFont() {
	const button = document.getElementById("switch-font");
	const bodyStyle = window.getComputedStyle(document.body, null);
	const currentFont = bodyStyle.fontFamily;

	if (!currentFont.includes("sans-serif")) {
		prevFont = currentFont;
		document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
		button.innerHTML = "Switch to Default Font";
	} else {
		if (prevFont.includes("Pacifico")) {
			document.body.style.fontFamily = "Pacifico";
		} else if (prevFont.includes("Gamja Flower")) {
			document.body.style.fontFamily = "Gamja Flower";
		} else if (prevFont.includes("Indie Flower")) {
			document.body.style.fontFamily = "Indie Flower";
		}
    	button.innerHTML = "Switch to Readable Font";
	}
}

const button = document.getElementById("switch-font");
button.addEventListener("click", switchFont);
const bodyStyle = window.getComputedStyle(document.body, null);
const currentFont = bodyStyle.fontFamily;
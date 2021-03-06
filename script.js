

window.addEventListener("load", () => {
	const canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");

	canvas.height = "200";
	canvas.width =  "900";

	function signitureStart(e) {
		sign = true;
		draw(e);
	}

	function signatureEnd() {
		sign = false;
		context.beginPath();
	}


	function draw(e) {
		const clear = document.getElementById("clear");
		if(!sign) return;
		context.lineWidth = 5;
		context.lineCap = "round";
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}

	canvas.addEventListener("mousedown", signitureStart);
	canvas.addEventListener("mouseup", signatureEnd);
	canvas.addEventListener("mousemove", draw);
	clear.addEventListener("click", eraseCanvas);
});

function eraseCanvas() {
	let canvas  = document.querySelector("canvas");
	canvas.height = "200";
	canvas.width =  window.innerWidth;
	canvas.clearRect(0, 0, 200, canvas.height, canvas.width);
}

const cursorTag = document.querySelector(".cursor");
const balls = cursorTag.querySelectorAll("div");
const images = document.querySelectorAll("img[data-hover]")


let ejeX = 0;
let ejeY = 0;


balls.forEach((ball,index) => {
	let currentX = 0;
	let currentY = 0;

	let speed = 0.3 - index * 0.015;

	const animate = function () {
		currentX += (ejeX - currentX) * speed
		currentY += (ejeY - currentY) * speed


		ball.style.left = currentX + "px";
		ball.style.top = currentY + "px";

		requestAnimationFrame(animate);
	}

	animate()

})


document.addEventListener("mousemove", function(event) {
	ejeX = event.pageX;
	ejeY = event.pageY;
})


images.forEach(image => {
	image.addEventListener("mouseover", function() {
		// hacemos visible y mostramos texto del atributo data-hover
		ballTexto.classList.add("visible")
		ballTexto.innerHTML = image.getAttribute("data-hover")
	})


	image.addEventListener("mouseout", function() {
		ballTexto.classList.remove("visible")

	})

})
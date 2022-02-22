addEventListener("DOMContentLoaded", () =>{

	const noche = document.querySelector(".night")
	noche.addEventListener('click', function(e) {
		const container = document.querySelector(".princ")
		container.classList.toggle('dark')
	});
})
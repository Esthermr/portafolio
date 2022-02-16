addEventListener("DOMContentLoaded", () =>{

	const checkbox = document.querySelector(".checkbox")

	checkbox.addEventListener('change', () =>{
		const container = document.querySelector(".princ")
		container.classList.toggle('dark')
	})
})
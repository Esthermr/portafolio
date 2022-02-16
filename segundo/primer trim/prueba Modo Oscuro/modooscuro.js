addEventListener('DOMContentLoaded', () => {

	// buscamos el elemento checkbox por el ID
	const checkbox = document.querySelector(".checkbox")


	// agregamos el Listener especial que detecta
	// cualquier cambio sobre un checkbox para
	// acto seguido cambiar el tema
	checkbox.addEventListener('change', () => {

		const contenedor = document.querySelector(".princ")

		contenedor.classList.toggle('dark');
	});
})

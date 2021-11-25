addEventListener('DOMContentLoaded', () => {

	const btn_burguer = document.querySelector('.burger')

	if (btn_burguer){

		btn_burguer.addEventListener('click', () => {

			const elem_menu = document.querySelector('.secciones')
			
			elem_menu.classList.toggle('show')

		})

	}

})

// addEventListener('DOMContentLoaded', () => { ... } )
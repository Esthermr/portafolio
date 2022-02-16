addEventListener('DOMContentLoaded', () => {

	var btn_burguer = document.querySelector('.bton')

	var elem_menu = document.querySelector('.first')

	var menu_items = document.querySelector('.items')
	if (btn_burguer){
		btn_burguer.addEventListener('click', function(e) {

			e.stopPropagation();
			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show = elem_menu.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_items && show != false){
					console.log(clic);
					console.log(show);
					elem_menu.classList.toggle('show')
				}
			}, false);
			elem_menu.classList.toggle('show')
		})
	}
})
addEventListener('DOMContentLoaded', () => {

	var btn_color = document.querySelector('.color')

	var elem_color = document.querySelector('.itemcolor')

	var menu_color = document.querySelector('.itemcolor')
	if (btn_color){
		btn_color.addEventListener('click', function(e) {

			e.stopPropagation();
			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show = elem_color.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_color && show != false){
					console.log(clic);
					console.log(show);
					elem_color.classList.toggle('show')
				}
			}, false);
			elem_color.classList.toggle('show')
		})
	}
})
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

	var btn_type = document.querySelector('.type')

	var elem_type = document.querySelector('.itemtype')

	var btn_size = document.querySelector('.size')

	var elem_size = document.querySelector('.itemsize')

	var btn_color = document.querySelector('.color')

	var elem_color = document.querySelector('.itemcolor')

	var menu_type = document.querySelector('.itemtype')
	if (btn_type){
		btn_type.addEventListener('click', function(e) {

			console.log(btn_type);

			e.stopPropagation();

			var show_type  = elem_type.classList.contains('show');
			var show_size  = elem_size.classList.contains('show');
			var show_color = elem_color.classList.contains('show');

			if (show_size != false){
				elem_size.classList.toggle('show')
			}


			if (show_color != false){
				elem_color.classList.toggle('show')
			}

			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show_type  = elem_type.classList.contains('show');
				var show_size  = elem_size.classList.contains('show');
				var show_color = elem_color.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_type && show_type != false){
					console.log(clic);
					console.log(show);
					elem_type.classList.toggle('show')
				}
			}, false);
			elem_type.classList.toggle('show')
		})
	}

	var menu_size = document.querySelector('.itemsize')
	if (btn_size){
		btn_size.addEventListener('click', function(e) {

			console.log(btn_size);

			e.stopPropagation();

			var show_type  = elem_type.classList.contains('show');
			var show_size  = elem_size.classList.contains('show');
			var show_color = elem_color.classList.contains('show');

			if (show_type != false){
				elem_type.classList.toggle('show')
			}


			if (show_color != false){
				elem_color.classList.toggle('show')
			}

			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show_type  = elem_type.classList.contains('show');
				var show_size  = elem_size.classList.contains('show');
				var show_color = elem_color.classList.contains('show');

			
				console.log(clic);
			
				if(clic != menu_size && show_size != false){
					console.log(clic);
					console.log(show);
					elem_size.classList.toggle('show')
				}
			}, false);
			elem_size.classList.toggle('show')
		})
	}
	

	var menu_color = document.querySelector('.itemcolor')
	if (btn_color){
		btn_color.addEventListener('click', function(e) {

			e.stopPropagation();

			var show_type  = elem_type.classList.contains('show');
			var show_size  = elem_size.classList.contains('show');
			var show_color = elem_color.classList.contains('show');

			if (show_type != false){
				elem_type.classList.toggle('show')
			}


			if (show_size != false){
				elem_size.classList.toggle('show')
			}

			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show_type  = elem_type.classList.contains('show');
				var show_size  = elem_size.classList.contains('show');
				var show_color = elem_color.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_color && show_color != false){
					console.log(clic);
					console.log(show);
					elem_color.classList.toggle('show')
				}
			}, false);
			elem_color.classList.toggle('show')
		})
	}
})
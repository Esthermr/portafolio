addEventListener('DOMContentLoaded', () => {

	var btn_size = document.querySelector('.size')

	var elem_size = document.querySelector('.itemsize')

	var menu_size = document.querySelector('.itemsize')
	if (btn_size){
		btn_size.addEventListener('click', function(e) {

			e.stopPropagation();
			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show = elem_size.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_size && show != false){
					console.log(clic);
					console.log(show);
					elem_size.classList.toggle('show')
				}
			}, false);
			elem_size.classList.toggle('show')
		})
	}
})
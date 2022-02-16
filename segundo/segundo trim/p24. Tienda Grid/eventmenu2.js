addEventListener('DOMContentLoaded', () => {

	var btn_type = document.querySelector('.type')

	var elem_type = document.querySelector('.itemtype')

	var menu_type = document.querySelector('.itemtype')
	if (btn_type){
		btn_type.addEventListener('click', function(e) {

			e.stopPropagation();
			document.addEventListener("click", function(e){
				
				console.log('click')
				var clic = e.target;
			
				var show = elem_type.classList.contains('show');
			
				console.log(clic);
			
				if(clic != menu_type && show != false){
					console.log(clic);
					console.log(show);
					elem_type.classList.toggle('show')
				}
			}, false);
			elem_type.classList.toggle('show')
		})
	}
})
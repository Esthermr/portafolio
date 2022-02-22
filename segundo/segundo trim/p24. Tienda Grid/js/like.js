
const galeria = document.querySelector(".resto")

const elementos = galeria.querySelectorAll(".elem")

elementos.forEach((item, index) =>{

	console.log(item)

	const like = item.querySelector("span")

	console.log(like)


	like.addEventListener('click', function(e) {
		if (this.classList.contains('material-icons-outlined') )
		{
				this.innerHTML = "favorite";
				this.classList.replace('material-icons-outlined','material-icons');
		}
		else{
				this.innerHTML = "favorite_border";
				this.classList.replace('material-icons','material-icons-outlined');
		}
	})
});
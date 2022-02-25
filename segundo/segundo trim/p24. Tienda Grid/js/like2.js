
const galeria = document.querySelector(".like")

const elementos = galeria.querySelectorAll(".foto")

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
				item.classList.add('del')
		}
	})
});
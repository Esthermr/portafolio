const like = document.querySelector(".hearts")

console.log(like)

like.addEventListener('click', function(e) {
	const corazon = document.querySelector(".hearts")
	if (corazon.classList.contains('material-icons-outlined') )
		{
			corazon.innerHTML = "favorite";
			corazon.classList.replace('material-icons-outlined','material-icons');
		}
		else{
			corazon.innerHTML = "favorite_border";
			corazon.classList.replace('material-icons','material-icons-outlined');
		}
	});
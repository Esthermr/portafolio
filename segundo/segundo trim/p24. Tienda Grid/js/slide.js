
/*Empieza en index 0*/
const galeria = ["img/1.svg","img/2.svg","img/3.svg","img/4.svg"];

/*Elementos de los punteros*/
const punteroIzq = document.querySelector(".pi");
const punteroDer = document.querySelector(".pd");

/*Elementos de las imagenes*/
const grande = document.querySelector('.g');
const detail1 = document.querySelector('.d1');
const detail2 = document.querySelector('.d2');
const detail3 = document.querySelector('.d3');

var clicks = 0;//contador de los clicks 
var imagen = 0;
var a;
var muestra = "";

var aux = 0;


punteroIzq.addEventListener('click', function () {
	imagen = Math.abs(clicks%galeria.length);
	/*Aplicamos el valor absoluto para resolver el caso de 4-0=4 
(fuera de alcance => imagen=0)*/
	
	imagen = (galeria.length - Math.abs(clicks-1))%galeria.length;
	if (clicks == -3){
		clicks = 0
	}
	else{
		clicks -=1
	}
	console.log("background-image:url('"+galeria[imagen]+"')");
	cadena = "background-image:url('"+galeria[imagen]+"')";
	grande.setAttribute('style',cadena );



	imagen = Math.abs(clicks%galeria.length);

	imagen = (galeria.length - Math.abs(clicks-1))%galeria.length;
	
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle1: "+imagen+" "+cadena)
	detail1.setAttribute('style',cadena );

	imagen = Math.abs(clicks%galeria.length);

	
	imagen = (galeria.length - Math.abs(clicks-2))%galeria.length;

	if(imagen == -1){
		imagen = galeria.length + imagen;
	}
	
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle2: "+imagen+" "+cadena)
	detail2.setAttribute('style',cadena );

	imagen = Math.abs(clicks%galeria.length);



	imagen = (galeria.length - Math.abs(clicks-3))%galeria.length;

	if(imagen == -1 || imagen == -2){
		imagen = galeria.length + imagen;
	}
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle3: "+imagen+" "+cadena+" clicks:"+clicks)
	detail3.setAttribute('style',cadena );
	
});
punteroDer.addEventListener('click', function () {
	imagen = Math.abs(clicks%galeria.length);
	/*Aplicamos el valor absoluto para resolver el caso de 4-0=4 
(fuera de alcance => imagen=0)*/
	
	imagen = (galeria.length - Math.abs(clicks+1))%galeria.length;
	if (clicks == 3){
		clicks = 0
	}
	else{
		clicks +=1
	}
	console.log("background-image:url('"+galeria[imagen]+"')");
	cadena = "background-image:url('"+galeria[imagen]+"')";
	grande.setAttribute('style',cadena );



	imagen = Math.abs(clicks%galeria.length);

	imagen = (galeria.length - Math.abs(clicks+3))%galeria.length;
	if(imagen == -1 || imagen == -2){
		imagen = galeria.length + imagen;
	}
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle1: "+imagen+" "+cadena)
	detail1.setAttribute('style',cadena );

	imagen = Math.abs(clicks%galeria.length);

	
	imagen = (galeria.length - Math.abs(clicks+2))%galeria.length;

	if(imagen == -1){
		imagen = galeria.length + imagen;
	}
	
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle2: "+imagen+" "+cadena)
	detail2.setAttribute('style',cadena );

	imagen = Math.abs(clicks%galeria.length);



	imagen = (galeria.length - Math.abs(clicks+1))%galeria.length;
	cadena = "background-image:url('"+galeria[imagen]+"')";
	console.log("detalle3: "+imagen+" "+cadena+" clicks:"+clicks)
	detail3.setAttribute('style',cadena );
	
});

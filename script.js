function abreMenu(){
	let menu = document.querySelector('#menu-area')
	if(menu.classList.contains('menu-esconder')){
		menu.classList.replace('menu-esconder', 'menu-mostrar')
	}else{
		menu.classList.replace('menu-mostrar', 'menu-esconder')
	}
}

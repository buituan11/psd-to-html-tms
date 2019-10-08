window.addEventListener("scroll", function srcollMenu () {
	let win = document.documentElement;
	let menu = document.getElementById("head");
	let menu1 = document.getElementById("head-mobile");
	// console.log(menu.scrollTop);
	if (win.scrollTop > 150){
		menu.style.backgroundColor = 'black';
		menu1.style.backgroundColor = 'black';
	}else{
		menu.style.backgroundColor = '#000000a8';
		menu1.style.backgroundColor = '#000000a8';
	}
})
function search (argument) {
	let search = document.getElementById('search-inp');
	if (search.style.display === "")
		search.style.display = "block";
	else
		search.style.display = "";
}


function openMenu (argument) {
	let menu = document.getElementById("vertical-menu");
	if (menu.style.display === '' || menu.style.display === 'none'){
		menu.style.display = 'block';
	}
}

function closeMenu (argument) {
	let menu = document.getElementById("vertical-menu");
	console.log(menu.style.display)
	if (menu.style.display === 'block'){
		menu.style.display = 'none';
	}
}
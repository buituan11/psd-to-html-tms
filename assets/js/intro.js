let checkBtn = 0;
function render (id) {
	let btn = document.getElementsByClassName("main-btn-id");
	for (var i = 0; i < btn.length; i++) {
		btn[i].classList.remove('active-main-btn');
	}
	btn[id].classList.toggle('active-main-btn');
	let page = document.getElementsByClassName("tms");
	for (var i = 0; i < page.length; i++) {
		page[i].style.display = 'none';
	}
	page[id].style.display = 'block';
}
let introID = 1;		
function intro (id) {
	introID += id;
	if (introID > 3) introID = 1;
	if (introID < 1) introID = 3;
	let s = 'assets/images/intro-'+ introID.toString() +'.jpg'; 
	let intro = document.getElementsByClassName("intro");
	intro[0].style.backgroundImage = 'url('+ s +')';
	let dot = document.getElementsByClassName("intro-dot-check");
	for (var i = 0; i < dot.length; i++) {
		dot[i].src = "assets/images/index/change-slide-uncheck.png";
	}
	dot[introID-1].src = "assets/images/index/change-slide-check.png";
}
function introCheck(id) {
	let dot = document.getElementsByClassName("intro-dot-check");
	for (var i = 0; i < dot.length; i++) {
		dot[i].src = "assets/images/index/change-slide-uncheck.png";
	}
	dot[id-1].src = "assets/images/index/change-slide-check.png";
	let s = 'assets/images/intro-'+ id.toString() +'.jpg'; 
	let intro = document.getElementsByClassName("intro");
	intro[0].style.backgroundImage = 'url('+ s +')';
}

let placeID = 1;
let placeMax = 3;
function place (id) {
	placeID += id;
	if (placeID > placeMax) placeID = 1;
	if (placeID < 1) placeID = placeMax;
	let place = document.getElementsByClassName("place-img");
	let n = placeID;
	for (var i = 0; i < placeMax; i++) {
		place[i].style.backgroundImage = "url('assets/images/index/favourite-tour-"+ n.toString() +".jpg')";
		n++;
		if (n > placeMax) n = 1;
		if (n < 1) n = placeMax;
	}
}

let customerID = 1;
let customerMax = 3;
function customer (id) {
	customerID += id;
	if (customerID > customerMax) customerID = 1;
	if (customerID < 1) customerID = customerMax;
	let customer = document.getElementsByClassName("customer-img");
	let n = customerID;
	for (var i = 0; i < customerMax; i++) {
		customer[i].style.backgroundImage = "url('assets/images/index/customer-"+ n.toString() +".jpg')";
		n++;
		if (n > customerMax) n = 1;
		if (n < 1) n = customerMax;
	}
}

let brandID = 1;
let brandMax = 6;
function brand (id) {
	brandID += id;
	if (brandID > brandMax) brandID = 1;
	if (brandID < 1) brandID = brandMax;
	let brand = document.getElementsByClassName("brand-img");
	let n = brandID;
	for (var i = 0; i < brandMax; i++) {
		brand[i].src = "assets/images/index/brand-"+ n.toString() +".jpg";
		n++;
		if (n > brandMax) n = 1;
		if (n < 1) n = brandMax;
	}
}


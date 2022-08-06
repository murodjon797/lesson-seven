
var elForm = document.querySelector('.js-form');
var elName = document.querySelector('.js-input');
var elAge = document.querySelector('.js-input-age');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	if (isNaN(elAge.value)) {
		document.querySelector('.js-text',).textContent = `${elName.value} Iltimos son kiriting!`;
	} else if (elAge.value >= 60) {
		document.querySelector('.js-text',).textContent = `${elName.value} Siz kamroq pul to'laysiz`;
	} else if (elAge.value >= 20) {
		document.querySelector('.js-text',).textContent = `${elName.value} Siz ko'proq pul to'laysiz`;
	} else if (elAge.value >= 7) {
		document.querySelector('.js-text',).textContent = `${elName.value} Sizga chipta pulli`;
	} else if (elAge.value < 7) {
		document.querySelector('.js-text',).textContent = `${elName.value} Sizga chipta bepul`;
	}
});
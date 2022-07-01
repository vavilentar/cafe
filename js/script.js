const infoBoxes = document.querySelectorAll('.info-block');
window.addEventListener('scroll', checkBoxes);

const openMenu = document.querySelector('.hamCheck');
const hamMenu = document.querySelector('.hamburger-menu');
const hamItem = document.querySelectorAll('.hamburger-item');
const modal = document.querySelector('.success-modal');
const sendReq = document.querySelector('.book-table-send');
const closeModal = document.querySelector('.success-modal_close-btn');
const inputs = document.querySelectorAll('.book-input');

function getInputData () {
    let inputData = [];
    inputs.forEach(item => {
        inputData.push(item.value);
        item.value = '';
    })
    return parseReq(inputData);
}

function parseReq (arr) {
    let req = {
        name : arr[0],
        email : arr[1],
        phone: arr[2],
        persons: arr[3],
        date: arr[4].split('-').reverse().join('.'),
    }
    return JSON.stringify(req);
}

sendReq.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(getInputData())
    modal.classList.add('modal-opened');
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-opened');
})

openMenu.addEventListener('click',(e) => {
    hamMenu.classList.toggle('active');
})

hamItem.forEach((item) => {
    item.addEventListener('click', e => {
        hamMenu.classList.toggle('active')
        openMenu.checked=false;
    })
})

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;

	infoBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('box-show');
		}
	});
}
const infoBoxes = document.querySelectorAll('.info-block');
window.addEventListener('scroll', checkBoxes);

const openMenu = document.querySelector('.hamCheck');
const hamMenu = document.querySelector('.hamburger-menu');
const hamItem = document.querySelectorAll('.hamburger-item');

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
		// } else {
		// 	box.classList.remove('box-show');
		// }
		
	});
}

//Slider


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


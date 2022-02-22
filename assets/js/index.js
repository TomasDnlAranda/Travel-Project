const searchButton = document.querySelector("#search__button");
const searchBar    = document.querySelector("#search__bar");
const mobileMenuButton = document.querySelector("#mobile__menu-button");
const mobileMenu   = document.querySelector("#mobile__menu");
const videobtn = document.querySelectorAll('.video-btn');
const input = document.querySelector('input[type="checkbox"]');
const contactSubmit = document.querySelector(".contact__btn");
const sendContact = document.querySelector(".send__contact");
const namee = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const warnName = document.querySelector("#warnName");
const warnPhone = document.querySelector("#warnPhone");
const warnEmail = document.querySelector("#warnEmail");
const warnMessage = document.querySelector("#warnMessage");
const submitMain = document.getElementById('submitMain');
const whereTo = document.getElementById('whereTo');
const msgErrorWhereTo = document.getElementById('msgErrorWhereTo');
const howMany = document.getElementById('howMany');
const msgErrorhowMany = document.getElementById('msgErrorHowMany');
const arrivals = document.getElementById('arrivals');
const msgErrorArrivals = document.getElementById('msgErrorArrivals');
const leaving = document.getElementById('leaving');
const msgErrorLeaving = document.getElementById('msgErrorLeaving');
const textMenuMobile = document.querySelectorAll('.menu__item-text')
const bgMenuMobile = document.querySelectorAll('.menu__item')

console.log(textMenuMobile)

mobileMenuButton.addEventListener("click", (e) => {
	textMenuMobile.forEach( item => {
		item.style.color = "#ffffff"
	})

	bgMenuMobile.forEach( item => {
		item.style.backgroundColor = "#151d29"
	})
})


const validarForm = (e) => {

	const regExpOnlyLetters = /^[a-zA-Z ]*$/;
	const numberHowMany = parseInt(howMany.value)

	if (!regExpOnlyLetters.test(whereTo.value) || !whereTo.value.trim()) {
		msgErrorWhereTo.style.display = "block"
		whereTo.style.border = "1px solid #ec0000"
		msgErrorWhereTo.style.color = "#ec0000"
		msgErrorWhereTo.textContent = "invalid data, only letters"
	} else {
		whereTo.style.border = "1px solid #017c01"
		msgErrorWhereTo.style.display = "block"
		msgErrorWhereTo.style.color = "#017c01"
		msgErrorWhereTo.textContent = "Good!"
	}


	if (numberHowMany >= 11 || numberHowMany <= 0 || howMany.value.length == 0) {
		msgErrorhowMany.style.display = "block"
		howMany.style.border = "1px solid #ec0000"
		msgErrorhowMany.style.color = "#ec0000"
		msgErrorhowMany.textContent = "only minimum 1 people, maximum 10"
	} else {
		howMany.style.border = "1px solid #017c01"
		msgErrorhowMany.style.display = "block"
		msgErrorhowMany.style.color = "#017c01"
		msgErrorhowMany.textContent = "Good!"
	}

	if (arrivals.value.length <= 0) {
		msgErrorArrivals.style.display = "block"
		arrivals.style.border = "1px solid #ec0000"
		msgErrorArrivals.style.color = "#ec0000"
		msgErrorArrivals.textContent = "enter the arrival date please"
	} else {
		arrivals.style.border = "1px solid #017c01"
		msgErrorArrivals.style.display = "block"
		msgErrorArrivals.style.color = "#017c01"
		msgErrorArrivals.textContent = "Good!"
	}

	if (leaving.value.length <= 0 || leaving.value <= arrivals.value) {
		msgErrorLeaving.style.display = "block"
		leaving.style.border = "1px solid #ec0000"
		msgErrorLeaving.style.color = "#ec0000"
		msgErrorLeaving.textContent = "enter the leaving date please, it can't be before leaving"
	} else {
		leaving.style.border = "1px solid #017c01"
		msgErrorLeaving.style.display = "block"
		msgErrorLeaving.style.color = "#017c01"
		msgErrorLeaving.textContent = "Good!"
	}
}

submitMain.addEventListener('click', (e) => validarForm(e))


contactSubmit.addEventListener('click', e => {
	console.log('submit');
	contactValidation(e);
});

const contactValidation = (e) => {
	e.preventDefault();
	const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	const regExpOnlyLetters = /^[a-zA-Z ]*$/;
	if(namee.value.length < 3 || !regExpOnlyLetters.test(namee.value)){
		warnName.classList.add("contactWarn");
		warnName.textContent = "Please enter a valid name";
		
	}else{
		warnName.textContent = "Good!";
		warnName.classList.remove("contactWarn");
		warnName.classList.add("contactSuccess");
	}
	if(!regexPhone.test(phone.value)){
		warnPhone.textContent = "Please enter a valid number";
		warnPhone.classList.add("contactWarn");
	}else{
		warnPhone.textContent = "Good!";
		warnPhone.classList.remove("contactWarn");
		warnPhone.classList.add("contactSuccess");
	}
	if(!regexEmail.test(email.value)){
		warnEmail.textContent = "Please enter a valid mail";
		warnEmail.classList.add("contactWarn");
	}else{
		warnEmail.textContent = "Good!";
		warnEmail.classList.remove("contactWarn");
		warnEmail.classList.add("contactSuccess");
	}
	if(message.value.length < 10 || message.value.length > 300){
		warnMessage.textContent = "The message can contain between 10 and 200 characters";
		warnMessage.classList.add("contactWarn");
	}else{
		warnMessage.textContent = "Good!";
		warnMessage.classList.remove("contactWarn");
		warnMessage.classList.add("contactSuccess");

	}

	
}


function handleInput() {
  const { checked } = this;
  document.querySelector('body').style.background = checked ? '#151d29' : '#ffffff';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(1) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(2) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(3) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(4) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(5) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(6) > span').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(1) > p').style.color = checked ? '#bababa' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(2) > p').style.color = checked ? '#bababa' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(3) > p').style.color = checked ? '#bababa' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(4) > p').style.color = checked ? '#bababa' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(5) > p').style.color = checked ? '#bababa' : '#151d29';
  document.querySelector('#services > div.service__card-conteiner > div:nth-child(6) > p').style.color = checked ? '#bababa' : '#151d29';
  const menuMobileDiv = document.querySelectorAll("#mobile__menu > div")
  menuMobileDiv.forEach (item => {
	  item.style.background = checked ? '#ffffff' : '#151d29';
  })
  const menuMobileP = document.querySelectorAll("#mobile__menu > div > p")
  menuMobileP.forEach (item => {
	  item.style.color = checked ? '#151d29' : '#ffffff';
  })
  document.querySelector('.navbar').style.background = checked ? '#151d29' : '#ffffff';
  document.querySelector("#book > div > form").style.background = checked ? '#1e293a' : '#f0f0f0';
  document.querySelector('.navbar__logo').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#search__button').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.navbar__icons > i.fas.fa-user.icon-navbar').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#mobile__menu-button').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(1)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(2)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(3)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(4)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(5)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(6)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('body > header > nav > div.desktop__menu > a:nth-child(7)').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#search__bar').style.background = checked ? '#151d29' : '#ffffff';
  document.querySelector('#mobile__menu').style.background = checked ? '#151d29' : '#ffffff';
  document.querySelector('#review').style.color = checked ? '#ffffff' : '#151d29';
  document.querySelector('#name').style.backgound = checked ? '#ffffff' : '#303843';
}

input.addEventListener('input', handleInput);


searchButton.addEventListener("click", e => {
    if(searchButton.classList.contains("fa-search")){
        searchBar.classList.remove("move-up");
        searchBar.classList.add("move-down");
    }if(searchButton.classList.contains("fa-times")){
        searchBar.classList.remove("move-down");
        searchBar.classList.add("move-up");
    }
    searchButton.classList.toggle("fa-times");
    searchButton.classList.toggle("fa-search");
});

mobileMenuButton.addEventListener("click", e => {
    if(mobileMenuButton.classList.contains("fa-bars")){
        mobileMenu.classList.remove("move__up-menu");
        mobileMenu.classList.add("move__down-menu");
    }
    if(mobileMenuButton.classList.contains("fa-times")){
        mobileMenu.classList.remove("move__down-menu");
        mobileMenu.classList.add("move__up-menu");
		textMenuMobile.forEach( item => {
			item.style.color = "#151d29"
		})
    }
    mobileMenuButton.classList.toggle("fa-times");
    mobileMenuButton.classList.toggle("fa-bars");
});


videobtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src
    });
});


var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swipe-right',
	  prevEl: '.swipe-left'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true, 
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	} 
    });

	var swiper = new swiper('.review-slider', {
		spaceBetween: 20,
		loop:true,
		autoplay: {
			delay: 2500,
			disabledOnInteraction: false,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}
	})

$(document).ready(function(){
	$('.image_container').on('mouseenter', function(e){
		x = e.pageX - $(this).offset().left,
		y = e.pageY - $(this).offset().top;
		$(this).find('span').css({top:y, left:x})
	});
	$('.image_container').on('mouseout', function(e){
		x = e.pageX - $(this).offset().left,
		y = e.pageY - $(this).offset().top;
		$(this).find('span').css({top:y, left:x})
	})
});



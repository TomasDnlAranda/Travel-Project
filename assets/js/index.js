const searchButton = document.querySelector("#search__button");
const searchBar    = document.querySelector("#search__bar");
const mobileMenuButton = document.querySelector("#mobile__menu-button");
const mobileMenu   = document.querySelector("#mobile__menu");
const videobtn = document.querySelectorAll('.video-btn');
const input = document.querySelector('input[type="checkbox"]');

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
  document.querySelector('.navbar').style.background = checked ? '#151d29' : '#ffffff';
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
})
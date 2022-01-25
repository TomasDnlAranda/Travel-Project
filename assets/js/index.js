const searchButton = document.querySelector("#search__button");
const searchBar    = document.querySelector("#search__bar");
const mobileMenuButton = document.querySelector("#mobile__menu-button");
const mobileMenu   = document.querySelector("#mobile__menu");
const videobtn = document.querySelectorAll('.video-btn');

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
let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.nav');

navBtn.addEventListener('click', function(){
	navBtn.classList.toggle('active');
	nav.classList.toggle('active');
})
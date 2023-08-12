let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');
let title = document.querySelector('title');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');

signupToggleBtn.onclick = () => {
	loginForm.classList.remove('active');
	signupForm.classList.add('active');
	title.textContent = 'Daftar | Restoran';
}

loginToggleBtn.onclick = () => {
	loginForm.classList.add('active');
	signupForm.classList.remove('active');
	title.textContent = 'Masuk | Restoran';
}
const logIn = document.querySelector(".login");
const userPhoto = document.querySelector(".user-photo");
const logOut = document.querySelector(".logout");


function login() {
	logIn.classList.add('hidden');
	userPhoto.classList.toggle('hidden');
	logOut.classList.toggle('hidden');
}

function logout() {
	logIn.classList.remove('hidden');
	userPhoto.classList.toggle('hidden');
	logOut.classList.toggle('hidden');
}

logIn.addEventListener("click", login);
logOut.addEventListener("click", logout);

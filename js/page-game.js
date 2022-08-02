const questions = document.querySelectorAll('.char-nav li');
const answer = document.querySelectorAll('.char-tabs li');
//смена информации об игре
for (let i = 0; i < questions.length; i++) {
	(function (i){
			let question = questions[i];
			question.onclick = function (){
				for (let j = 0; j < answer.length; j++) {
					const displayStyle = window.getComputedStyle(answer[j]).display;
					if(displayStyle === "list-item") {
						answer[j].style.height = "0";
						answer[j].style.zIndex = "10";
						answer[j].style.transitionDelay = "1";
						answer[j].style.overflow = "hidden";
					}
				}
				answer[i].style.height = "auto";
				answer[i].style.zIndex = "10";
				answer[j].style.transitionDelay = "1";
			}
	})(i);
};

// смена информации при нажатии
(function(){
	const link = document.getElementsByClassName('char-nav-link');
	for( let i = 0; i < link.length; i++ ){
			link[i].addEventListener('click', function(){
					for( let u = 0; u < link.length; u++ ){
							link[u].classList.remove('char-nav-link-active');
					}
					this.classList.add('char-nav-link-active');
			});
	}
})();
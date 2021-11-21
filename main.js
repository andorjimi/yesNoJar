const paper = document.querySelector('#paper');
const answer = document.querySelector('#answer');

function showHide(element) {
	if (element.style.display == 'block') {
		element.style.display = 'none';
	} else {
		element.style.display = 'block';
	}
}

function buttonClick(element) {
	showHide(paper);
	showHide(answer);
}

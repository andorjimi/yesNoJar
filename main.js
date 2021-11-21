const paper = document.querySelector('#paper');
let answer = document.querySelector('#answer');

function yesNo() {
	let newAnswer = Math.floor(Math.random() * 3);

	switch (newAnswer) {
		case 0:
			result = 0;
			newAnswer = 'No';
			return newAnswer;
		case 1:
			result = 1;
			newAnswer = 'Yes';
			return newAnswer;
		case 2:
			result = 2;
			newAnswer = '...';
			return newAnswer;
	}
}

function showHide(element) {
	if (element.style.display == 'block') {
		element.style.display = 'none';
	} else {
		if (element == answer) {
			answer.innerHTML = yesNo();
			element.style.display = 'block';
		} else {
			element.style.display = 'block';
		}
	}
}

function buttonClick(element) {
	showHide(paper);
	showHide(answer);
}

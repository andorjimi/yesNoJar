// Write the code for the game.

function yesNo() {
	let answer = Math.floor(Math.random() * 3);

	switch (answer) {
		case 0:
			answer = 0;
			console.log('No');
			break;
		case 1:
			answer = 1;
			console.log('Yes');
			break;
		case 2:
			answer = 2;
			console.log('...');
			break;
	}
}

yesNo();

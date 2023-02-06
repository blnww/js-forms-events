// 287 №1

// По потери фокуса текст из textarea должен записаться в див:
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');

// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });


// 287 №2

// По клику на кнопку в див должно записаться или одно, или другое значение:

// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// button.addEventListener('click', function() {
// 	if(checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });

// 287 №3

// По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });
// 296 №1

//     Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// let div = document.querySelector('div');

// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('ul')) {
// 		console.log('клик именно по таблице');
// 	}
//     if (event.target.matches('li')) {
// 		console.log('клик именно по пункту');
// 	}
// });


// 296 №2

//     Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul - ей в конец добавлялась новая li.
// let div = document.querySelector('div');

// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('ul')) {
//         let a  = document.createElement('li')
//         a.innerHTML = "4"
//         event.target.appendChild(a)
// 		console.log('клик именно по таблице');
// 	}
//     if (event.target.matches('li')) {
//         event.target.textContent += "!"
// 		console.log('клик именно по пункту');
// 	}
// });
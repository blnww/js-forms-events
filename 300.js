
// 300 №1

// Повторите приведенное решение. Убедитесь, что новые li также будут реагировать на клик.
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// list.addEventListener('click', function(event) {
//     if(event.target.tagName === "UL"){
//         let a  = document.createElement('li')
//         a.innerHTML = "item"
//         event.target.appendChild(a)
//     }
//     else if(event.target.tagName === "LI"){
//     event.target.innerHTML = event.target.innerHTML + "!";
//     }
    
// });


// 300 №2

//     Повторите приведенное решение.
// let elem   = document.querySelector('ul');
// elem.addEventListener('click', func)	
// function func(event){
//     let a = event.target.closest('li');
// 	if (a) {
// 		a.innerHTML = a.innerHTML + '!';
// 	}  
// }
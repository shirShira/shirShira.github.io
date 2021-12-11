let x = Math.floor((Math.random() * 10) + 1), y = Math.floor((Math.random() * 10) + 1);
let result = x + y;
document.getElementById('exe').innerHTML = `${x} + ${y} =`;
let solut = document.getElementById('solution').value;

console.log(solut==result);
// while(document.getElementById('click'))
// {
//     if (solut == result) {
//         document.getElementById('exe').innerHTML = "תשובה נכונה";
//     }
// }
// let allCards = document.querySelectorAll('.card');
getElementById('but') => card.addEventListener('click', checkCard));
// allCards.forEach((card) => card.addEventListener('click', checkCard));
// $('but').on('click', function() {
//   $('exe').text('Thanks!');
// });
function checkSolution
function checkCard(eventArgs) {
    console.log(eventArgs.target.id);
    eventArgs.target.classList.add('hide');
}
// let op = alert(document.body.dataset.operation);
// btn.addEventListener('click', () => {
//     alert('button clicked, registed with addEventListener');
// });


// switch(op){
//     case "*": result =x*y;
//     case "/": result =x/y;
//     case "+": result =x+y;
//     case "-": result =x-y;
// }

